import React from "react";
import Image from "next/image";

const Navbar = () => {
  const fname = "Justin";
  const lname = "Bergson";
  const name = fname + " " + lname;
  return (
    <div className="border border-solid px-5 py-2 text-black bg-slate-50 justify-between border-gray-400 flex flex-row  w-[1360px] h-[88px]">
      <h2 className="text-2xl">Dashboard</h2>
      <div className="flex flex-row gap-6 ">
        <div><input type="search" placeholder="Search..." className="w-full p-4 rounded-full bg-slate-950 text-white"/></div>
        <div className="flex flex-row gap-3 text-xs">
          <div>
            <Image src={"/calendar.svg"} alt="img" width="10" height="10" />
          </div>
          <p>November 15, 2023</p>
        </div>
        <div className="border border-solid  border-gray-400 rounded-full p-3 w-12 h-12 justify-center cursor-pointer items-center">
          <Image src={"/notification.svg"} alt="img" width="17" height="18" />
        </div>
        <div className="flex flex-row rounded-full border justify-evenly border-solid p-1 border-gray-400 w-5/6 h-18 cursor-pointer">
          <>
            <Image src={"/arrowdown.svg"} alt="img" width="14" height="8" />
          </>
          <div className="text-sm items-center">
            <div className="flex flex-row gap-4">
              <p>
                {" "}
                <Image src={"/user.svg"} alt="img" width="38" height="38" />
              </p>
              <p>{name}</p>
            </div>
            <p className="flex flex-row">{name}@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
