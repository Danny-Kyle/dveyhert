"use client"
import React, { useState } from 'react'
import Image from 'next/image'

function Modal(){
  const Objs = ["Daily", "Weekly", "Monthly", "Yearly"];
  return (
    Objs.map((item, index) => (
      <ul key={index}>
        <li>{item}</li>
      </ul>
    ))
    
  )
}


const SalesTrends = () => {
  const [time, setTime] = useState(true)
  function toggleTime(){
    setTime(!time)
  }
  return (
    <main>
      <section>
        <div className='flex flex-row justify-between bg-white text-black rounded-full  p-4 my-3'> 
          <h2>Sales Trends</h2>
          <div>Sort by: 
            <div onClick={toggleTime} className='border border-solid cursor-pointer rounded-full flex flex-row gap-2 w-[96px] h-[32px] items-center justify-center'>
              {}
            {time && Modal()}
            <Image src="/arrowdown.svg" alt='arrowdown' width={5} height={5} />
            </div>
          </div>
        </div>
      </section>
      <section></section>
    </main>
  )
}

export default SalesTrends