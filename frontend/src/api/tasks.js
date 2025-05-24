import axios from "axios";

const API_URL = "http://localhost:5000/api/tasks/";

// Create new task
const createTask = async (taskData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL, taskData, config);

  return response.data;
};

// Get user tasks
const getTasks = async (page, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL + `?pageNumber=${page}`, config);

  return response.data;
};

// Get single task
const getTask = async (taskId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL + taskId, config);

  return response.data;
};

// Update task
const updateTask = async (taskId, taskData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.put(API_URL + taskId, taskData, config);

  return response.data;
};

// Delete task
const deleteTask = async (taskId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.delete(API_URL + taskId, config);

  return response.data;
};

const taskService = {
  createTask,
  getTasks,
  getTask,
  updateTask,
  deleteTask,
};

export default taskService;
