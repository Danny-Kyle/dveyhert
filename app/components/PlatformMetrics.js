import React from 'react'
import Image from 'next/image'
import platforms from "./platforms.json"

const PlatformMetrics = () => {
  return (
    <section className='w-[488px] h-[542px] bg-white rounded-2xl'>
      <div className='bg-white rounded-2xl p-3'>
        <header className='flex flex-row justify-between mb-4'>
        <h2 className='font-medium'>Top Platforms</h2>
        <h2 className='font-semibold text-green-500'>See All</h2>
        </header>
        {platforms.map((order, index) => (
        <div key={index} className='border-b-2 my-2 py-2 grid grid-rows-3'>
          <div>{order.Name}</div>
          <div className='flex flex-row justify-between'>
          <p className='text-gray-900'>{order.Amount}</p>
          <p className='text-gray-400'>+{order.Addedpct}%</p>
          </div>
        </div>
      ))}
        </div>
    </section>
  )
}

export default PlatformMetrics