import React from 'react'
import Image from "next/image";

const Navbar = () => {
  return (
    <div className='border border-solid border-gray-700'>
      <h2>Dashboard</h2>
      <div>
      <p>Search</p>
      <div className='flex flex-row gap-3'>
        <div><Image src={"/calendar.svg"} alt="img" width="20" height="10"/></div>
        November 15, 2023
      </div>
      </div>
    </div>
  )
}

export default Navbar