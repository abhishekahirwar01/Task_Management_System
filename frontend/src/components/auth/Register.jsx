import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useAuth from "../../hooks/useAuth";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = formData;

  const navigate = useNavigate();
  const { register } = useAuth();

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      await register({ name, email, password });
      toast.success("Registered successfully");
      navigate("/dashboard");
    } catch (error) {
      toast.error("Registration failed");
    }
  };

  return (
    <div className="container mx-auto px-4 max-w-md">
      <h1 className="text-2xl font-bold mb-4">Register</h1>
      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={onChange}
            required
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div>
          <label className="block mb-1">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={onChange}
            required
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div>
          <label className="block mb-1">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={onChange}
            required
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Register
        </button>
      </form>
      <p className="mt-4">
        Already have an account?{" "}
        <Link to="/login" className="text-blue-500">
          Login
        </Link>
      </p>
    </div>
  );
};

export default Register;
