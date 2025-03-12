"use client"; // ✅ Required for Client Components

import { fetchProducts } from '@/redux/product/productthunk';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

const Product = () => {
   
    const dispatch = useDispatch()
   
    const { items , status , error }  = useSelector( (state) => state.products)
    // const {Data} = items
    // console.log("item",items)


    useEffect( () => {
        dispatch(fetchProducts())
    }  , [dispatch])

  return (
    <div>
       <h2>Products</h2>
      <ul>

        {items.map ((product , index) => (
                <div key={index} className=''>
                      {product.Name}
                </div>
            )
        )}
       
      </ul>
    </div>
  )
}

export default Product
