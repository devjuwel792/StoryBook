import { FaSignOutAlt } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";
import { LuUserRoundPlus } from "react-icons/lu";
import { FaUsers } from "react-icons/fa";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { FiSettings } from "react-icons/fi";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { BookOpen, MessageSquare } from "lucide-react";

const AdminSidebar = ({ collapsed }) => {
  const navigate = useNavigate();
  //   const dispatch = useDispatch();
  //   const location = useLocation();

  const isActiveDashboard = location.pathname.startsWith("/dashboard/admin");
  const isActiveUsers = location.pathname.startsWith("/dashboard/user");
  const isActiveAdmin = location.pathname.startsWith("/dashboard/makeAdmin");
  const isActiveSubs = location.pathname.startsWith("/dashboard/subscription");
  const isActiveSettings = location.pathname.startsWith("/dashboard/settings");

  const handleLogOut = () => {
    // dispatch(userLoggedOut());
    // persistor.purge();
    navigate("/login", { replace: true });
  };

  return (
    <div className="green border-r-2 border-r-[#E8E8E8] min-h-screen flex flex-col justify-between inter">
      {/* Logo Section */}
      <div className="flex flex-col py-4">
        <Link to="/">
          <div
            className={`flex items-center gap-2 pt-2 pb-4 cursor-pointer ${
              collapsed ? "px-0" : "px-6"
            }`}
          >
            {/* <img src={logo} alt="Logo" className="h-[63px] w-[63px] mb-2" /> */}
            {!collapsed && (
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-yellow-400 rounded-[10px] inline-flex justify-center items-center">
                  <BookOpen color="#1F3A2B" strokeWidth={1.5} />
                </div>
                <div className="flex flex-col justify-center">
                  <h1 className="justify-start text-white text-2xl font-normal font-nunito">
                  LiteracyHub
                </h1>
                <p className="justify-start text-gray-400 text-xs font-normal font-nunito">
                  Admin Portal
                </p>
                </div>
              </div>
            )}
          </div>
        </Link>

        {/* Menu Items */}
        <nav className="flex flex-col text-[#364636] space-y-2 mt-4">
          {/* Admin Dashboard */}
          <NavLink
            to="/dashboard/admin"
            className="flex items-center justify-between "
          >
            <div
              className={`flex items-center justify-between  font-medium p-2 pt-2 ${
                collapsed ? "w-[63px] h-[40px]" : " h-[50px]"
              }`}
            >
              <div
                className={`flex items-center gap-2 justify-start p-5 text-center ${
                  collapsed ? "w-[63px] h-[40px]" : "w-[250px] h-[50px]"
                } ${
                  isActiveDashboard
                    ? "bg-[yellow] text-black rounded-xl"
                    : "text-white"
                }`}
              >
                <AiOutlineHome className="w-5 h-5" />
                {!collapsed && (
                  <h1 className="text-sm font-normal montserrat">
                    Admin Dashboard
                  </h1>
                )}
              </div>
            </div>
          </NavLink>

          {/* User Management */}
          <NavLink
            to="/dashboard/user"
            className="flex items-center justify-between"
          >
            <div
              className={`flex items-center justify-between  font-medium p-2 pt-2 ${
                collapsed ? "w-[63px] h-[40px]" : " h-[50px]"
              }`}
            >
              <div
                className={`flex items-center gap-2 justify-start p-5 text-center ${
                  collapsed ? "w-[63px] h-[40px]" : "w-[250px] h-[50px]"
                } ${
                  isActiveUsers
                    ? "bg-[yellow] text-black rounded-xl"
                    : "text-white"
                }`}
              >
                <FaUsers className="w-5 h-5" />
                {!collapsed && (
                  <h1 className="text-sm font-normal montserrat">
                    User Management
                  </h1>
                )}
              </div>
            </div>
          </NavLink>

          {/* School Admin */}
          <NavLink
            to="admin/story-library"
            className="flex items-center justify-between "
          >
            <div
              className={`flex items-center justify-between  font-medium p-2 pt-2 ${
                collapsed ? "w-[63px] h-[40px]" : "h-[50px]"
              }`}
            >
              <div
                className={`flex items-center gap-2 justify-start p-5 text-center ${
                  collapsed ? "w-[63px] h-[40px]" : "w-[250px] h-[50px]"
                } ${
                  isActiveAdmin
                    ? "bg-[yellow] text-black rounded-xl"
                    : "text-white"
                }`}
              >
                <BookOpen className="w-5 h-5" />
                {!collapsed && (
                  <h1 className="text-sm font-normal montserrat">
                    Story Library
                  </h1>
                )}
              </div>
            </div>
          </NavLink>

          {/* Subscription */}
          <NavLink
            to="/dashboard/subscription"
            className="flex items-center justify-between "
          >
            <div
              className={`flex items-center justify-between  font-medium p-2 pt-2 ${
                collapsed ? "w-[63px] h-[40px]" : "w-[280px] h-[50px]"
              }`}
            >
              <div
                className={`flex items-center gap-2 justify-start p-5 text-center ${
                  collapsed ? "w-[63px] h-[40px]" : "w-[250px] h-[50px]"
                } ${
                  isActiveSubs
                    ? "bg-[yellow] text-black rounded-xl"
                    : "text-white"
                }`}
              >
                <MessageSquare className="w-5 h-5" />
                {!collapsed && (
                  <h1 className="text-sm font-normal montserrat">
                    AI Chatbot
                  </h1>
                )}
              </div>
            </div>
          </NavLink>

          {/* Settings */}
          <NavLink
            to="/dashboard/settings"
            className="flex items-center justify-between "
          >
            <div className="flex items-center justify-between w-[280px] font-medium p-2 pt-2">
              <div
                className={`flex items-center gap-2 justify-start p-5 text-center ${
                  collapsed ? "w-[63px] h-[40px]" : "w-[250px] h-[50px]"
                } ${
                  isActiveSettings
                    ? "bg-[yellow] text-black rounded-xl"
                    : "text-white"
                }`}
              >
                <FiSettings className="w-5 h-5" />
                {!collapsed && (
                  <h1 className="text-sm font-normal montserrat">Settings</h1>
                )}
              </div>
            </div>
          </NavLink>
        </nav>
      </div>

      {/* Logout */}
      <div
        onClick={handleLogOut}
        className="flex items-center p-2 pb-10 pl-8 space-x-3 text-red-600 rounded-lg cursor-pointer"
      >
        <FaSignOutAlt />
        {!collapsed && <span>Log Out</span>}
      </div>
    </div>
  );
};

export default AdminSidebar;
