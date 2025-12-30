import { IoMdNotificationsOutline } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { IoIosLogOut } from "react-icons/io";
const Header = () => {
  const role = localStorage.getItem("role");
  console.log(role, "role in header");
  return (
    <div className="flex items-center justify-end px-6 pt-6 bg-white ">
      {/* Time + Date + Notification */}
      <div className="flex items-center gap-6">
        {/* Time & Date */}
        {/* <div className="flex flex-col leading-tight text-right">
          <span className="text-sm font-medium text-[#4B5563] dark:text-gray-300">
            05:00 PM
          </span>
          <span className="text-xs text-[#9CA3AF] dark:text-gray-400">
            27 Sep 2025
          </span>
        </div> */}

        {/* Notification Icon */}
        <NavLink to="/login">
          <div className="relative cursor-pointer">
            <IoIosLogOut className="text-xl font-bold text-red-600" />
         

            {/* Optional: Notification badge */}
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
