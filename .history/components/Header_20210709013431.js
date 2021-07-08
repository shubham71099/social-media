import Image from "next/image";
import profile from "../images/profile.jpg";
import logo2 from "../images/logo2.png";
import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  HomeIcon,
  UserGroupIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";

import {
  FlagIcon,
  PlayIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import HeaderIcon from "./HeaderIcon";

function Header() {
  return (
    <div className="sticky top-0 z-50 bg-white-100 overflow-hidden flex lg:px-5 md:px-3 items-center p-2 shadow-lg">
      {/* left */}
      <div className="flex items-center">
        <p className="whitespace-nowrap text-lg mr-3 hover:animate-bounce cursor-pointer text-indigo-700 shadow-md bg-gray-100 rounded-full hidden md:inline-flex font-semibold pr-3">
          Colconnect
        </p>
        <Image
          src={logo2}
          height={40}
          width={40}
          layout="fixed"
          className="rounded-full cursor-pointer"
        />
        <div className="flex ml-4 items-center rounded-full bg-indigo-100 p-2">
          <SearchIcon className="h-4 md:h-6 text-gray-600" />
          <input
            className="ml-2 mr-0 inline-flex flex-shrink items-center bg-transparent outline-none placeholder-gray-500"
            type="text"
            placeholder="Search for friends"
          />
        </div>
      </div>

      {/* center */}
      <div className="flex justify-center flex-grow">
        <div className="flex space-x-6 md:space-x-2">
          <HeaderIcon active Icon={HomeIcon} />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
      </div>

      {/* right */}
      <div className="flex items-center sm:space-x-2 justify-end">
        {/* profile pic */}
        <div className="flex items-center h-6 w-6 md:h-9 md:w-7 align-top">
          <Image
            src={profile}
            className="rounded-full cursor-pointer"
            alt="profile pic"
          />
        </div>
        <p className="whitespace-nowrap ml-2 cursor-pointer font-semibold pr-3">
          Abhi Jha
        </p>
        <ViewGridIcon className="icon" />
        <ChatIcon className="icon" />
        <BellIcon className="icon" />
        <ChevronDownIcon className="icon" />
      </div>
    </div>
  );
}

export default Header;
