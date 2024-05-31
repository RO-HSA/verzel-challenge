import { createBrowserRouter } from "react-router-dom";

import Admin from "./components/Admin";
import CarsDisplay from "./components/CarsDisplay";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <CarsDisplay />,
      },
      {
        path: "/register",
        element: <RegisterForm />,
      },
      {
        path: "/login",
        element: <LoginForm />,
      },
      {
        path: "/admin",
        element: <Admin />,
      },
    ],
  },
]);

export default router;
