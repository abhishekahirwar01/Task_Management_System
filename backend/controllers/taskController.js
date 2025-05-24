import asyncHandler from "express-async-handler";
import Task from "../models/Task.js";

// @desc    Get all tasks
// @route   GET /api/tasks
// @access  Private
const getTasks = asyncHandler(async (req, res) => {
  const pageSize = 10;
  const page = Number(req.query.pageNumber) || 1;

  const count = await Task.countDocuments({ user: req.user._id });
  const tasks = await Task.find({ user: req.user._id })
    .sort({ createdAt: -1 })
    .limit(pageSize)
    .skip(pageSize * (page - 1));

  res.json({ tasks, page, pages: Math.ceil(count / pageSize) });
});

// @desc    Get single task
// @route   GET /api/tasks/:id
// @access  Private
const getTaskById = asyncHandler(async (req, res) => {
  const task = await Task.findOne({
    _id: req.params.id,
    user: req.user._id,
  });

  if (task) {
    res.json(task);
  } else {
    res.status(404);
    throw new Error("Task not found");
  }
});

// @desc    Create a task
// @route   POST /api/tasks
// @access  Private
const createTask = asyncHandler(async (req, res) => {
  const { title, description, dueDate, priority } = req.body;

  const task = new Task({
    user: req.user._id,
    title,
    description,
    dueDate,
    priority,
  });

  const createdTask = await task.save();
  res.status(201).json(createdTask);
});

// @desc    Update a task
// @route   PUT /api/tasks/:id
// @access  Private
const updateTask = asyncHandler(async (req, res) => {
  const { title, description, dueDate, status, priority } = req.body;

  const task = await Task.findOne({
    _id: req.params.id,
    user: req.user._id,
  });

  if (task) {
    task.title = title || task.title;
    task.description = description || task.description;
    task.dueDate = dueDate || task.dueDate;
    task.status = status || task.status;
    task.priority = priority || task.priority;

    const updatedTask = await task.save();
    res.json(updatedTask);
  } else {
    res.status(404);
    throw new Error("Task not found");
  }
});

// @desc    Delete a task
// @route   DELETE /api/tasks/:id
// @access  Private
const deleteTask = asyncHandler(async (req, res) => {
  const task = await Task.findOneAndDelete({
    _id: req.params.id,
    user: req.user._id,
  });

  if (task) {
    res.json({ message: "Task removed" });
  } else {
    res.status(404);
    throw new Error("Task not found");
  }
});

export { getTasks, getTaskById, createTask, updateTask, deleteTask };
