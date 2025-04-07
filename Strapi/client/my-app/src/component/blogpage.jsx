"use client";
import { useEffect, useState } from 'react';
import { getblogs } from '@/lib/api';
import Link from 'next/link';
import { handleDeleteAction } from '@/app/blog/action';
import Image from 'next/image';
// import Image from 'next/image'

export default function BlogPage() {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        const fetchBlogs = async () => {
            const data = await getblogs();
            console.log("images", data)
            setBlogs(data);
        };
        fetchBlogs();
    }, []);

    return (
        <div>
            {blogs.map((b) => (
                <li
                    key={b.id}
                    className="p-4 border rounded-lg shadow hover:shadow-md transition duration-300 flex items-center justify-between"
                >
                    <Link href={`/blog/${b.documentId}`} className="text-lg font-semibold text-gray-800 hover:underline">
                        {b.name}
                    </Link>
                    {/* 
{b.image.map((img)=>(
        <Image key={img.id}
        src={`http://localhost:3000/${img.name}`}
        width={100}
        height={100}
        alt="Picture of the author"
      />
))} */}




{b.image && Array.isArray(b.image) ? (
                        b.image.map((img, imgIndex) => {
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
                                    className="w-32 h-32 object-cover rounded border"
                                />
                            );
                        })
                    ) : (
                        <div className="text-gray-400">No images</div>
                    )}


                    <div className="flex gap-2">
                        <Link
                            href={`/edit/${b.documentId}`}
                            className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 text-sm"
                        >
                            Edit
                        </Link>

                    </div>

                    
                    {/* {b.image.length > 0 && (
  <div className="flex gap-2">
    {b.image.map((img) => (
      <Image
        key={img.id}
        src={`http://localhost:3000/uploads/${img.name}`}
        alt={img.name}
        width={150}
        height={100}
        className="rounded shadow-sm object-cover"
      />
    ))}
  </div>
)} */}

                    <form action={handleDeleteAction}>
                        <input type="hidden" name="id" value={b.documentId} />
                        <button
                            type="submit"
                            className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 text-sm"
                        >
                            Delete
                        </button>
                    </form>
                </li>
            ))}

        </div>
    );
}
