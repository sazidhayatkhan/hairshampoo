"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation';
import { useSelector } from 'react-redux';
import {BsFillTrash3Fill} from 'react-icons/bs'
import {AiOutlineShoppingCart,AiOutlineClose} from 'react-icons/ai'
import {GiHamburgerMenu} from 'react-icons/gi'
import SideDrawer from '@/components/drawers/SideDrawer';
import CartDrawer from '@/components/drawers/CartDrawer';


const Navbar = () => {
  const pathname = usePathname()
  const cartProducts = useSelector((state:any) => state.cart)
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const [isCartOpen, setIsCartOpen] = React.useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };
  const closeCart = () => {
    setIsCartOpen(false);
  };
  return (
    <div className='bg-black text-white fixed top-0 w-full'>
        <div className='_container flex justify-between items-center py-[10px]'>
            <Link href={'/'}>
              <p className='text-dela text-xl cursor-pointer'>HairShampoo</p>
            </Link>
            <div className='flex justify-end items-center gap-3'>
              <button onClick={()=>setIsCartOpen(true)} className={`text-white block md:hidden text-2xl`}><AiOutlineShoppingCart/></button>
              <button onClick={toggleDrawer} className='block md:hidden text-2xl'><GiHamburgerMenu/></button>
            </div>
            <div className='hidden md:flex justify-end items-center gap-2'>
                {
                    NavItems?.map((item:any,i:any)=>(
                        <Link href={item?.url}>
                            <button key={i} className={`${pathname === item.url && !isCartOpen ? 'text-purple-500':'text-white'} p-2 font-medium`}>{item?.title}</button>
                        </Link>
                    ))
                }
                <button onClick={()=>setIsCartOpen(true)} className={`${isCartOpen ? 'text-purple-500':'text-white'} text-[22px]`}><AiOutlineShoppingCart/></button>
            </div>
        </div>
        <SideDrawer isOpen={isDrawerOpen} onClose={closeDrawer}>
          <div className=''>
            {
              NavItems?.map((item:any,i:any)=>(
                  <Link href={item?.url}>
                      <button key={i} onClick={closeDrawer} className='text-purple-500 p-2 font-semibold w-full text-lg border-b-[1px] border-purple-400'>{item?.title}</button>
                  </Link>
              ))
            }
          </div>
        </SideDrawer>
        <CartDrawer isOpen={isCartOpen} onClose={closeCart}>
          <div>
            <div className='bg-purple-400 flex justify-between items-center p-4'>
              <p className='text-dela'>Shopping Cart</p>
              <button onClick={()=>setIsCartOpen(false)}><AiOutlineClose/></button>
            </div>
            {
              cartProducts?.map((item:any,i:any)=>(
                <div key={i} className='grid grid-cols-4 text-black border-b-[1px] p-3'>
                    <div className=''>
                      <Image 
                        src={item?.thumbnail || "/images/ss.png"}
                        alt=""
                        width={1000}
                        height={1000}
                        className="w-[40px] h-[30px] md:w-[70px] md:h-[60px] object-cover"
                      />
                    </div>
                    <div className='col-span-3 flex justify-between items-center'>
                      <div>
                        <p className='text-sm md:text-lg font-medium'>{item?.title}</p>
                        <p className='text-xs md:text-sm font-semibold'>Price: BDT {item?.price}</p>
                      </div>
                      <button><BsFillTrash3Fill/></button>
                    </div>
                </div>
              ))
            }
          </div>
        </CartDrawer>
    </div>
  )
}

export default Navbar

const NavItems = [
    {
        url:'/',
        title:'Home',
    },
    {
        url:'/about',
        title:'About',
    },
    {
        url:'/products',
        title:'Products',
    },
    {
        url:'/contact',
        title:'Contact',
    }
]