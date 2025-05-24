import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import useAuth from "../../hooks/useAuth.js";
import taskService from "../../api/tasks.js";
import TaskItem from "./TaskItem.jsx";
import Pagination from "../common/Pagination.jsx";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);
  const { user } = useAuth();

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const data = await taskService.getTasks(page, user.token);
        
        setTasks(data.tasks);
        setPages(data.pages);
      } catch (error) {
        console.error("Error fetching tasks:", error);
        toast.error("Failed to fetch tasks");
      }
    };

    fetchTasks();
  }, [page, user]);

  const deleteHandler = async (id) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      try {
        await taskService.deleteTask(id, user.token);
        toast.success("Task deleted");
        // Refresh tasks after deletion
        const data = await taskService.getTasks(page, user.token);
        setTasks(data.tasks);
        setPages(data.pages);
      } catch (error) {
        toast.error("Failed to delete task");
      }
    }
  };

  const handleStatusChange = async (taskId, newStatus) => {
    try {
      const updatedTask = await taskService.updateTask(
        taskId,
        { status: newStatus },
        user.token
      );

      setTasks(tasks.map((task) => (task._id === taskId ? updatedTask : task)));
      toast.success(`Task marked as ${newStatus}`);
    } catch (error) {
      console.error("Error updating task status:", error);
      toast.error("Failed to update task status");
    }
  };

  return (
    <div className="container mx-auto px-4 max-w-2xl">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">My Tasks</h1>
        <Link
          to="/tasks/create"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Create Task
        </Link>
      </div>
      {tasks.length === 0 ? (
        <p>No tasks found. Create one to get started!</p>
      ) : (
        <>
          <div className="space-y-4">
            {tasks.map((task) => (
              <TaskItem
                key={task._id}
                task={task}
                onDelete={deleteHandler}
                onStatusChange={handleStatusChange}
              />
            ))}
          </div>
          <Pagination page={page} pages={pages} changePage={setPage} />
        </>
      )}
    </div>
  );
};

export default TaskList;
