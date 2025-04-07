// // // // import Image from "next/image";

// // // // export default function Home() {
// // // //   return (
// // // //     <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
// // // //       <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
// // // //         <Image
// // // //           className="dark:invert"
// // // //           src="/next.svg"
// // // //           alt="Next.js logo"
// // // //           width={180}
// // // //           height={38}
// // // //           priority
// // // //         />
// // // //         <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
// // // //           <li className="mb-2 tracking-[-.01em]">
// // // //             Get started by editing{" "}
// // // //             <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
// // // //               src/app/page.js
// // // //             </code>
// // // //             .
// // // //           </li>
// // // //           <li className="tracking-[-.01em]">
// // // //             Save and see your changes instantly.
// // // //           </li>
// // // //         </ol>

// // // //         <div className="flex gap-4 items-center flex-col sm:flex-row">
// // // //           <a
// // // //             className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
// // // //             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
// // // //             target="_blank"
// // // //             rel="noopener noreferrer"
// // // //           >
// // // //             <Image
// // // //               className="dark:invert"
// // // //               src="/vercel.svg"
// // // //               alt="Vercel logomark"
// // // //               width={20}
// // // //               height={20}
// // // //             />
// // // //             Deploy now
// // // //           </a>
// // // //           <a
// // // //             className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
// // // //             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
// // // //             target="_blank"
// // // //             rel="noopener noreferrer"
// // // //           >
// // // //             Read our docs
// // // //           </a>
// // // //         </div>
// // // //       </main>
// // // //       <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
// // // //         <a
// // // //           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
// // // //           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
// // // //           target="_blank"
// // // //           rel="noopener noreferrer"
// // // //         >
// // // //           <Image
// // // //             aria-hidden
// // // //             src="/file.svg"
// // // //             alt="File icon"
// // // //             width={16}
// // // //             height={16}
// // // //           />
// // // //           Learn
// // // //         </a>
// // // //         <a
// // // //           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
// // // //           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
// // // //           target="_blank"
// // // //           rel="noopener noreferrer"
// // // //         >
// // // //           <Image
// // // //             aria-hidden
// // // //             src="/window.svg"
// // // //             alt="Window icon"
// // // //             width={16}
// // // //             height={16}
// // // //           />
// // // //           Examples
// // // //         </a>
// // // //         <a
// // // //           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
// // // //           href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
// // // //           target="_blank"
// // // //           rel="noopener noreferrer"
// // // //         >
// // // //           <Image
// // // //             aria-hidden
// // // //             src="/globe.svg"
// // // //             alt="Globe icon"
// // // //             width={16}
// // // //             height={16}
// // // //           />
// // // //           Go to nextjs.org →
// // // //         </a>
// // // //       </footer>
// // // //     </div>
// // // //   );
// // // // }
// // // // import { getBlogs } from '@/lib/api';
// // // // import Link from 'next/link';
// // // // // import { getBlogs } from '@/lib/api';

// // // // export default async function HomePage() {
// // // //   const blogs = await getBlogs();

// // // //   return (
// // // //     <div>
// // // //       <h1>Blog Posts</h1>
// // // //       <Link href="/blog/create">Create New Post</Link>
// // // //       <ul>
// // // //         {blogs.map((b) => (
// // // //           <li key={b.id}>
// // // //             <Link href={`/blog/${b.id}`}>{b.name}</Link>
// // // //           </li>
// // // //         ))}
// // // //       </ul>
// // // //     </div>
// // // //   );
// // // // }


// // // import CreateBlogPage from '@/component/createBlog';
// // // import { deleteBlog, getBlogs } from '@/lib/api';
// // // import Link from 'next/link';
// // // import { redirect } from 'next/navigation';

// // // export default async function BlogPage({params}) {
// // //   const blog = await getBlogs({params});

// // //   const handleDelete = async () => {
// // //     'use server';
// // //     await deleteBlog(params.id);
// // //     redirect('/');
// // //   };

