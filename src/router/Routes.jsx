import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Signup from "../pages/Auth/Signup";
import Login from "../pages/Auth/Login";
import ForgotPassword from "../pages/Auth/Forgot";
import Otp from "../pages/Auth/OTP";


import DashboardHome from "../components/dashboard/DashboardHome";
import LibraryLists from "../components/dashboard/_component/Library/LibraryLists";
import ViewBook from "../components/dashboard/_component/Library/ViewBook";
import Achievement from "../components/dashboard/_component/Achivement/Achivement";
import Profile from "../pages/Profile/Profile";
import StoryCreatorStudio from "../pages/Creator/StoryCreatorStudio";
import { MyStories } from "../pages/MyStories/MyStories";
import Root from "../components/Dashboard/Root";
import TeacherSidebar from "../components/Dashboard/Sidebar/TeacherSidebar";
import TeacherDashboard from "../components/Dashboard/TeacherPannel/TeacherDashboard";
import DashboardContent from "../utils/DashboardContent";
import AdminDashboard from "../components/Dashboard/AdminPannel/AdminDashboard";
import StudentManagement from "../components/Dashboard/TeacherPannel/Students/StudentManagement";
import TeacherSettings from "../components/Dashboard/TeacherPannel/TeacherSettings/TeacherSettings";


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
  },
  {
    path:'/profile', element: <Profile />
  },

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
