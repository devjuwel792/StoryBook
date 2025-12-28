import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Signup from "../pages/Auth/Signup";
import Login from "../pages/Auth/Login";
import ForgotPassword from "../pages/Auth/Forgot";
import Otp from "../pages/Auth/OTP";
import { Progress } from "../pages/Progress/Progress";
import DashboardHome from "../components/dashboard/DashboardHome";
import LibraryLists from "../components/dashboard/_component/Library/LibraryLists";
import ViewBook from "../components/dashboard/_component/Library/ViewBook";
import Achievement from "../components/dashboard/_component/Achivement/Achivement";

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
  { path: "/forgot", element: <ForgotPassword /> },
  { path: "/otp", element: <Otp /> },
  { path: "/progress", element: <Progress /> },
  {
    path: "/dashboard", element: <DashboardHome />
  },
  {
    path: "/library", element: <LibraryLists />
  },
  {
    path: "/:read-book", element: <ViewBook />
  },
  {
path: "/achivement", element: <Achievement />
  }
]);

export default router;
