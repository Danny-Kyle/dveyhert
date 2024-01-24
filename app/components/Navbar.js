import React from 'react'
import Image from "next/image";

const Navbar = () => {
  const fname = "Justin"
  const lname = "Berger"
  return (
    <div className='border border-solid border-gray-400'>
      <h2>Dashboard</h2>
      <div>
      <p>Search</p>
      <div className='flex flex-row gap-3'>
        <div><Image src={"/calendar.svg"} alt="img" width="20" height="10"/></div>
        November 15, 2023
      </div>
      <div className='border border-solid border-gray-400 rounded-full p-3 w-12 h-12 justify-center items-center'>
        <Image src={"/notification.svg"} alt="img" width="17" height="18"/>
      </div>
        <div>
        <Image src={"/user.svg"} alt="img" width="38" height="38" />
        <p>{fname}</p>
        <p>{lname}</p>
        </div>
        <div>
          {fname}@gmail.com
        </div>
      </div>
    </div>
  )
}

export default Navbar