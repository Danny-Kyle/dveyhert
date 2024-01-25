import React from 'react'
import Image from 'next/image'

const SalesTrends = () => {
  return (
    <main>
      <section>
        <div>
          <h2>Sales Trends</h2>
          <div>Sort by: 
            <div className='border border-solid rounded-full flex flex-row gap-2 w-[96px] h-[32px] items-center justify-center'>Weekly
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