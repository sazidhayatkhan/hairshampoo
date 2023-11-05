import React from 'react'
import ProductsUi from '@/views/page-products'
import api from '@/config/api.json';
import { getData } from "@/utils/apiCore";

const page = async() => {
  const prodData = await getData({ url: api.product.list });
  
  return (
    <ProductsUi prodData={prodData}/>
  )
}

export default page