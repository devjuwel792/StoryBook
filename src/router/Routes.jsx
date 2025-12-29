import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Signup from "../pages/Auth/Signup";
import Login from "../pages/Auth/Login";
import ForgotPassword from "../pages/Auth/Forgot";
import Otp from "../pages/Auth/OTP";
import StoryCreatorStudio from "../pages/Creator/StoryCreatorStudio";
import { MyStories } from "../pages/MyStories/MyStories";
import { Progress } from "../pages/Progress/Progress";
import Root from "../components/Dashboard/Root";
import TeacherSidebar from "../components/Dashboard/Sidebar/TeacherSidebar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: (
      <h2 className="mt-10 text-center text-red-500">Route not found</h2>
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
  { path: "/story-creator", element: <StoryCreatorStudio /> },
  { path: "/myStories", element: <MyStories /> },
  { path: "/progress", element: <Progress /> },
  // Dashbaord
  {
    path: "/dashboard",
    element: <Root></Root>,
    children: [
      {
        index: true,
        element: <TeacherSidebar></TeacherSidebar>,
      },
    ],
  },
]);

export default router;
