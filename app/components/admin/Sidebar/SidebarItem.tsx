import { FC, ReactNode } from "react";
import { NavLink } from "@remix-run/react";

export interface SidebarItemProps {
  label: string;
  path: string;
  icon: ReactNode;
}

const SidebarItem: FC<SidebarItemProps> = ({ label, path, icon }) => {
  return (
    <li className="my-1">
      <NavLink
        to={path}
        className={({ isActive }) =>
          `flex flex-row items-center h-12 px-4 rounded-lg text-gray-600 hover:bg-gray-100 ${isActive ? "bg-gray-100" : ""}`
        }
        end
      >
        <span className="flex items-center justify-center text-lg text-gray-400">
          {icon}
        </span>
        <span className="ml-3">{label}</span>
      </NavLink>
    </li>
  );
};

export default SidebarItem;
