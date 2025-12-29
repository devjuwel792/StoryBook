import { Outlet, useLocation } from "react-router-dom";
import { Sidebar } from "@/Admin/Dashboard/Sidebar";
import Header from "@/Admin/Dashboard/Header";
import AdminSidebar from "../../Sidebar/AdminSidebar";

export default function AdminLayout() {
  // State for currently selected menu in the sidebar
  console.log("first");

  const location = useLocation();

  const title = location.pathname.startsWith(`/admin/user-management`)
    ? "User Management"
    : location.pathname.startsWith(`/admin/story-library`)
    ? "Story Library"
    : location.pathname.startsWith(`/admin/ai-assistant-configuration`)
    ? "AI Assistant Configuration"
    : location.pathname.startsWith(`/admin/settings`)
    ? "Settings"
    : "Admin Dashboard";

  const subtitle = location.pathname.startsWith(`/admin/user-management`)
    ? "View and manage all students & Teacher"
    : location.pathname.startsWith(`/admin/story-library`)
    ? "View and manage all students"
    : location.pathname.startsWith(`/admin/ai-assistant-configuration`)
    ? "Configure the AI chatbot for Story Creator assistance"
    : location.pathname.startsWith(`/admin/settings`)
    ? "Manage platform preferences and configurations"
    : "Welcome back! Here's what's happening with your students.";
  return (
    <div>
      {/* Sidebar */}
      <div className="w-72 fixed top-0 left-0 h-screen">
        <AdminSidebar />
      </div>

      {/* Main Content area (pages render into the Outlet) */}
      <div className="flex-1 ml-72 min-h-screen overflow-y-auto">
        <Header title={title} subtitle={subtitle} />
        <div className="px-6 bg-[#FBFBFB] min-h-screen">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
