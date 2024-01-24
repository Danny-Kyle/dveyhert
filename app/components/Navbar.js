import React from 'react'
import Image from "next/image";

const Navbar = () => {
  const fname = "Justin"
  const lname = "Bergson"
  return (
    <div className='border border-solid border-gray-400 flex flex-row justify-between items-center w-[1360px] h-[88px]'>
      <h2>Dashboard</h2>
      <div className='flex flex-row gap-6'>
      <p>Search</p>
      <div className='flex flex-row gap-3'>
        <div><Image src={"/calendar.svg"} alt="img" width="20" height="10"/></div>
        November 15, 2023
      </div>
      <div className='border border-solid border-gray-400 rounded-full p-3 w-12 h-12 justify-center items-center items-center'>
        <Image src={"/notification.svg"} alt="img" width="17" height="18"/>
      </div>
      {/* <div className='flex flex-col  rounded-full border border-solid border-gray-400 p-3'>
      <div className='flex flex-row items-center gap-6 w-[215px] h-[52px]'>
       <p> <Image src={"/user.svg"} alt="img" width="38" height="38" /></p>
        <article className='flex flex-row gap-2'>
        <p>{fname}</p>
        <p>{lname}</p>
        </article>
        </div>
        <div>
          {fname}@gmail.com
        </div>
        <Image src={"/arrowdown.svg"} alt="img" width="14" height="8" />
      </div> */}
        <div className='flex flex-col  rounded-full border border-solid border-gray-400 w-48 h-24'></div>
        
      </div>
    </div>
  )
}

export default Navbar