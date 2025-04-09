"use client";
import { useEffect, useState } from 'react';
import { getblogs } from '@/lib/api';
import Link from 'next/link';
import { handleDeleteAction } from '@/app/blog/action';
// import { addBlog } from '@/app/create/action';

export default function BlogPage() {
  const [blogs, setBlogs] = useState([]);
  const [locale, setLocale] = useState('en');
  const locales = [
    { code: 'en', name: 'English' },
    { code: 'gu-IN', name: 'Gujarati' },
    { code: 'hi-IN', name: 'Hindi' },
    { code: 'mr-IN', name: 'Marathi' },
  ];

  //   useEffect(() => {
  //     const fetchBlogs = async () => {
  //       const data = await getblogs();
  //       setBlogs(data);
  //     };
  //     fetchBlogs(locale);
  //   }, [locale]);

  useEffect(() => {
    const fetchBlogs = async () => {
      // console.log("local",locale)
      const data = await getblogs(locale); // pass selected locale here
      console.log("local :::::::::::::::           ",locale)
      setBlogs(data);
    };
    fetchBlogs();
  }, [locale]);

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      {/* // Inside BlogPage component, above the blog listing */}
{/* <form action={addBlog} className=" p-4 rounded-lg space-y-4 text-black">
  
  <h3>  Add Blog</h3>
  <input type="hidden" name="locale" value={locale} />
  
  <div>
    <label className="block">Title:</label>
    <input
      type="text"
      name="name"
      required
      className="w-full p-2 rounded  border border-gray-700"
    />
  </div>

  <div>
    <label className="block">Image URL:</label>
    <input
      type="text"
      name="image"
      className="w-full p-2 rounded border border-gray-700"
    />
  </div>

  <button type="submit" className="bg-teal-600 border-2 border-black hover:bg-teal-700 px-4 py-2 rounded text-white">
    Add Blog
  </button>
</form> */}

{/* 
      <select value={locale} onChange={(e) => setLocale(e.target.value)}>
        <option value="en">English</option>
        <option value="hi-IN">Hindi</option>
        <option value="gu-IN">Gujarati</option>
        <option value="mr-IN">Marathi</option>
      </select> */}
        {/* <Link href={"/create"}>  Add Blog </Link> */}

       <label htmlFor="locale" className="text-white mr-2">Select Language:</label>
        <select
          // id="locale"
          // value={setLocale}
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

            <form action={handleDeleteAction}>
              <input type="hidden" name="id" value={b.documentId} />
              <button
                type="submit"
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm"
              >
                Delete
              </button>
            </form>
          </div>
        </div>
      ))}
    </div>
  );
}
