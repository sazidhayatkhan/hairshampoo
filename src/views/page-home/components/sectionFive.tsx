import React from 'react'
import {AiFillHome} from 'react-icons/ai'
const SectionFive = () => {
  return (
    <div className='bg-purple-400'>
        <div className='_container py-12 md:py-24'>
            <div className='w-full md:w-[60%] mx-auto mb-12 md:mb-20'>
                <p className='text-dela text-2xl md:text-4xl text-center mb-4 md:mb-2'>Lorem ipsum dolor sit, amet consectetur adipisici</p>
                <p className='text-sm md:text-base text-center font-medium'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci, obcaecati. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci, obcaecati.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                {
                    [1,2,3].map((i:any)=>(
                        <div key={i} className='text-center'>
                            <p className='flex justify-center text-3xl'><AiFillHome/></p>
                            <p className='font-bold text-xl py-3'>Lorem ipsum dolor sit amet</p>
                            <p className='font-medium text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, sit. adipisicing elit. Illo, sit.</p>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default SectionFive