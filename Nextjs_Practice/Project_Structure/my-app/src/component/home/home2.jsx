import { product } from '@/data/product'
import Link from 'next/link'
import React from 'react'

const Home2 = () => {
  return (
    <div className='max-h-screen bg-amber-600'>
      <p> This is Home2 page</p>
      {product.map((item,index)=>(
        <div key={index} className='mt-10'>
            <Link href={`/description/${item.slug}`}>
            <p> {item.description} </p>
            </Link>
            <p> {item.title} </p>
            </div>
     ))}
    </div>
  )
}

export default Home2
