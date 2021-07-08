import { EmojiHappyIcon } from "@heroicons/react/outline";
import { CameraIcon, VideoCameraIcon } from "@heroicons/react/solid";
import Image from "next/image";
import profile from "../images/profile.jpg";

function Inputbox() {
  var name = "Abhi";

  const sendPost = (e) => {
    e.preventDefault();
  };

  return (
    <div className="bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-4">
      {/* Upper part of the input box */}
      <div className="flex space-x-4 p-4 items-center">
        <Image
          className="cursor-pointer rounded-full"
          src={profile}
          width={30}
          height={30}
          layout="fixed"
        />
        <form className="flex flex-1">
          <input
            className="rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none"
            type="text"
            placeholder={`What's on your mind ${name} ?`}
          />
          <button hidden type="submit" onClick={sendPost}>
            Submit
          </button>
        </form>
      </div>

      {/* lower part of the input box */}
      <div className="flex justify-evenly p-3 border-1">
        <div className="inputIcon">
          <VideoCameraIcon className="h-7 text-red-500" />
          <p className="text-xs sm:text-sm xl:text-base">Live Video</p>
        </div>
        <div className="inputIcon">
          <CameraIcon className="h-7 text-green-500" />
          <p className="text-xs sm:text-sm xl:text-base">Make a post!</p>
        </div>
        <div className="inputIcon">
          <CameraIcon className="h-7 text-yellow-500" />
          <p className="text-xs sm:text-sm xl:text-base">Set status</p>
        </div>
      </div>
    </div>
  );
}

export default Inputbox;
