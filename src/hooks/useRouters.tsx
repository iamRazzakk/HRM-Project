import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import { MainRoutes } from "../routes/Main.routes";
import Error from "../components/pages/error/Error";

export const useRouter = () => {
  return createBrowserRouter([
    {
      path: "/",
      element: <MainLayouts />,
      children: MainRoutes,
      errorElement: <Error />,
    },

    {
      path: "*",
      element: <Error />,
    },
  ]);
};
