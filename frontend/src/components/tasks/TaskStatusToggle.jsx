// frontend/src/components/tasks/TaskStatusToggle.jsx
import { useState } from "react";
import taskService from "../../api/tasks";

const TaskStatusToggle = ({ task, onStatusChange }) => {
  const [isUpdating, setIsUpdating] = useState(false);

  const handleStatusToggle = async () => {
    try {
      setIsUpdating(true);
      const newStatus = task.status === "pending" ? "completed" : "pending";
      const updatedTask = await taskService.updateTask(task._id, {
        ...task,
        status: newStatus,
      });
      onStatusChange(updatedTask);
    } catch (error) {
      console.error("Failed to update status:", error);
    } finally {
      setIsUpdating(false);
    }
  };

  return (
    <button
      onClick={handleStatusToggle}
      disabled={isUpdating}
      className={`px-3 py-1 rounded-full text-xs font-medium ${
        task.status === "completed"
          ? "bg-green-100 text-green-800"
          : "bg-yellow-100 text-yellow-800"
      }`}
    >
      {isUpdating ? "..." : task.status}
    </button>
  );
};

export default TaskStatusToggle;
