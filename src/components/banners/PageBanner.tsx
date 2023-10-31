import React from 'react'

const PageBanner = (props:any) => {
  return (
    <div className='bg-purple-400 text-center py-6 md:py-10 mt-[47px] md:mt-[60px] mb-6'>
        <p className='text-dela text-3xl md:text-4xl mb-3'>{props.title}</p>
        <p className='w-[90%] md:w-[60%] text-xs md:text-base mx-auto font-medium'>{props.subtitle}</p>
    </div>
  )
}

export default PageBanner