import React from 'react'
import PageBanner from '@/components/banners/PageBanner'
import ProdCard from '@/components/cards/ProdCard'

const ProductsUi = ({prodData}:any) => {

  return (
    <div>
        <PageBanner title="Products" subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi laudantium esse ducimus in aspernatur Modi laudantium esse ducimus in aspernatur"/>
        <div className='_container grid grid-cols-2 md:grid-cols-4 gap-3'>
          {
            prodData?.products?.map((item:any,i:any)=>(
              <ProdCard key={i} item={item}/>
            ))
          }
        </div>
    </div>
  )
}

export default ProductsUi