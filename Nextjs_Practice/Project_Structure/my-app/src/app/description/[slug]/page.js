// import Description from '@/component/description';
import Description from '@/component/home/description';
import { product } from '@/data/product';
import React from 'react'

const DescriptionPage =async ({params}) => {
    const { slug } = await params;
   

    const description = product.find((z) => z.slug === slug);
  return (
    <div>
      <Description description={description} />
    </div>
  )
}

export default DescriptionPage
