'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getBlog, updateBlog } from '@/lib/api';

export default function EditBlog({ params }) {
  const { id } = params; 
  console.log(id)
  const [name, setName] = useState('');
  const router = useRouter();

  useEffect(() => {
    async function fetchBlog() {
      const blog = await getBlog(id);
      console.log('Fetched blog:', blog); // 👈 Check the response here
      setName(blog.name);
    }
    fetchBlog();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateBlog(id, { name });
    router.push('/');
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Edit Blog Name</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Blog name"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Update
        </button>
      </form>
    </div>
  );
}
