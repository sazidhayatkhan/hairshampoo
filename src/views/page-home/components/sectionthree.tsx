import React from 'react'
import Image from 'next/image'
const Sectionthree = () => {
  return (
    <div className=' bg-purple-400'>
        <div className='_container grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-3 py-12 md:py-24'>
                <div className=''>
                    <Image 
                        src="/images/ss.png"
                        alt=""
                        width={1000}
                        height={1000}
                        className='w-[200px] h-[350px] object-cover mx-auto'
                    />
                </div>
                <div className='bg-white flex flex-col justify-center items-center p-6 w-full md:w-[80%] mx-auto'>
                    <p className='text-sm font-medium'>hiii byeeee</p>
                    <p className='text-xl md:text-3xl font-bold text-dela mb-3'>DEALS OF THE DAY</p>
                    <p className='text-5xl md:text-6xl font-bold text-dela mb-5'>$99.99</p>
                    <p className='text-sm font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate pariatur vel voluptatem ad. Quas</p>
                    <p className='text-sm font-medium mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate pariatur vel voluptatem ad. Quas</p>
                </div>
        </div>
    </div>
  )
}

export default Sectionthree