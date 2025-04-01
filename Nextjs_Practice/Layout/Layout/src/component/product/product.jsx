// "use client"
// import React, { useEffect, useState } from 'react'
// import { product } from '@/data/product'
// import Link from 'next/link'
// // import withDelay from "./withDelay";

// const Product = () => {
//   // const [isLoading, setIsLoading] = useState(true);

//   // useEffect(() => {
//   //   // Delay the component display for 3 seconds
//   //   const timer = setTimeout(() => {
//   //     setIsLoading(false);
//   //   }, 3000);

//   //   return () => clearTimeout(timer); // Cleanup timeout on unmount
//   // }, []);

//   return (
//     <div className='grid grid-cols-3'>
//      {product.map((item,index)=>(
//         <div key={index} className='mt-10'>
//             <Link href={`/description/${item.slug}`}>
//             <p> {item.description} </p>
//             </Link>
//             {/* <Link href={`/description/${item.id}`}>
//             <p> {item.description} </p>
//             </Link> */}
//             <p> {item.title} </p>
//             </div>
//      ))}
//     </div>
//   )
// }

// export default Product
"use client";
import React, { useEffect, useState } from "react";
import { product } from "@/data/product";
import Link from "next/link";
import Loading from "@/component/product/loading"; // Import the loading component

const Product = () => {
  const [loading, setLoading] = useState(true); // State for loading

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer); 
  }, []);

  if (loading) return <Loading />; 

  return (
    <div className="grid grid-cols-3">
      {product.map((item, index) => (
        <div key={index} className="mt-10">
          <Link href={`/description/${item.slug}`}>
            <p>{item.description}</p>
          </Link>
          <p>{item.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Product;
