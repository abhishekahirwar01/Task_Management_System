import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Home from "./pages/Home";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Dashboard from "./pages/Dashboard";
import TaskForm from "./components/tasks/TaskForm";
import TaskDetails from "./components/tasks/TaskDetails";
import NotFound from "./pages/NotFound";
import PrivateRoute from "./components/common/PrivateRoute";
import Root from "./pages/Root";
import About from "./pages/About";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Routes>
            <Route path="/" element={<Root />}>
              <Route index element={<Home />} />
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
              <Route path="about" element={<About />} />{" "}
              <Route element={<PrivateRoute />}>
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="tasks/create" element={<TaskForm />} />
                <Route path="tasks/:id/edit" element={<TaskForm />} />
                <Route path="tasks/:id" element={<TaskDetails />} />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
