// import Loading from '@/component/product/loading'
// import Product from '@/component/product/product'
// import React, { Suspense } from 'react'
// // const Product = React.lazy(() => import("@/component/product/product"));
// // const Payment = React.lazy(() => import('@/component/index'));
// // const Product = React.lazy(() => import('@/component/product/product'));
// // import dynamic from 'next/dynamic';
// // import Loading from '@/component/product/loading';

// // ✅ Use next/dynamic instead of React.lazy()
// // const Payment = dynamic(() => import('@/component/index'), {
// //   loading: () => <Loading />,
// //   ssr: false,
// // });

// const page = () => {
//   return (
//     <div>
//       <Suspense fallback={<Loading />}>
//            <Product />
//       </Suspense>
//       {/* <Suspense fallback={<Loading />}>
//        <Description />
//       </Suspense> */}
//     </div>
//   )
// }

// export default page
import Product from "@/component/product/product";
import React from "react";

const Page = () => {
  return (
    <div>
      <Product />
    </div>
  );
};

export default Page;
