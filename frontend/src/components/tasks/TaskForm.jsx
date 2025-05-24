import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import useAuth from "../../hooks/useAuth";
import taskService from "../../api/tasks";
import { format } from "date-fns";

const TaskForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    dueDate: format(new Date(), "yyyy-MM-dd"),
    priority: "medium",
  });

  const { title, description, dueDate, priority } = formData;

  const navigate = useNavigate();
  const { user } = useAuth();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const fetchTask = async () => {
        try {
          const task = await taskService.getTask(id, user.token);
          setFormData({
            title: task.title,
            description: task.description,
            dueDate: format(new Date(task.dueDate), "yyyy-MM-dd"),
            priority: task.priority,
          });
        } catch (error) {
          toast.error("Task not found");
          navigate("/dashboard");
        }
      };

      fetchTask();
    }
  }, [id, user, navigate]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      if (id) {
        await taskService.updateTask(id, formData, user.token);
        toast.success("Task updated");
      } else {
        await taskService.createTask(formData, user.token);
        toast.success("Task created");
      }
      navigate("/dashboard");
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="container mx-auto px-4 max-w-md">
      <h1 className="text-2xl font-bold mb-4">
        {id ? "Update Task" : "Create Task"}
      </h1>
      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={onChange}
            required
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div>
          <label className="block mb-1">Description</label>
          <textarea
            id="description"
            name="description"
            value={description}
            onChange={onChange}
            required
            className="w-full px-3 py-2 border rounded"
            rows="4"
          />
        </div>
        <div>
          <label className="block mb-1">Due Date</label>
          <input
            type="date"
            id="dueDate"
            name="dueDate"
            value={dueDate}
            onChange={onChange}
            required
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div>
          <label className="block mb-1">Priority</label>
          <select
            name="priority"
            value={priority}
            onChange={onChange}
            className="w-full px-3 py-2 border rounded"
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          {id ? "Update Task" : "Create Task"}
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
