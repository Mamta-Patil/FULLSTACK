// "use client"
// import { checkout } from '@/checkout'
// import React from 'react'

// const Payment = () => {
//   return (
//     <div>
//       <img src="https://plus.unsplash.com/premium_photo-1661662850226-83c981ed4eba?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='h-96 w-96' /> 
//       <h2>Price : 200 </h2>
//       <button onClick={(()=>{
//     checkout({
//         lineItems:[{price:"price_1RFDU8Q8UcxI2cxz4RPrBAb9",quantity:1}]
//     })
//       })} className='p-2 bg-2 bg-amber-200'> Pay </button>
//     </div>
//   )
// }

// export default Payment


"use client";

import { checkout } from '@/checkout';
import React from 'react';

const Payment = () => {
  return (
    <div>
      <img
        src="https://plus.unsplash.com/premium_photo-1661662850226-83c981ed4eba?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        className="h-96 w-96"
      />
      <h2>Price : 200</h2>
      <button
        onClick={() =>
          checkout({
            lineItems: [{ price: "price_1RFDU8Q8UcxI2cxz4RPrBAb9", quantity: 1 }],
          })
        }
        className="p-2 bg-amber-200"
      >
        Pay
      </button>
    </div>
  );
};

export default Payment;
