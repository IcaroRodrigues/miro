import Image from "next/image";

export const Loading = () => {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center bg-black">
      <Image
        src="/logo.svg"
        alt="Logo"
        width={300}
        height={200}
        className="animate-pulse duration-1000"
      />
    </div>
  );
};
