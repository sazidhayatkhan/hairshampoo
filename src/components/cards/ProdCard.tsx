import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const ProdCard = ({item}:any) => {
  return (
    <div className='border border-purple-400'>
        <Image 
            src={item?.thumbnail || '/images/ss.png'}
            alt=''
            width={1000}
            height={1000}
            className='w-full h-[200px] md:h-[300px] object-contain p-3'
        />
        <div className='border-t-[1px] border-purple-400 p-3 flex flex-col md:flex-row justify-between items-center'>
            <div>
                <p className='text-dela font-semibold text-base mb-1'>{item?.title}</p>
                <p className='text-sm font-semibold'>Price : BDT {item?.price}</p>
            </div>
            <Link href={`/products/${item?.id}`||""}>
              <button className='bg-purple-400 text-black px-3 py-2 text-sm font-semibold border border-purple-400 hover:bg-transparent transition duration-500 mt-3 md:mt-0'>Details</button>
            </Link>
        </div>
    </div>
  )
}

export default ProdCard