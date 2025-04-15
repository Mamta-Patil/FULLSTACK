"use client"
import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import { CiSearch } from "react-icons/ci";
import { deleteProduct, getproducts } from '@/lib/api';
import { AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import Link from 'next/link';

const products = () => {
    const [products, setproducts] = useState([]);

    const handleDeleteAction = async (productId) => {
        try {
            console.log("producID:", productId)
            await deleteProduct(productId);
            alert('Product deleted successfully.');
        } catch (error) {
            console.error('Error deleting blog:', error);
            alert('An error occurred while deleting the blog.');
        }
    };

    useEffect(() => {
        const fetchBlogs = async () => {
            const data = await getproducts();
            console.log("products data : ", data)
            setproducts(data);
        };
        fetchBlogs();
    }, []);

    return (

        <div className="flex">
            <div className="w-[20%]">
                <Sidebar />
            </div>
            <div className="w-[80%] ">
                <Navbar />
                <div className="bg-blue-100 ">
                    <div className='px-20 bg-white shadow-lg h-screen mx-10 rounded-md'>

                        <div className="flex justify-between pt-10">
                            <h2 className='font-serif text-3xl'>Product Management</h2>
                            {/* <button className='bg-blue-700 text-white p-2 rounded-md'> */}
                            <Link
                                                href="/product/create"
                                                className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg text-sm"
                                            >
                                                {/* <AiFillEdit /> */}
                                                + Add Product
                                            </Link>
                                
                                 {/* </button> */}
                        </div>

                        <div className="rounded-md border-1 border-[lightgrey] mt-6 flex justify-around py-2 text-[grey]">
                            <div className="flex">
                                <div className="flex border-1 border-md  rounded-md border-[lightgrey] ps-2 text-xl">
                                    <CiSearch className='mt-3 ms-2' />
                                    <input type="text" placeholder='search products...' className='p-2 outline-none w-[520px]' />
                                </div>
                            </div>
                            <button className='p-2 rounded-md border-1 border-[lightgrey]'>All Categories</button>
                            <button className='p-2 rounded-md border-1 border-[lightgrey] pe-6'>All Price</button>
                            <button className='p-2 rounded-md border-1 border-[lightgrey]'>All Stack</button>
                            <button className='p-2 rounded-md border-1 border-[lightgrey]'>Export (0) </button>


                        </div>

                        <table className="min-w-full text-left border border-gray-300 mt-10">
                            <thead className="bg-[#ebeaea] text-xl">
                                <tr className="p-3">
                                    <th className="p-3"><input type="checkbox" className="h-4 w-4 border border-black" /></th>
                                    <th className="p-3">Image</th>
                                    <th className="p-3">ID</th>
                                    <th className="p-3">Name</th>
                                    <th className="p-3">Price</th>
                                    <th className="p-3">Stock</th>
                                    <th className="p-3">Category</th>
                                    <th className="p-3">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map((item, index) => (
                                    <tr key={index} className="border-t border-gray-200">
                                        <td className="p-3">
                                            <input type="checkbox" className="h-4 w-4" />
                                        </td>
                                        <td className="p-3">
                                            <img src={item.image} alt="Product" className="w-12 h-12 object-cover" />
                                        </td>
                                        <td className="p-3">{item.id}</td>
                                        <td className="p-3">{item.Name}</td>
                                        <td className="p-3">{item.Price}</td>
                                        <td className="p-3">{item.Stock}</td>
                                        <td className="p-3">{item.Category}</td>
                                        <td className="p-3 flex text-2xl text-blue-700">
                                            <Link
                                                href={`/product/edit/${item.documentId}`}
                                                className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg text-sm"
                                            >
                                                <AiFillEdit />
                                            </Link>


                                            <button
                                                type="button"
                                                onClick={() => handleDeleteAction(item.documentId)}
                                                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm"
                                            >
                                                <MdDelete className='' />
                                            </button>

                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default products

// "use client";
// import { useEffect, useState } from 'react';
// import { deleteBlog, getblogs } from '@/lib/api';
// import Link from 'next/link';

// export default function BlogPage() {
//   const [blogs, setBlogs] = useState([]);
//   const [locale, setLocale] = useState('en');

//   const locales = [
//     { code: 'en', name: 'English' },
//     { code: 'gu-IN', name: 'Gujarati' },
//     { code: 'hi-IN', name: 'Hindi' },
//     { code: 'mr-IN', name: 'Marathi' },
//   ];

//   const handleDeleteAction = async (productId) => {
//     try {
//       console.log("producID:",productId)
//        await deleteBlog(productId,locale);
//       // console.log("Deleted:", res);

//       // const updatedBlogs = await getblogs(locale);
//       // setBlogs(updatedBlogs || []);
//       alert('Blog deleted successfully.');
//     } catch (error) {
//       console.error('Error deleting blog:', error);
//       alert('An error occurred while deleting the blog.');
//     }
//   };

//   useEffect(() => {
//     const fetchBlogs = async () => {
//       const data = await getblogs(locale);
//       localStorage.setItem('locale', locale);
//       setBlogs(data);
//     };
//     fetchBlogs();
//   }, [locale]);

//   return (
//     <div className="max-w-6xl mx-auto p-6 space-y-6">
//       <label htmlFor="locale" className="text-white mr-2">Select Language:</label>
//       <select
//         onChange={(e) => setLocale(e.target.value)}
//         className="p-2 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
//       >
//         {locales.map((locale) => (
//           <option key={locale.code} value={locale.code}>
//             {locale.name}
//           </option>
//         ))}
//       </select>

//       {blogs.map((b) => (
//         <div
//           key={b.id}
//           className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 flex flex-col md:flex-row md:items-center justify-between gap-4"
//         >
//           <div className="flex-1">
//             <Link
//               href={`/blog/${b.documentId}`}
//               className="text-xl font-semibold text-gray-800 hover:underline"
//             >
//               {b.name}

//             </Link>
//             {b.price}

//             <p>Category : {b.category ?b.category.name : "no category"}</p>

//             {b.image && Array.isArray(b.image) && b.image.length > 0 ? (
//               <div className="mt-4 flex flex-wrap gap-4">
//                 {b.image.map((img, imgIndex) => {
//                   const imageUrl =
//                     img?.formats?.medium?.url ||
//                     img?.formats?.small?.url ||
//                     img?.formats?.thumbnail?.url ||
//                     img?.url;

//                   return (
//                     <img
//                       key={imgIndex}
//                       src={`http://localhost:1337${imageUrl}`}
//                       alt={img.name || "Product Image"}
//                       className="w-28 h-28 object-cover rounded-lg border"
//                     />
//                   );
//                 })}
//               </div>
//             ) : (
//               <div className="mt-2 text-gray-500 italic">No images available</div>
//             )}
//           </div>

//           <div className="flex gap-3">
//             <Link
//               href={`/edit/${b.documentId}`}
//               className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg text-sm"
//             >
//               Edit
//             </Link>

//             <button
//               type="button"
//               onClick={() => handleDeleteAction(b.documentId)}
//               className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm"
//             >
//               Delete
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }
