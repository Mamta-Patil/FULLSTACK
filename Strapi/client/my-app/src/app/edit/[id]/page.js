'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getBlog, updateBlog } from '@/lib/api';

export default function EditBlog({ params }) {
  const { id } = params;
  console.log(id)
  const [name, setName] = useState('');
  const [image, setImage] = useState([]);
  const [previewUrls, setPreviewUrls] = useState([]);
  const router = useRouter();

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImage(files);

    const urls = files.map((file) => URL.createObjectURL(file));
    setPreviewUrls(urls);
  };

// in EditBlog component
// useEffect(() => {
//   async function fetchBlog() {
//     const blog = await getBlog(id, locale); // Add locale
//     setName(blog.name);
//     setImage(blog.image || []);
//   }
//   fetchBlog();
// }, [id, locale]);

  useEffect(() => {
    async function fetchBlog() {
      const blog = await getBlog(id);
      console.log('Fetched blog:', blog); // 👈 Check the response here
      setName(blog.name);
      setImage(blog.image)
    }
    fetchBlog();
  }, [id]);

  const handleRemoveImage = (index) => {
    const updatedImages = [...image];
    const updatedPreviews = [...previewUrls];

    updatedImages.splice(index, 1);
    updatedPreviews.splice(index, 1);

    setImage(updatedImages);
    setPreviewUrls(updatedPreviews);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let imageIds = [];

      // Only upload if new image(s) are selected
      if (image.length > 0 && image[0] instanceof File) {
        const formData = new FormData();
        image.forEach((img) => formData.append("files", img));

        const uploadResponse = await fetch("http://localhost:1337/api/upload", {
          method: "POST",
          body: formData,
        });

        const uploadedFiles = await uploadResponse.json();
        imageIds = uploadedFiles.map((file) => file.id);
      } else {
        imageIds = image.map((img) => img.id); // if already uploaded
      }

      // Update blog
      await fetch(`http://localhost:1337/api/products/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: {
            name,
            image: imageIds,
          },
        }),
      }); 

      alert("Blog updated successfully!");
      router.push('/blog');
    } catch (error) {
      console.error("Error updating blog:", error);
      alert("An error occurred while updating the blog.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-lg p-8 rounded-xl mt-10">

      <h1 className="text-3xl font-bold text-gray-800 mb-6">Edit Blog</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Blog Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter blog name"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Upload Images
          </label>
          <input
            type="file"
            id="addImage"
            name="image"
            accept="image/*"
            multiple
            onChange={handleImageChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            required
          />
        </div>

        {previewUrls.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
            {previewUrls.map((url, index) => (
              <div key={index} className="relative group">
                <img
                  src={url}
                  alt={`Preview ${index + 1}`}
                  className="w-full h-36 object-cover rounded-lg border shadow"
                />
                <button
                  type="button"
                  onClick={() => handleRemoveImage(index)}
                  className="absolute top-1 right-1 bg-black bg-opacity-70 text-white rounded-full p-1 text-xs hover:bg-white transition"
                >
                  ❌
                </button>
              </div>
            ))}
          </div>
        )}

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
        >
          Update Blog
        </button>
      </form>
    </div>

  );
}

// import EditBlog from '@/component/editblog'
// import React from 'react'

// const page = () => {
//   return (
//     <div>
//       <EditBlog />
//     </div>
//   )
// }

// export default page
