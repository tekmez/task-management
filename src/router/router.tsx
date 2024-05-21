import { Navigate, createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../error-page";
import AllTask from "../pages/AllTask";
import WaitingTask from "../pages/WaitingTask";
import CompletedTask from "../pages/CompletedTask";
import CanceledTask from "../pages/CanceledTask";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Navigate to="/all-tasks" replace />,
      },
      {
        path: "all-tasks",
        element: <AllTask />,
      },
      {
        path: "waiting-tasks",
        element: <WaitingTask />,
      },
      {
        path: "completed-tasks",
        element: <CompletedTask />,
      },
      {
        path: "canceled-tasks",
        element: <CanceledTask />,
      },
    ],
  },
]);
