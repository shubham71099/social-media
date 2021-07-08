import { ChevronDownIcon, UserGroupIcon } from "@heroicons/react/outline";
import {
  CalendarIcon,
  ClockIcon,
  DesktopComputerIcon,
  UsersIcon,
} from "@heroicons/react/solid";
import SidebarRow from "./SidebarRow";
import profile from "../images/profile.jpg";

function Sidebar() {
  return (
    <div className="p-1 md:p-2 mt-4 border-r-1 border-blue-100 shadow-lg max-w-[600px] xl:min-w-[300px]">
      <SidebarRow src={profile} title="Abhi Jha" />
      <SidebarRow Icon={UsersIcon} title="Recent Chats" />
      <SidebarRow Icon={UserGroupIcon} title="Friends" />
      <SidebarRow Icon={DesktopComputerIcon} title="Online IDE" />
      <SidebarRow Icon={CalendarIcon} title="Events" />
      <SidebarRow Icon={ClockIcon} title="Memories" />
      <SidebarRow Icon={ChevronDownIcon} title="See more" />
    </div>
  );
}

export default Sidebar;
