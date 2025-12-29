import { FaSignOutAlt } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";
import { LuUserRoundPlus } from "react-icons/lu";
import { FaUsers } from "react-icons/fa";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { FiSettings } from "react-icons/fi";
import { Link, NavLink, useNavigate } from "react-router-dom";

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
    <div className="bg-[#FFFFFF] border-r-2 border-r-[#E8E8E8] min-h-screen flex flex-col justify-between open-sns">
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
              <h1 className="montserrat text-[#222222] text-lg font-medium whitespace-nowrap">
                WayLearn AI
              </h1>
            )}
          </div>
        </Link>

        {/* Menu Items */}
        <nav className="flex flex-col text-[#364636] space-y-2">
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
                    ? "bg-[#1E3A8A] text-[#FAF1E6] rounded-xl"
                    : "text-[#18181B]"
                }`}
              >
                <AiOutlineHome className="w-[24px] h-[24px]" />
                {!collapsed && (
                  <h1 className="text-lg font-medium montserrat">
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
                    ? "bg-[#1E3A8A] text-[#FAF1E6] rounded-xl"
                    : "text-[#18181B]"
                }`}
              >
                <FaUsers className="w-[24px] h-[24px]" />
                {!collapsed && (
                  <h1 className="text-lg font-medium montserrat">
                    User Management
                  </h1>
                )}
              </div>
            </div>
          </NavLink>

          {/* School Admin */}
          <NavLink
            to="/dashboard/makeAdmin"
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
                    ? "bg-[#1E3A8A] text-[#FAF1E6] rounded-xl"
                    : "text-[#18181B]"
                }`}
              >
                <LuUserRoundPlus className="w-[24px] h-[24px]" />
                {!collapsed && (
                  <h1 className="text-lg font-medium montserrat">
                    School Admin
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
                    ? "bg-[#1E3A8A] text-[#FAF1E6] rounded-xl"
                    : "text-[#18181B]"
                }`}
              >
                <RiMoneyDollarCircleLine className="w-[24px] h-[24px]" />
                {!collapsed && (
                  <h1 className="text-lg font-medium montserrat">
                    Subscription
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
                    ? "bg-[#1E3A8A] text-[#FAF1E6] rounded-xl"
                    : "text-[#18181B]"
                }`}
              >
                <FiSettings className="w-[24px] h-[24px]" />
                {!collapsed && (
                  <h1 className="text-lg font-medium montserrat">Settings</h1>
                )}
              </div>
            </div>
          </NavLink>
        </nav>
      </div>

      {/* Logout */}
      <div
        onClick={handleLogOut}
        className="flex items-center p-2 pb-10 pl-10 space-x-3 text-red-600 rounded-lg cursor-pointer"
      >
        <FaSignOutAlt />
        {!collapsed && <span>Log Out</span>}
      </div>
    </div>
  );
};

export default AdminSidebar;
