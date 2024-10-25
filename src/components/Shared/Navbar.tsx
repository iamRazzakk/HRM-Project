import { Input } from "antd";
import { NavLink } from "react-router-dom";

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
            to="/employee-hiring"
            className={({ isActive }) =>
              isActive ? "font-bold text-blue-600" : "text-gray-400"
            }
          >
            Employee Hiring
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
            <Input
              style={{ width: "100%" }}
              defaultValue="Search Anything..."
            />
          </div>

          {/* User Profile */}
          <div className="flex items-center space-x-2 cursor-pointer">
            <img
              src="/profile.jpg"
              alt="User Profile"
              className="h-8 w-8 rounded-full"
            />
            <span className="hidden md:block">John Doe</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
