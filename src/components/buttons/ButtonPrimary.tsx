import Link from 'next/link'
import React from 'react'

const ButtonPrimary = (text:any,link:any) => {

  return (
    <Link href={`${link}`}>
      <button className='bg-red-500 px-5 py-2 rounded-md text-white font-semibold text-sm'>
          {text}
      </button>
    </Link>
  )
}

export default ButtonPrimary