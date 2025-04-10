"use client";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { getBlog, updateBlog } from "@/lib/api";

export default function EditBlog({ params }) {
  const { id } = params;
  const router = useRouter();
  const searchParams = useSearchParams();
  // const locale = searchParams.get("locale") || "hi-IN";
  const locale = localStorage.getItem('locale') || 'en'

  const [name, setName] = useState("");
  const [image, setImage] = useState([]);
  const [previewUrls, setPreviewUrls] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const blog = await getBlog(id, locale);
      setName(blog.name);
      setImage(blog.image || []);
      if (Array.isArray(blog.image)) {
        const urls = blog.image.map(
          (img) => `http://localhost:1337${img.url}`
        );
        setPreviewUrls(urls);
      }
    }
    fetchData();
  }, [id, locale]);

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImage(files);
    const urls = files.map((file) => URL.createObjectURL(file));
    setPreviewUrls(urls);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let imageIds = [];

      if (image.length && image[0] instanceof File) {
        const formData = new FormData();
        image.forEach((file) => formData.append("files", file));

        const uploadRes = await fetch("http://localhost:1337/api/upload", {
          method: "POST",
          body: formData,
        });

        const uploaded = await uploadRes.json();
        imageIds = uploaded.map((img) => img.id);
      } else {
        imageIds = image.map((img) => img.id);
      }

      await updateBlog(id, {
        name,
        image: imageIds,
      },locale);

      alert("Blog updated successfully!");
      // router.push("/blog");
    } catch (err) {
      console.error("Update error", err);
      alert("Failed to update blog.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-lg p-8 rounded-xl mt-10">
      <h1 className="text-3xl font-bold mb-6">Edit Blog ({locale})</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block mb-1 font-medium text-gray-700">Blog Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border px-4 py-2 rounded-md"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium text-gray-700">Upload Images</label>
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleImageChange}
            className="w-full border px-4 py-2 rounded-md"
          />
        </div>

        {previewUrls.length > 0 && (
          <div className="grid grid-cols-2 gap-4 mt-4">
            {previewUrls.map((url, i) => (
              <div key={i} className="relative">
                <img
                  src={url}
                  alt={`Preview ${i}`}
                  className="w-full h-36 object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
        )}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
        >
          Update Blog
        </button>
      </form>
    </div>
  );
}
