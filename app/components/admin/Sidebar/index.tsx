import SidebarItem from "./SidebarItem";
import links from "../links";

const Sidebar = () => {
  return (
    <ul className="flex flex-col w-full p-4">
      {links.map((link, index) => (
        <div key={link.path}>
          <SidebarItem {...link} />
          {index < links.length - 1 && (
            <hr className="h-0.5 border-t-0 bg-gray-100 dark:bg-white/10" />
          )}
        </div>
      ))}
    </ul>
  );
};

export default Sidebar;
