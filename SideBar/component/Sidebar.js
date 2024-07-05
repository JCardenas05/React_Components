"use client";

import { usePathname } from 'next/navigation';
import { LayoutDashboard, Home, LifeBuoy, Settings, Router, User, ListPlus } from "lucide-react";
import Sidebar_template, { SidebarItem, SubmenuItem } from "./Sidebar_template";

function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex">
      <hr className="my-3" />
      <Sidebar_template>
        <SidebarItem icon={<Home size={20} />} text="Home" link="/" active={pathname === "/"} />
        <SidebarItem icon={<LayoutDashboard size={20} />} text="Dashboard" link="/dashboard" active={pathname === "/dashboard"} />
        <SidebarItem icon={<Router size={20} />} text="Devices" link="/devices" active={pathname === "/devices"} alert >
          <SubmenuItem icon={<ListPlus />} text="New Device" link="/devices/new_device" />
          <SubmenuItem icon={<Settings />} text="Seguridad" link="/devices/security" />
        </SidebarItem>
        <hr className="my-3" />
        <SidebarItem icon={<User size={20} />} text="Profile" link="/profile" active={pathname === "/profile"} />
        <SidebarItem icon={<Settings size={20} />} text="Settings" link="/settings" active={pathname === "/settings"} />
        <SidebarItem icon={<LifeBuoy size={20} />} text="Help" link="/help" active={pathname === "/help"} />
      </Sidebar_template>
    </div>
  );
}

export default Sidebar;
