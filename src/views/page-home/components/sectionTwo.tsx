import React from 'react'
import Image from 'next/image'
import {BiSolidLeaf} from 'react-icons/bi'
import {GiWaterDrop} from 'react-icons/gi'
import {GrUserManager} from 'react-icons/gr'
const SectionTwo = () => {
  return (
    <div className='bg-white py-8 md:py-16'>
        <div className='_container grid grid-cols-1 md:grid-cols-3 gap-4'>
            {
                smallBox?.map((item:any,i:any)=>(
                    <div key={i} className='h-[100px] md:h-[230px] flex flex-col justify-center bg-purple-400 text-center'>
                        <div className='flex justify-center text-3xl md:text-5xl'>
                            {item?.icon}
                        </div>
                        <p className='mt-2 md:mt-5 text-xl md:text-2xl font-semibold'>{item?.title}</p>
                    </div>
                ))
            }
        </div>
        <div className='_container'>
            <div className='mt-12 grid grid-cols-1 md:grid-cols-2 gap-3'>
                <div className='mb-6 md:mb-0'>
                    <Image 
                        src="/images/ss.png"
                        alt=""
                        width={1000}
                        height={1000}
                        className='w-[200px] h-[350px] object-cover mx-auto'
                    />
                </div>
                <div className='flex flex-col justify-center'>
                    <p className='font-semibold text-4xl md:text-5xl text-dela mb-2'>Lorem ipsum dolor sit, amet cons</p>
                    <p className='font-medium text-sm py-3 text-justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque aliquam nesciunt voluptas, unde iste accusantium illo nam voluptatum enim tempora cumque ipsam, inventore, odit alias blanditiis molestiae amet fugiat est.</p>
                    <p className='font-medium text-sm mb-4 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente ullam placeat temporibus. Temporibus praesentium voluptates nisi adipisci magni qui iusto.</p>
                    <button className='bg-black text-white px-4 py-2 rounded-md font-medium w-[40%] md:w-[20%] text-dela'>Button 1</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SectionTwo

const smallBox = [
    {
        title:"Text1",
        icon:<BiSolidLeaf/>
    },
    {
        title:"Text2",
        icon:<GiWaterDrop/>
    },
    {
        title:"Text3",
        icon:<GrUserManager/>
    }
]