import { NavLink } from "react-router-dom";
import { PropsSidebarItem } from "./SidebarMenuItem.interfaces";

export const SidebarMenuItem = ({
  to,
  icon,
  description,
  title,
}: PropsSidebarItem) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? "flex justify-center items-center bg-gray-800 rounded-md p-2 transition-colors"
          : "flex justify-center items-center hover:bg-gray-800 rounded-md p-2 transition-colors"
      }
    >
      <i className={`${icon} text-2xl mr-4 text-indigo-500`}></i>
      <div className="flex flex-col flex-grow">
        <span className="text-while text-lg font-semibold">{title}</span>
        <span className="text-gray-400 text-sm">{description}</span>
      </div>
    </NavLink>
  );
};
