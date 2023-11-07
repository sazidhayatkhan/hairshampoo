"use client"
import React from 'react'
import Image from 'next/image'
import { useDispatch } from 'react-redux'
import {add} from '../../../store/cartSlice'

const ProductDetails = ({detailsData}:any) => {
    const dispatch = useDispatch()
    const addToCart = (detailsData:any) =>{
        dispatch(add(detailsData))
    }
  return (
    <div>
        <div className='py-24'>
            <div className='_container grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6'>
                <div>
                    <Image 
                        src={detailsData?.thumbnail || "/images/ss.png"}
                        alt=""
                        width={4000}
                        height={4000}
                        className="w-full h-[400px] object-cover"
                    />
                </div>
                <div className='mt-2 md:mt-4'>
                    <p>{detailsData?.brand}</p>
                    <p className='text-dela text-3xl mb-2'>{detailsData?.title}</p>
                    <p className='text-2xl font-bold mb-4 text-purple-600'>BDT {detailsData?.price}</p>
                    <p>{detailsData?.description}</p>
                    <button onClick={()=>addToCart(detailsData)} className='bg-purple-400 px-4 py-1 text-lg mt-5'>Add to Cart</button>
                </div>
            </div>  
        </div>
    </div>
  )
}

export default ProductDetails
