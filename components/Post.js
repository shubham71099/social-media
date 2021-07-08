import Image from "next/image";
import { ChatAltIcon, ShareIcon, ThumbUpIcon } from "@heroicons/react/solid";

function Post({ name, message, profilePic, postPic, timestamp }) {
  return (
    <div className="flex flex-col mt-7 shadow-md">
      <div className="p-5 bg-white rounded-t-2xl">
        <div className="flex items-center cursor-pointer space-x-2">
          <Image
            className="rounded-full"
            src={profilePic}
            width={40}
            height={40}
            alt="error loading post!"
          />
          <div>
            <p className="font-medium">{name}</p>
            <p className="text-xs text-gray-400">{`${timestamp} minutes ago`}</p>
          </div>
        </div>
        <p className="pt-4">{message}</p>
      </div>
      {postPic && (
        <div className="relative h-56 md:h-96 bg-white">
          <Image src={postPic} objectFit="contain" layout="fill" />
        </div>
      )}

      <div
        className="flex justify-between items-center rounded-b-2xl bg-white
       shadow-md text-indigo-500 border-1"
      >
        <div className="inputIcon rounded-none rounded-bl-2xl">
          <ThumbUpIcon className="h-4" />
          <p className="text-xs sm:text-base">Like</p>
        </div>
        <div className="inputIcon rounded-none">
          <ChatAltIcon className="h-4" />
          <p className="text-xs sm:text-base">Comment</p>
        </div>
        <div className="inputIcon rounded-none rounded-br-2xl">
          <ShareIcon className="h-4" />
          <p className="text-xs sm:text-base">Share</p>
        </div>
      </div>
    </div>
  );
}

export default Post;
