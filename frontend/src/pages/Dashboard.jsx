import { useEffect } from "react";
import TaskList from "../components/tasks/TaskList";
import useAuth from "../hooks/useAuth";
import Logout from "../components/Logout";

const Dashboard = () => {
  const { user } = useAuth();

  useEffect(() => {}, [user]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <Logout handleLogout={handleLogout} />
      </div>

      {user ? (
        <>
          <p className="mb-4 text-gray-700">Welcome, {user.email}</p>
          <TaskList />
        </>
      ) : (
        <p>Not authenticated</p>
      )}
    </div>
  );
};

export default Dashboard;
