"use client"
import React from 'react'
import Image from 'next/image'
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux'
import {add} from '../../../store/cartSlice'


const ProductDetails = ({detailsData}:any) => {
    const dispatch = useDispatch()
    const addToCart = (detailsData:any) =>{
        dispatch(add(detailsData))
    }
    const showToast = () => {
        toast.success('Product Added!', {
          position: 'bottom-right',
          autoClose: 1000, // 1 seconds
          style: {
            background: '#95fa98', // Background color
            color: 'black',       // Text color
          },
        });
      };

    const handleClick = () =>{
        showToast()
        addToCart(detailsData)
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
                    {/* <ToastButton /> */}
                    <button onClick={handleClick} className='bg-purple-400 border border-purple-400 hover:bg-transparent px-4 py-2 text-lg mt-5 transition duration-500'>Add to Cart</button>
                </div>
            </div>  
        </div>
    </div>
  )
}

export default ProductDetails
