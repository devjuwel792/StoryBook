import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Signup from "../pages/Auth/Signup";
import Login from "../pages/Auth/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: (
      <h2 className="text-red-500 text-center mt-10">Route not found</h2>
    ),
    children: [
      { index: true, element: <App /> },
      // auth routes
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <Signup /> },
]);

export default router;
