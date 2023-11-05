import PageBanner from '@/components/banners/PageBanner'
import ProdCard from '@/components/cards/ProdCard'
import React from 'react'

const ProductsUi = () => {
  return (
    <div>
        <PageBanner title="Products" subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi laudantium esse ducimus in aspernatur Modi laudantium esse ducimus in aspernatur"/>
        <div className='_container grid grid-cols-2 md:grid-cols-4 gap-3'>
          {
            [1,2,3,4].map((i:any)=>(
              <ProdCard key={i}/>
            ))
          }
        </div>
    </div>
  )
}

export default ProductsUi