// // //   return (
// // //     <div>
// // //       {/* <h1>{blog.attributes.title}</h1> */}
// // //     {/* <CreateBlogPage /> */}
// // //       {blog.map((b) => (
// // //           <li key={b.id}>
// // //             <Link href={`/blog/${b.id}`}>{b.name}</Link>
// // //             <form action={handleDelete}>
// // //         <button type="submit">Edit</button>
// // //         <button type="submit">Delete</button>
// // //       </form>
// // //           </li>
// // //         ))}
// // //       {/* <div dangerouslySetInnerHTML={{ __html: blog.name }} /> */}
// // //       {/* <Link href={`/blog/edit/${params.id}`}>Edit</Link> */}

// // //     </div>
// // //   );
// // // }




// // // export async function handleDeleteAction(formData) {
// // //   'use server';
// // //   const id = formData.get('id');
// // //   await deleteBlog(id);
// // //   redirect('/');
// // // }


// // // "use client"
// // import { deleteBlog, getBlogs } from '@/lib/api';
// // import Link from 'next/link';
// // import { redirect } from 'next/navigation';
// // // import { useEffect } from 'react';


// // export async function handleDeleteAction(formData) {

// //   'use server';
// //   const documentId = formData.get('id');
// //   await deleteBlog(documentId);
// //   redirect('/');
// // }


// // export default async function BlogPage() {
  
// //   // const router = useRouter();

// //   // useEffect(() => 
// //   // {
// //   //   const token = localStorage.getItem('token');

// //   //   if (!token) 
// //   //   {
// //   //     router.push('/login'); 
// //   //   } 
// //   //   // else 
// //   //   // {
// //   //   //   router.push('/login');
// //   //   // }
// //   // }, []);
  

// //   const blogs = await getBlogs();
// //   console.log("blog details: ", blogs)
// //   console.log(blogs.documentId)
// //   return (
// //     <div className="max-w-3xl mx-auto p-6">
// //       <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">Blog Posts</h1>

// //       <div className="flex justify-end mb-4">
// //         <Link
// //           href="/create"
// //           className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
// //         >
// //           Create New Post
// //         </Link>
// //       </div>

// //       <ul className="space-y-4">
// //         {blogs.map((b) => (
// //           <li
// //             key={b.id}
// //             className="p-4 border rounded-lg shadow hover:shadow-md transition duration-300 flex items-center justify-between"
// //           >
// //             <Link href={`/blog/${b.documentId}`} className="text-lg font-semibold text-gray-800 hover:underline">
// //               {b.name}
// //             </Link>

// //             <div className="flex gap-2">
// //               <Link
// //                 href={`/edit/${b.documentId}`}
// //                 className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 text-sm"
// //               >
// //                 Edit
// //               </Link>
        
// //               {/* ✅ This form submits to the server action above */}
// //               <form action={handleDeleteAction}>
// //                 <input type="hidden" name="id" value={b.documentId} />
// //                 <button
// //                   type="submit"
// //                   className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 text-sm"
// //                 >
// //                   Delete
// //                 </button>
// //               </form>

// //             </div>
// //           </li>
// //         ))}
// //       </ul>
// //     </div>
// //   );
// // }

// // {/* type="submit"
// //                   <button   > Delate </button> */}
// // {/* <button onClick={() => handleDelete(item?.id)} className='bg-red-500 text-white p-2 rounded-lg'>Delete</button>  */ }

// // {/* <form action={() => handleDelete(b.id)}>
// //                 <button
// //                   type="submit"
// //                   className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 text-sm"
// //                 >
// //                   Delete
// //                 </button>
// //               </form> */}
// // {/* 
// //               <form action={handleDeleteAction}>
// //                 <input type="hidden" name="id" value={b.id} />
// //                 <button
// //                   type="submit"
// //                   className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 text-sm"
// //                 >
// //                   Delete
// //                 </button>
// //               </form> */}



'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
// import LoginPage from './login/page';

const Home = () =>
{
  const router = useRouter();

  useEffect(() => 
  {
    const token = localStorage.getItem('token');

    if (token) 
    {
      router.push('/blog'); 
    } 
    else 
    {
      router.push('/login');
    }
  }, []);

  // <LoginPage/>

  return null;
}

export default Home;