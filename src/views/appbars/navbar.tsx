"use client"
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import {GiHamburgerMenu} from 'react-icons/gi'
import SideDrawer from '@/components/drawers/SideDrawer';

const Navbar = () => {
  const pathname = usePathname()
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };
  return (
    <div className='bg-black text-white fixed top-0 w-full'>
        <div className='_container flex justify-between items-center py-[10px]'>
            <p className='text-dela text-xl'>HairShampoo</p>
            <button onClick={toggleDrawer} className='block md:hidden text-2xl'><GiHamburgerMenu/></button>
            <div className='hidden md:flex justify-end items-center gap-2'>
                {
                    NavItems?.map((item:any,i:any)=>(
                        <Link href={item?.url}>
                            <button key={i} className={`${pathname === item.url ? 'text-purple-500':'text-white'} p-2 font-medium`}>{item?.title}</button>
                        </Link>
                    ))
                }
            </div>
        </div>
        <SideDrawer isOpen={isDrawerOpen} onClose={closeDrawer}>
        <div className='text-red-600'>
          {
            NavItems?.map((item:any,i:any)=>(
                <Link href={item?.url}>
                    <button key={i} onClick={closeDrawer} className='text-purple-500 p-2 font-semibold w-full text-lg border-b-[1px] border-purple-400'>{item?.title}</button>
                </Link>
            ))
          }
        </div>
      </SideDrawer>
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