"use client";
import { useEffect, useState } from 'react';
import { deleteBlog, getblogs } from '@/lib/api';
import Link from 'next/link';

export default function BlogPage() {
  const [blogs, setBlogs] = useState([]);
  const [locale, setLocale] = useState('en');

  const locales = [
    { code: 'en', name: 'English' },
    { code: 'gu-IN', name: 'Gujarati' },
    { code: 'hi-IN', name: 'Hindi' },
    { code: 'mr-IN', name: 'Marathi' },
  ];

  const handleDeleteAction = async (productId) => {
    try {
      console.log("producID:",productId)
       await deleteBlog(productId,locale);
      // console.log("Deleted:", res);

      // const updatedBlogs = await getblogs(locale);
      // setBlogs(updatedBlogs || []);
      alert('Blog deleted successfully.');
    } catch (error) {
      console.error('Error deleting blog:', error);
      alert('An error occurred while deleting the blog.');
    }
  };

  useEffect(() => {
    const fetchBlogs = async () => {
      const data = await getblogs(locale); 
      localStorage.setItem('locale', locale);
      setBlogs(data);
    };
    fetchBlogs();
  }, [locale]);

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      <label htmlFor="locale" className="text-white mr-2">Select Language:</label>
      <select
        onChange={(e) => setLocale(e.target.value)}
        className="p-2 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
      >
        {locales.map((locale) => (
          <option key={locale.code} value={locale.code}>
            {locale.name}
          </option>
        ))}
      </select>

      {blogs.map((b) => (
        <div
          key={b.id}
          className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 flex flex-col md:flex-row md:items-center justify-between gap-4"
        >
          <div className="flex-1">
            <Link
              href={`/blog/${b.documentId}`}
              className="text-xl font-semibold text-gray-800 hover:underline"
            >
              {b.name}
            </Link>

            {b.image && Array.isArray(b.image) && b.image.length > 0 ? (
              <div className="mt-4 flex flex-wrap gap-4">
                {b.image.map((img, imgIndex) => {
                  const imageUrl =
                    img?.formats?.medium?.url ||
                    img?.formats?.small?.url ||
                    img?.formats?.thumbnail?.url ||
                    img?.url;

                  return (
                    <img
                      key={imgIndex}
                      src={`http://localhost:1337${imageUrl}`}
                      alt={img.name || "Product Image"}
                      className="w-28 h-28 object-cover rounded-lg border"
                    />
                  );
                })}
              </div>
            ) : (
              <div className="mt-2 text-gray-500 italic">No images available</div>
            )}
          </div>

          <div className="flex gap-3">
            <Link
              href={`/edit/${b.documentId}`}
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg text-sm"
            >
              Edit
            </Link>

            <button
              type="button"
              onClick={() => handleDeleteAction(b.documentId)}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
