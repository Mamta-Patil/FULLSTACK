// 'use client';
// import { useState } from 'react';
// import { createBlog } from '@/lib/api';
// import { useRouter } from 'next/navigation';

// export default function CreateBlogPage() {
//   const [title, setTitle] = useState('');
//   const [content, setContent] = useState('');
//   const router = useRouter();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await createBlog({ title, content, published: true });
//     router.push('/');
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
//       <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Content" />
//       <button type="submit">Create</button>
//     </form>
//   );
// }
'use client';
import { useState } from 'react';
import { createBlog } from '@/lib/api';
import { useRouter } from 'next/navigation';

export default function CreateBlogPage() {
  const [name, setName] = useState('');
//   const [content, setContent] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    // console.log('Sending to Strapi:', { data: blog });
    // const res = await fetch('http://localhost:1337/api/products', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ data: blog }),
    //   });
    
    //   return res.json();
    e.preventDefault();
    await createBlog({ name, published: true });
    router.push('/');
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-xl rounded-2xl">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Create New Blog Post</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter blog title"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>


        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
        >
          Create Post
        </button>
      </form>
    </div>
  );
}


{/* 
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Content</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Write your blog content here..."
            rows={6}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div> */}