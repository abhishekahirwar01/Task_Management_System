import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container mx-auto px-4 py-8 text-center">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-xl mb-6">
        The page you are looking for does not exist.
      </p>
      <Link
        to="/"
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Go to Home
      </Link>
    </div>
  );
};

export default NotFound;
