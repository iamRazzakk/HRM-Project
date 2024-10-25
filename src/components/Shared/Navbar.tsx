import { NavLink } from "react-router-dom";
import avater from "../../assets/avater.jpg";
import SearchBar from "./SearchBar";
const Navbar = () => {
  return (
    <nav className="bg-white text-gray-950 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left Side: Logo */}
        <div className="flex items-center">
          <span className="font-bold text-lg">Plato</span>
        </div>

        {/* Middle Side: Navigation Links */}
        <div className="hidden md:flex space-x-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "font-bold text-blue-600" : "text-gray-400"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/employees"
            className={({ isActive }) =>
              isActive ? "font-bold text-blue-600" : "text-gray-400"
            }
          >
            Employee
          </NavLink>
          <NavLink
            to="/report-files"
            className={({ isActive }) =>
              isActive ? "font-bold text-blue-600" : "text-gray-400"
            }
          >
            Report Files
          </NavLink>
          <NavLink
            to="/payrolls"
            className={({ isActive }) =>
              isActive ? "font-bold text-blue-600" : "text-gray-400"
            }
          >
            Payrolls
          </NavLink>
        </div>

        {/* Right Side: Search Bar & User Profile */}
        <div className="flex items-center space-x-4">
          {/* Search Bar */}
          <div className="">
            <SearchBar />
          </div>

          {/* User Profile */}
          <div className="flex items-center space-x-2 cursor-pointer">
            <div className="text-right">
              <span className="hidden font-bold text-lg md:block">
                Sadik Hasan
              </span>
              <span className="text-gray-400">Friday, 29 september</span>
            </div>
            <img
              src={avater}
              alt="User Profile"
              className="h-10 w-10 rounded-lg"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
