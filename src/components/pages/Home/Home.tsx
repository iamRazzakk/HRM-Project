import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-green-400 to-blue-500">
      <div className="text-center text-white p-6 bg-white bg-opacity-20 rounded-lg shadow-lg backdrop-blur-md">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          Employee Time Log
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          Keep track of your working hours, projects, and notes effortlessly!
        </p>
        <Link
          to="/employees"
          className="bg-white text-green-600 hover:bg-gray-200 px-6 py-3 rounded-full text-lg font-semibold transition duration-300 ease-in-out"
        >
          Access Your Logs
        </Link>
      </div>
    </div>
  );
};

export default Home;
