import { FaSignOutAlt } from "react-icons/fa";
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";

import { PiStudentBold } from "react-icons/pi";
import { BiRevision } from "react-icons/bi";
import { FaRegCalendarCheck } from "react-icons/fa";
import { GrResources } from "react-icons/gr";

const TeacherSidebar = ({ collapsed }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActiveDashboard =
    location.pathname.startsWith("/dashboard/lesson-plan") ||
    location.pathname.startsWith("/dashboard/theme");
  const isActiveAllLesson = location.pathname.startsWith(
    "/dashboard/all-lesson-plan"
  );
  const isActiveStudent =
    location.pathname.startsWith("/dashboard/student-management") ||
    location.pathname.startsWith("/dashboard/observation") ||
    location.pathname.startsWith("/dashboard/weekly-goal") ||
    location.pathname.startsWith("/dashboard/progress") ||
    location.pathname.startsWith("/dashboard/generate");
  const isActiveRsource = location.pathname.startsWith("/dashboard/resource");

  const handleLogout = () => {
    // dispatch(userLoggedOut());
    localStorage.removeItem("accessToken");
    navigate("/login", { replace: true });
  };

  return (
    <div className="bg-[#FFFFFF] border-r-2 border-r-[#E8E8E8] min-h-screen flex flex-col justify-between open-sns">
      {/* Logo */}
      <div className="flex flex-col py-4">
        <Link to="/">
          <div
            className={`flex items-center gap-2  pt-2 pb-4 cursor-pointer ${
              collapsed ? "px-0" : "px-6 "
            }`}
          >
            {/* <img src={logo} alt="Logo" className="h-[63px] w-[63px] mb-2" /> */}
            {!collapsed && (
              <h1 className="montserrat text-[#222222] text-lg font-medium whitespace-nowrap">
                WayLearn AI
              </h1>
            )}
          </div>
        </Link>

        {/* Menu Items */}
        <nav className="flex flex-col text-[#364636]">
          {/* Lesson Plan */}
          <NavLink
            to="/dashboard/lesson-plan"
            className="flex items-center justify-between w-[280px]"
          >
            <div className="flex items-center justify-between w-[280px] font-medium p-2 pt-7">
              <div
                className={`flex items-center space-x-2 justify-start gap-2  p-5 text-center ${
                  collapsed ? "w-[63px] h-[40px]" : "w-[250px] h-[50px] "
                }  ${
                  isActiveDashboard
                    ? "bg-[#1E3A8A] text-[#FAF1E6] rounded-xl"
                    : "text-[#18181B]"
                }`}
              >
                <BiRevision className="w-[24px] h-[24px] montserrat" />
                {!collapsed && (
                  <h1 className="text-lg font-medium montserrat">
                    Lesson plan
                  </h1>
                )}
              </div>
            </div>
          </NavLink>

          {/* All Lesson Plan */}
          <NavLink
            to="/dashboard/all-lesson-plan"
            className="flex items-center justify-between w-[280px]"
          >
            <div className="flex items-center justify-between w-[280px] font-medium p-2">
              <div
                className={`flex items-center space-x-2 justify-start gap-2  p-5 text-center ${
                  collapsed ? "w-[63px] h-[40px]" : "w-[250px] h-[50px] "
                } ${
                  isActiveAllLesson
                    ? "bg-[#1E3A8A] text-[#FAF1E6] rounded-xl"
                    : "text-[#18181B]"
                }`}
              >
                <FaRegCalendarCheck className="w-[24px] h-[24px] montserrat" />
                {!collapsed && (
                  <h1 className="text-lg font-medium montserrat">
                    All Lesson plan
                  </h1>
                )}
              </div>
            </div>
          </NavLink>

          {/* Student Profile */}
          <NavLink
            to="/dashboard/student-management"
            className="flex items-center justify-between w-[280px]"
          >
            <div className="flex items-center justify-between w-[280px] font-medium p-2 pt-2">
              <div
                className={`flex items-center space-x-2 justify-start gap-2  p-5 text-center ${
                  collapsed ? "w-[63px] h-[40px]" : "w-[250px] h-[50px] "
                } ${
                  isActiveStudent
                    ? "bg-[#1E3A8A] text-[#FAF1E6] rounded-xl"
                    : "text-[#18181B]"
                }`}
              >
                <PiStudentBold className="w-[24px] h-[24px] montserrat" />
                {!collapsed && (
                  <h1 className="text-lg font-medium montserrat">
                    Student Profile
                  </h1>
                )}
              </div>
            </div>
          </NavLink>

          {/* Resources */}
          <NavLink
            to="/dashboard/resource"
            className="flex items-center justify-between w-[280px]"
          >
            <div className="flex items-center justify-between w-[280px] font-medium p-2 pt-2">
              <div
                className={`flex items-center space-x-2 justify-start gap-4 p-5 text-center ${
                  collapsed ? "w-[63px] h-[40px]" : "w-[250px] h-[50px] "
                } ${
                  isActiveRsource
                    ? "bg-[#1E3A8A] text-[#FAF1E6] rounded-xl"
                    : "text-[#18181B]"
                }`}
              >
                <GrResources className="w-[24px] h-[24px]" />
                {!collapsed && (
                  <h1 className="text-lg font-medium montserrat">Resources</h1>
                )}
              </div>
            </div>
          </NavLink>
        </nav>
      </div>

      {/* Logout */}
      <div
        onClick={handleLogout}
        className="flex items-center p-2 pb-10 pl-10 space-x-3 text-red-600 rounded-lg cursor-pointer"
      >
        <FaSignOutAlt />
        {!collapsed && <span>Log Out</span>}
      </div>
    </div>
  );
};

export default TeacherSidebar;
