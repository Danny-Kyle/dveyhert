import React from 'react'
import Image from 'next/image'
import orders from "./orders.json"

const OrderHistory = () => {
  return (
    <section>
      <div className='bg-white rounded-2xl p-6 w-[806px] h-[422px] text-black'>
        <header className='flex flex-row justify-between mb-4'>
        <h2 className='font-medium'>Last Orders</h2>
        <h2 className='font-semibold text-green-500 cursor-pointer ' >See All</h2>
        </header>
        <nav className='grid grid-cols-5 justify-evenly border-b-2'>
        <p>Name</p>
        <p>Date</p>
        <p>Amount</p>
        <p>Status</p>
        <p>Invoice</p>
      </nav>
      {orders.map((order, index) => (
        <div key={index} className='border-b-2 my-2 py-4 grid grid-cols-5 justify-evenly'>
          <div>{order.Name}</div>
          <p className='text-gray-400'>{order.Date}</p>
          <p className='text-gray-900'>{order.Amount}</p>
          <p className={`${order.Status === true ? "text-blue-500": "text-red-400"}`}>{order.Status === true ? "Paid" : "Refund"}</p>
          <div className='cursor-pointer flex flex-row gap-2'><Image src="/viewinvoice.svg" alt="img" width={20} height={20}/>View</div>
        </div>
      ))}
      </div>
      
    </section>
  )
}

export default OrderHistory