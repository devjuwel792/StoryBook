import { Navigate } from "react-router-dom";

import AdminDashboard from "../components/Dashboard/AdminPannel/AdminDashboard";
import TeacherDashboard from "../components/Dashboard/TeacherPannel/TeacherDashboard";

export default function DashboardContent() {
  // const role = useSelector((state) => state.auth?.user?.role);
  const role = localStorage.getItem("role");

  if (!role) return <p>Loading...</p>;

  switch (role.toLowerCase()) {
    case "ADMIN":
      return <AdminDashboard />;

    case "TEACHER":
      return <TeacherDashboard />;

    default:
      return <Navigate to="/" replace />;
  }
}
