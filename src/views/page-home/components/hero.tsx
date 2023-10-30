import React from 'react'
import Image from 'next/image'
import ButtonPrimary from '@/components/buttons/ButtonPrimary'
const Hero = () => {
  return (
    <div className='_container bg-purple-400 pt-20 md:pt-32 pb-16 md:pb-24'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div className='order-2 md:order-1'>
                    <div className='w-full md:w-[90%] mx-auto'>
                        <p className=''>Lorem ipsum dolor sit amet consectetur</p>
                        <p className='text-4xl md:text-5xl font-semibold py-4 text-black text-dela'>Hair Shampoo For Healthy Care</p>
                        <p className='font-medium text-justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, tempore iusto! Neque nesciunt ex repellendus exercitationem culpa numquam, id quaerat nobis fugit eveniet impedit atque vero reprehenderit pariatur quo nulla?</p>
                        <div className='flex justify-start items-center gap-2 mt-3'>
                            <button className='bg-black text-white px-4 py-2 rounded-md font-medium text-dela'>Button 1</button>
                            <button className='bg-transparent border border-black text-black px-4 py-2 rounded-md font-medium text-dela'>Button 1</button>
                        </div>
                    </div>
            </div>
            <div className='order-1 md:order-2'>
                <Image 
                    src="/images/ss.png"
                    alt=""
                    width={1000}
                    height={1000}
                    className='w-[300px] h-[400px] object-cover mx-auto'
                />
            </div>
        </div>
    </div>
  )
}

export default Hero