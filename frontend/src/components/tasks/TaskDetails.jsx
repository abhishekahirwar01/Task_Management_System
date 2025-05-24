import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { toast } from "react-toastify";
import useAuth from "../../hooks/useAuth";
import taskService from "../../api/tasks";
import { format } from "date-fns";

const TaskDetails = () => {
  const [task, setTask] = useState(null);
  const { id } = useParams();
  const { user } = useAuth();

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const taskData = await taskService.getTask(id, user.token);
        setTask(taskData);
      } catch (error) {
        toast.error("Task not found");
      }
    };

    fetchTask();
  }, [id, user]);

  if (!task) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 max-w-2xl">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Task Details</h1>
        <Link
          to="/dashboard"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Back to Tasks
        </Link>
      </div>
      <div className="border rounded p-6">
        <h2 className="text-xl font-bold mb-2">{task.title}</h2>
        <div className="flex space-x-4 mb-4">
          <span
            className={`inline-block px-2 py-1 text-xs rounded-full ${
              task.status === "completed"
                ? "bg-green-100 text-green-800"
                : "bg-yellow-100 text-yellow-800"
            }`}
          >
            {task.status}
          </span>
          <span
            className={`inline-block px-2 py-1 text-xs rounded-full ${
              task.priority === "high"
                ? "bg-red-100 text-red-800"
                : task.priority === "medium"
                ? "bg-blue-100 text-blue-800"
                : "bg-gray-100 text-gray-800"
            }`}
          >
            {task.priority}
          </span>
        </div>
        <p className="mb-4">
          <strong>Due Date:</strong>{" "}
          {format(new Date(task.dueDate), "MMM dd, yyyy")}
        </p>
        <div className="mb-4">
          <strong>Description:</strong>
          <p className="mt-2 p-4 bg-gray-50 rounded">{task.description}</p>
        </div>
        <div className="flex space-x-4">
          <Link
            to={`/tasks/${task._id}/edit`}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Edit Task
          </Link>
          <Link
            to="/dashboard"
            className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
          >
            Back to Tasks
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TaskDetails;
