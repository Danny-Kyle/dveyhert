import React from 'react'

const OrderHistory = () => {
  return (
    <section>
      <div className='bg-white rounded-2xl p-3 w-[806px] h-[422px]'>
        <header className='flex flex-row justify-between'>
        <h2 className='font-medium'>Last Orders</h2>
        <h2 className='font-semibold text-green-500'>See All</h2>
        </header>
        <nav className='grid grid-cols-5 justify-evenly border-b-2'>
        <p>Name</p>
        <p>Date</p>
        <p>Amount</p>
        <p>Status</p>
        <p>Invoice</p>
      </nav>
      </div>
      
    </section>
  )
}

export default OrderHistory