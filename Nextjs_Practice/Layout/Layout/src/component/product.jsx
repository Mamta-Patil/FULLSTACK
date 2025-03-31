import React from 'react'
import { product } from '@/data/product'
import Link from 'next/link'

const Product = () => {
  return (
    <div className='grid grid-cols-3'>
     {product.map((item,index)=>(
        <div key={index} className='mt-10'>
            <Link href={`/description/${item.slug}`}>
            <p> {item.description} </p>
            </Link>
            {/* <Link href={`/description/${item.id}`}>
            <p> {item.description} </p>
            </Link> */}
            <p> {item.title} </p>
            </div>
     ))}
    </div>
  )
}

export default Product
