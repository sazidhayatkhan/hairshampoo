import React from 'react'
import ProductDetails from '@/views/page-products/prodect-details'
import api from '@/config/api.json';
import { getData } from '@/utils/apiCore';

const page = async({ params }: { params: { id: number } }) => {
  const id = params?.id;
  const response = await getData({ url: `${api.product.list}/${id}` });
  
  return (
    <ProductDetails detailsData={response}/>
  )
}

export default page