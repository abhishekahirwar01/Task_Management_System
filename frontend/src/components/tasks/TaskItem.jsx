import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const TaskItem = ({ task, onDelete, onStatusChange }) => {
  const handleStatusToggle = () => {
    const newStatus = task.status === "pending" ? "completed" : "pending";
    onStatusChange(task._id, newStatus);
  };

  return (
    <div className="border rounded p-4 mb-4">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-bold text-lg">{task.title}</h3>
          <p className="text-gray-600">
            Due: {new Date(task.dueDate).toLocaleDateString()}
          </p>
          <div className="flex items-center mt-2 space-x-2">
            <button
              onClick={handleStatusToggle}
              className={`px-3 py-1 rounded-full text-xs font-medium ${
                task.status === "completed"
                  ? "bg-green-100 text-green-800 hover:bg-green-200"
                  : "bg-yellow-100 text-yellow-800 hover:bg-yellow-200"
              }`}
            >
              {task.status}
            </button>
            <span
              className={`px-2 py-1 text-xs rounded-full ${
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
        </div>
        <div className="flex space-x-2">
          <Link
            to={`/tasks/${task._id}/edit`}
            className="text-blue-500 hover:text-blue-700"
          >
            <FaEdit />
          </Link>
          <button
            onClick={() => onDelete(task._id)}
            className="text-red-500 hover:text-red-700"
          >
            <FaTrash />
          </button>
        </div>
      </div>
      <Link
        to={`/tasks/${task._id}`}
        className="mt-2 inline-block text-blue-500 hover:underline"
      >
        View Details
      </Link>
    </div>
  );
};

export default TaskItem;
