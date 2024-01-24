import React from "react";
import Image from "next/image";

const Sidebar = () => {
  return (
    <div className="w-[80px] h-[876px]">
      <div>
      <Image src={"/logo.svg"} alt="img" width={50} height={10} />
      </div>
      <div>
        <Image src={"/bbimit.svg"} alt="img" width={50} height={10} />
      </div>
      <div>
        <Image src={"/analytics.svg"} alt="img" width={50} height={10} />
      </div>
      <div>
        <Image src={"/people.svg"} alt="img" width={50} height={10} />
      </div>
      <div>
        <Image src={"/"} alt="img" width={50} height={10} />
      </div>
      <div>
        <Image src={"/"} alt="img" width={50} height={10} />
      </div>
    </div>
  );
};

export default Sidebar;
