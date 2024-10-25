import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-green-400 to-blue-500 text-white">
      <div className="text-center">
        <h1 className="text-9xl font-bold">404</h1>
        <h2 className="mt-4 text-4xl font-semibold">Oops! Page Not Found</h2>
        <p className="mt-2 text-lg">
          We can't seem to find the page you're looking for.
        </p>
        <Link
          to="/"
          className="mt-6 inline-block px-6 py-3 text-lg font-semibold text-green-600 bg-white rounded-lg shadow-lg hover:bg-gray-200 transition duration-200"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
