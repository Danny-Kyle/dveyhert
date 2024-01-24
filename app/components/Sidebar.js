import React from "react";
import Image from "next/image";

const Sidebar = () => {
  return (
    <div className="w-[80px] h-[876px] flex flex-col justify-between border border-solid border-gray-400 items-center p-2">
      <div className="flex flex-col gap-6">
      <div className="cursor-pointer">
      <Image src={"/logo.svg"} alt="img" width={50} height={10} />
      </div>
      <div className="cursor-pointer">
        <Image src={"/bbimit.svg"} alt="img" width={50} height={10} />
      </div>
      <div className="cursor-pointer">
        <Image src={"/analytics.svg"} alt="img" width={50} height={10} />
      </div>
      <div className="cursor-pointer">
        <Image src={"/people.svg"} alt="img" width={50} height={10} />
      </div>
      <div className="cursor-pointer">
        <Image src={"/weirdbox.svg"} alt="img" width={50} height={10} />
      </div>
      <div className="cursor-pointer">
        <Image src={"/products.svg"} alt="img" width={50} height={10} />
      </div>
      <div className="cursor-pointer">
        <Image src={"/info.svg"} alt="img" width={50} height={10} />
      </div>
        <div className="flex flex-col bg-white items-center p-2 gap-4 w-[46px] h-[92px] justify-between rounded-2xl">
            <div className="cursor-pointer">
            <Image src={"/lightmode.svg"} alt="img" width={30} height={4} />
            </div>
            <div className="cursor-pointer">
            <Image src={"/darkmode.svg"} alt="img" width={30} height={4} />
            </div>
        </div>
      </div>

        <div className="flex flex-col gap-6">
            <div className="cursor-pointer">
                <Image src={"/hidebar.svg"} alt="img" width={50} height={10} />
            </div>
            <div className="cursor-pointer">
                <Image src={"/settings.svg"} alt="img" width={50} height={10} />
            </div>
            <div className="cursor-pointer">
                <Image src={"/exit.svg"} alt="img" width={50} height={10} />
            </div>
        </div>
    </div>
  );
};

export default Sidebar;
