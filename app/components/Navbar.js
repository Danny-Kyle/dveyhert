import React from 'react'
import Image from "next/image";

const Navbar = () => {
  const fname = "Justin"
  const lname = "Bergson"
  const name = fname + " " + lname;
  return (
    <div className='border border-solid text-black bg-slate-50 border-gray-400 flex flex-row  w-[1360px] h-[88px]'>
      <h2 className='text-2xl'>Dashboard</h2>
      <div className='flex flex-row gap-6 '>
      <p>Search</p>
      <div className='flex flex-row gap-3 '>
        <div><Image src={"/calendar.svg"} alt="img" width="20" height="10"/></div>
        November 15, 2023
      </div>
      <div className='border border-solid  border-gray-400 rounded-full p-3 w-12 h-12 justify-center cursor-pointer items-center'>
        <Image src={"/notification.svg"} alt="img" width="17" height="18"/>
      </div>
        <div className='flex flex-row rounded-full border justify-evenly p-4 border-solid border-gray-400 w-3/6 h-22 cursor-pointer'>
            <><Image src={"/arrowdown.svg"} alt="img" width="14" height="8" /></>
            <div className='text-sm items-center'>
            <div className='flex flex-row gap-4'>
            <p> <Image src={"/user.svg"} alt="img" width="38" height="38" /></p>
            <p >{name}</p>
            </div>
            <p className='flex flex-row'>{name}@gmail.com</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar