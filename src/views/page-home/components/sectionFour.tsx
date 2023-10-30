import React from 'react'
import Image from 'next/image'
import {BsCheck2} from 'react-icons/bs'
const SectionFour = () => {
  return (
    <div className='_container bg-white'>
        <div className='py-12 md:py-24'>
            <div className='w-full md:w-[60%] mx-auto mb-12'>
                <p className='text-dela text-2xl md:text-4xl text-center mb-4 md:mb-2'>Lorem ipsum dolor sit, amet consectetur adipisici</p>
                <p className='text-sm md:text-base text-center font-medium'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci, obcaecati. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci, obcaecati.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 items-center'>
                <div>
                    {
                        lists?.slice(0,3)?.map((item:any,i:any)=>(
                        <div key={i} className='flex justify-start items-center gap-4 mb-5'>
                            <div className='text-3xl'>
                                <BsCheck2/>
                            </div>
                            <div>
                                <p className='text-lg font-semibold'>{item?.title}</p>
                                <p className='text-sm font-medium'>{item?.subTitle}</p>
                            </div>
                        </div>
                        ))
                    }
                </div>
                <div className=''>
                    <Image 
                        src="/images/ss.png"
                        alt=""
                        width={1000}
                        height={1000}
                        className='w-[200px] h-[350px] object-cover mx-auto'
                    />
                </div>
                <div>
                    {
                        lists?.slice(3,6)?.map((item:any,i:any)=>(
                        <div key={i} className='flex justify-start items-center gap-4 mb-5'>
                            <div className='text-3xl'>
                                <BsCheck2/>
                            </div>
                            <div>
                                <p className='text-lg font-semibold'>{item?.title}</p>
                                <p className='text-sm font-medium'>{item?.subTitle}</p>
                            </div>
                        </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default SectionFour

const lists = [
    {
        title:'Lorem sit amet ipsum dolor 1',
        subTitle:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil, magnam? adipisicing'
    },
    {
        title:'Lorem sit amet ipsum dolor 2',
        subTitle:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil, magnam? adipisicing'
    },
    {
        title:'Lorem sit amet ipsum dolor 3',
        subTitle:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil, magnam? adipisicing'
    },
    {
        title:'Lorem sit amet ipsum dolor 4',
        subTitle:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil, magnam? adipisicing'
    },
    {
        title:'Lorem sit amet ipsum dolor 5',
        subTitle:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil, magnam? adipisicing'
    },
    {
        title:'Lorem sit amet ipsum dolo 6',
        subTitle:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil, magnam? adipisicing'
    }
]