import Image from "next/image";

function SidebarRow({ src, Icon, title }) {
  return (
    <div
      className="flex items-center space-x-2 p-4 hover:bg-blue-100 hover:animate-pulse active:border-b-2 
    active:border-blue-500 rounded-xl cursor-pointer"
    >
      {src && (
        <Image
          className="rounded-full cursor-pointer"
          src={src}
          width={35}
          height={35}
          layout="fixed"
        />
      )}
      {Icon && <Icon className="h-5 w-5 md:h-7 md:w-7 mr-3 text-indigo-600" />}
      <p className="hidden md:inline-flex font-medium">{title}</p>
    </div>
  );
}

export default SidebarRow;
