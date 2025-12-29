import { Outlet, useNavigate, useLocation } from "react-router-dom";
import Header from "./Header";
import { useEffect, useState } from "react";




import { MdOutlineMenu } from "react-icons/md";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { LuArrowLeftFromLine } from "react-icons/lu";
import { FaArrowRight } from "react-icons/fa6";
import AdminDashboard from "./AdminPannel/AdminDashboard";
import TeacherDashboard from "./TeacherPannel/TeacherDashboard";
import AdminSidebar from "./Sidebar/AdminSidebar";
import TeacherSidebar from "./Sidebar/TeacherSidebar";
const Root = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const role = localStorage.getItem("role");
  // const dispatch = useDispatch();
  // const { data: profile, refetch } = useGetProfileQuery();



  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // useEffect(() => {
  //   const authData = JSON.parse(localStorage.getItem("auth"));
  //   refetch();
  //   if (authData?.access && profile) {
  //     dispatch(
  //       userLoggedIn({
  //         token: authData.access,
  //         user: profile,
  //         schoolname: triggerGetSchoolInfo?.name,
  //       })
  //     );
  //   }
  // }, [profile, dispatch, refetch, triggerGetSchoolInfo]);

  useEffect(() => {
    if (!role) navigate("/login");
  }, [role, navigate]);

  if (role === null)
    return (
      <div className="flex items-center justify-center h-screen">
        Loading...
      </div>
    );

  const renderDefaultDashboard = () => {
    switch (role) {
      case "ADMIN":
        return <AdminDashboard />;
      case "TEACHER":
        return <TeacherDashboard />;

      default:
        return <div>Unauthorized or invalid role</div>;
    }
  };

  // Determine main content margin
  const mainContentClass = collapsed ? "lg:ml-[80px]" : "lg:ml-[270px]";

  return (
    <div className="relative flex h-screen bg-white">
      {/* Mobile hamburger */}
      <button
        className="absolute top-4 left-4 z-50 lg:hidden text-2xl text-[#1E3A8A]"
        onClick={() => setMobileOpen(true)}
      >
        <MdOutlineMenu />
      </button>

      {/* Desktop Sidebar */}
      <div
        className={`transition-all duration-300 h-screen bg-white border border-[#E8E8E8] fixed top-0 left-0 z-40
        ${collapsed ? "w-[80px]" : "w-[270px]"} hidden lg:block`}
      >
        {/* Arrow Toggle */}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className={`absolute  -right-[0.25rem]  text-[#000000] p-1 ${
            collapsed ? "top-[57px] " : " top-[49px] "
          }`}
        >
          {collapsed ? <GoArrowRight size={22} /> : <GoArrowLeft size={22} />}
        </button>

        {/* Sidebar Content */}
        {role === "ADMIN" && <AdminSidebar collapsed={collapsed} />}
        {role === "TEACHER" && <TeacherSidebar collapsed={collapsed} />}
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div className="bg-white w-[270px] h-full border border-[#E8E8E8] p-0 relative">
            <button
              className="absolute top-4 right-4 text-2xl text-[#1E3A8A]"
              onClick={() => setMobileOpen(false)}
            >
              ✕
            </button>
            {role === "ADMIN" && <AdminSidebar collapsed={false} />}
            {role === "TEACHER" && <TeacherSidebar collapsed={false} />}
          </div>
          <div
            className="flex-1 bg-black bg-opacity-30"
            onClick={() => setMobileOpen(false)}
          ></div>
        </div>
      )}

      {/* Main Content */}
      <div
        className={`flex-1 flex flex-col transition-all duration-300 ${mainContentClass}`}
      >
        <Header />
        <main className="flex-1 p-4 overflow-y-auto bg-white">
          {location.pathname === "/dashboard" ? (
            renderDefaultDashboard()
          ) : (
            <Outlet />
          )}
        </main>
      </div>
    </div>
  );
};

export default Root;
