import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Signup from "../pages/Auth/Signup";
import Login from "../pages/Auth/Login";
import ForgotPassword from "../pages/Auth/Forgot";
import Otp from "../pages/Auth/OTP";
import StoryCreatorStudio from "../pages/Creator/StoryCreatorStudio";
import { MyStories } from "../pages/MyStories/MyStories";
import Root from "../components/Dashboard/Root";
import TeacherSidebar from "../components/Dashboard/Sidebar/TeacherSidebar";
import TeacherDashboard from "../components/Dashboard/TeacherPannel/TeacherDashboard";
import DashboardContent from "../utils/DashboardContent";
import AdminDashboard from "../components/Dashboard/AdminPannel/AdminDashboard";
import StudentManagement from "../components/Dashboard/TeacherPannel/Students/StudentManagement";
import TeacherSettings from "../components/Dashboard/TeacherPannel/TeacherSettings/TeacherSettings";
import { StoryLibrary } from "../components/Dashboard/AdminPannel/StoryLibrary/StoryLibrary";
import AdminStoryCreatorStudio from "../components/Dashboard/AdminPannel/StoryLibrary/StoryCreatorStudio";
import Congratulations from "../pages/Auth/Congratulation";
import { UserManagement } from "../components/Dashboard/AdminPannel/User/User-Management";

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
  { path: "/congratulations", element: <Congratulations /> },
  { path: "/story-creator", element: <StoryCreatorStudio /> },
  { path: "/myStories", element: <MyStories /> },
  // Dashbaord
  {
    path: "/dashboard",
    element: <Root></Root>,
    children: [
      {
        index: true,
        element: <DashboardContent></DashboardContent>,
      },
      {
        path: "admin",
        element: <AdminDashboard />,
      },
      {
        path: "storyLibrary",
        element: <StoryLibrary />,
      },
      {
        path: "admin-story-create",
        element: <AdminStoryCreatorStudio/>,
      },
      {
        path: "user",
        element: <UserManagement/>,
      },
      // Teacher Dashboard
      {
        path: "teacher",
        element: <TeacherDashboard />,
      },
      {
        path: "students",
        element: <StudentManagement />,
      },
       {
        path: "settings",
        element: <TeacherSettings />,
      },
    ],
  },
]);

export default router;
