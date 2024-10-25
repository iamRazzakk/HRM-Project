import Employee from "../components/pages/Employee/Employee";
import Home from "../components/pages/Home/Home";

export const MainRoutes = [
  {
    path: "",
    element: <Home />,
  },
  {
    path: "employees",
    element: <Employee />,
  },
];
