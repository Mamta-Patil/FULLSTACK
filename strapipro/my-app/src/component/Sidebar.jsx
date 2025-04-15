// import React from 'react'
// import { RxDashboard } from "react-icons/rx";
// import { LuUserRound } from "react-icons/lu";
// import { RiShoppingCartLine } from "react-icons/ri";
// import { BiCategory } from "react-icons/bi";
// import Link from 'next/link';

// import { Sidebar as sidebarData } from '@/data/sidebar';

// export const path=[
//   {
//     path:"/dashboard"
//   },
//   {
//     path:"/profile"
//   },
//   {
//     path:"/product"
//   },
//   {
//     path:"/category"
//   }
// ]

// export const icons=[
//   {
//     icon:<RxDashboard />
//   },
//   {
//     icon:<LuUserRound />
//   }
//   ,
//   {
//     icon:<RiShoppingCartLine />
//   },
//   {
//     icon:<BiCategory />
//   }
// ]

// const Sidebar = () => {
//   return (
//     <div className='w-full px-10 ps-20 border-r-1 border-[lightgrey] h-screen'>
//   <div className='pt-20 text-black text-xl'>
//       <h2 className='text-xl font-normal'>Main Menu</h2>
//       <div className="ps-4">
//         {sidebarData.map((item,index)=>(
//         <Link href={path.path} className='flex pt-4'>
//         {icons[index].icon}
//         <h2 className='ps-4'>{item.name}</h2>
//         </Link>
//         ))}
//       </div>   
//     </div>
//     </div>
  
//   )
// }

// export default Sidebar
import React from 'react';
import { RxDashboard } from "react-icons/rx";
import { LuUserRound } from "react-icons/lu";
import { RiShoppingCartLine } from "react-icons/ri";
import { BiCategory } from "react-icons/bi";
import Link from 'next/link';

import { Sidebar as sidebarData } from '@/data/sidebar';

export const path = [
  { path: "/dashboard" },
  { path: "/profile" },
  { path: "/product" },
  { path: "/category" },
];

export const icons = [
  { icon: <RxDashboard /> },
  { icon: <LuUserRound /> },
  { icon: <RiShoppingCartLine /> },
  { icon: <BiCategory /> },
];

const Sidebar = () => {
  return (
    <div className="w-full px-10 ps-20 border-r border-[lightgrey] h-screen">
      <div className="pt-20 text-black text-xl">
        <h2 className="text-xl font-normal">Main Menu</h2>
        <div className="ps-4">
          {sidebarData.map((item, index) => (
            <Link href={path[index].path} key={index} className="flex pt-4 items-center">
              {icons[index].icon}
              <h2 className="ps-4">{item.name}</h2>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
