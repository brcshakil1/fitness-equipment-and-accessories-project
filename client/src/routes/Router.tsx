import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
  },
]);

export default Router;
