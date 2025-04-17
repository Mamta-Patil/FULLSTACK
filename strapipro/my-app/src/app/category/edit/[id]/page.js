
// // "use client";
// // import { use, useEffect, useState } from "react";
// // import { useRouter } from "next/navigation";
// // import { getProduct, updateProduct } from "@/lib/api";

// // export default function EditBlog({ params }) {
// //   const { id } = use(params);
// //   const router = useRouter();

// //   const [name, setName] = useState("");
// //   const [category, setCategory] = useState("");
// //   const [price, setPrice] = useState("");
// //   const [stock, setStock] = useState("");

// //   useEffect(() => {
// //     async function fetchData() {
// //       const product = await getProduct(id);
// //       if (product) {
// //         setName(product.Name || "");
// //         setCategory(product.Category || "");
// //         setPrice(product.Price || "");
// //         setStock(product.Stock || "");
// //       }
// //     }
// //     fetchData();
// //   }, [id]);

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       await updateProduct(id, {
// //         Name: name,
// //         Category: category,
// //         Price: Number(price),
// //         Stock: Number(stock),
// //       });

// //       alert("Product updated successfully!");
// //       router.push("/product");
// //     } catch (err) {
// //       console.error("Update error", err);
// //       alert("Failed to update Product.");
// //     }
// //   };

// //   return (
// //     <div className="max-w-2xl mx-auto bg-white shadow-lg p-8 rounded-xl mt-10">
// //       <h1 className="text-3xl font-bold mb-6">Edit Product</h1>
// //       <form onSubmit={handleSubmit} className="space-y-6">
// //         <div>
// //           <label className="block mb-1 font-medium text-gray-700">Name</label>
// //           <input
// //             type="text"
// //             value={name}
// //             onChange={(e) => setName(e.target.value)}
// //             className="w-full border px-4 py-2 rounded-md"
// //             required
// //           />
// //         </div>
// //         <div>
// //           <label className="block mb-1 font-medium text-gray-700">Category</label>
// //           <input
// //             type="text"
// //             value={category}
// //             onChange={(e) => setCategory(e.target.value)}
// //             className="w-full border px-4 py-2 rounded-md"
// //             required
// //           />
// //         </div>
// //         <div>
// //           <label className="block mb-1 font-medium text-gray-700">Price</label>
// //           <input
// //             type="number"
// //             value={price}
// //             onChange={(e) => setPrice(e.target.value)}
// //             className="w-full border px-4 py-2 rounded-md"
// //             required
// //           />
// //         </div>
// //         <div>
// //           <label className="block mb-1 font-medium text-gray-700">Stock</label>
// //           <input
// //             type="number"
// //             value={stock}
// //             onChange={(e) => setStock(e.target.value)}
// //             className="w-full border px-4 py-2 rounded-md"
// //             required
// //           />
// //         </div>

// //         <button
// //           type="submit"
// //           className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
// //         >
// //           Update Product
// //         </button>
// //       </form>
// //     </div>
// //   );
// // }

// "use client";
// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import axios from "axios";
// import { getProduct, updateProduct } from "@/lib/api";

// export default function EditProduct({ params }) {
//   const { id } = params;
//   const router = useRouter();

//   const [token, setToken] = useState(null);
//   const [name, setName] = useState("");
//   const [category, setCategory] = useState("");
//   const [price, setPrice] = useState("");
//   const [stock, setStock] = useState("");
//   const [existingImages, setExistingImages] = useState([]);
//   const [newImages, setNewImages] = useState([]);
//   const [newImagePreviews, setNewImagePreviews] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);

//   // Fetch token
//   useEffect(() => {
//     const storedToken = typeof window !== "undefined" ? localStorage.getItem("token") : null;
//     setToken(storedToken);
//     console.log("Fetched token:", storedToken);
//   }, []);

//   // Fetch product data
//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const product = await getProduct(id);
//         console.log("Fetched product:", product);
//         if (product) {
//           setName(product.name || "");
//           setCategory(product.Category?.name || product.category || "");
//           setPrice(product.price || "");
//           setStock(product.stock || "");
//           setExistingImages(product.image || []);
//         }
//       } catch (err) {
//         console.error("Fetch error:", err);
//         setError("Failed to load product data.");
//       }
//     }
//     if (id) fetchData();
//   }, [id]);

//   // Handle new image selection
//   const handleNewImageChange = (e) => {
//     const files = Array.from(e.target.files);
//     setNewImages(files);
//     const previews = files.map((file) => URL.createObjectURL(file));
//     setNewImagePreviews(previews);
//   };

//   // Delete existing image
//   const handleDeleteImage = async (imageId) => {
//     if (!token) {
//       setError("No authentication token found.");
//       return;
//     }
//     try {
//       await axios.delete(`http://localhost:1337/api/upload/files/${imageId}`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       setExistingImages(existingImages.filter((img) => img.id !== imageId));
//       alert("Image deleted successfully.");
//     } catch (err) {
//       console.error("Delete image error:", err);
//       setError("Failed to delete image.");
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!token) {
//       setError("No authentication token found. Please log in.");
//       router.push("/login");
//       return;
//     }

//     if (!name || !category || !price || !stock) {
//       setError("All fields are required.");
//       return;
//     }

//     setIsLoading(true);
//     setError(null);

//     try {
//       // Upload new images
//       let newImageIds = [];
//       if (newImages.length > 0) {
//         const formData = new FormData();
//         newImages.forEach((img) => formData.append("files", img));
//         console.log("Uploading new images:", [...formData.entries()]);

//         const uploadResponse = await axios.post(
//           "http://localhost:1337/api/upload",
//           formData,
//           {
//             headers: {
//               "Content-Type": "multipart/form-data",
//               Authorization: `Bearer ${token}`,
//             },
//           }
//         );
//         console.log("Upload response:", uploadResponse.data);
//         newImageIds = uploadResponse.data.map((file) => file.id);
//       }

//       // Combine existing and new image IDs
//       const allImageIds = [
//         ...existingImages.map((img) => img.id),
//         ...newImageIds,
//       ];

//       // Update product
//       await updateProduct(id, {
//         name,
//         category,
//         price: Number(price),
//         stock: Number(stock),
//         image: allImageIds,
//       });

//       alert("Product updated successfully!");
//       router.push("/product");
//     } catch (err) {
//       console.error("Update error:", err);
//       setError("Failed to update product: " + (err.response?.data?.error?.message || err.message));
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // Clean up preview URLs
//   useEffect(() => {
//     return () => {
//       newImagePreviews.forEach((preview) => URL.revokeObjectURL(preview));
//     };
//   }, [newImagePreviews]);

//   if (error && !isLoading) {
//     return (
//       <div className="max-w-2xl mx-auto p-8">
//         <h1 className="text-3xl font-bold mb-6">Error</h1>
//         <p className="text-red-600">{error}</p>
//         <button
//           onClick={() => router.push("/product")}
//           className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
//         >
//           Back to Products
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-2xl mx-auto bg-white shadow-lg p-8 rounded-xl mt-10">
//       <h1 className="text-3xl font-bold mb-6">Edit Product</h1>
//       <form onSubmit={handleSubmit} className="space-y-6">
//         <div>
//           <label className="block mb-1 font-medium text-gray-700">Name</label>
//           <input
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             className="w-full border px-4 py-2 rounded-md"
//             required
//             disabled={isLoading}
//           />
//         </div>
//         <div>
//           <label className="block mb-1 font-medium text-gray-700">Category</label>
//           <input
//             type="text"
//             value={category}
//             onChange={(e) => setCategory(e.target.value)}
//             className="w-full border px-4 py-2 rounded-md"
//             required
//             disabled={isLoading}
//           />
//         </div>
//         <div>
//           <label className="block mb-1 font-medium text-gray-700">Price</label>
//           <input
//             type="number"
//             value={price}
//             onChange={(e) => setPrice(e.target.value)}
//             className="w-full border px-4 py-2 rounded-md"
//             required
//             disabled={isLoading}
//           />
//         </div>
//         <div>
//           <label className="block mb-1 font-medium text-gray-700">Stock</label>
//           <input
//             type="number"
//             value={stock}
//             onChange={(e) => setStock(e.target.value)}
//             className="w-full border px-4 py-2 rounded-md"
//             required
//             disabled={isLoading}
//           />
//         </div>
//         <div>
//           <label className="block mb-1 font-medium text-gray-700">Existing Images</label>
//           {existingImages.length > 0 ? (
//             <div className="mt-4 flex flex-wrap gap-4">
//               {existingImages.map((img, index) => {
//                 const imageUrl =
//                   img?.formats?.medium?.url ||
//                   img?.formats?.small?.url ||
//                   img?.formats?.thumbnail?.url ||
//                   img?.url;
//                 return (
//                   <div key={index} className="relative">
//                     <img
//                       src={`http://localhost:1337${imageUrl}`}
//                       alt={img.name || "Product Image"}
//                       className="w-32 h-32 object-cover rounded-lg border"
//                     />
//                     <button
//                       type="button"
//                       onClick={() => handleDeleteImage(img.id)}
//                       className="absolute top-0 right-0 bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center"
//                     >
//                       &times;
//                     </button>
//                   </div>
//                 );
//               })}
//             </div>
//           ) : (
//             <p className="text-gray-500 italic">No existing images.</p>
//           )}
//         </div>
//         <div>
//           <label className="block mb-1 font-medium text-gray-700">Upload New Images</label>
//           <input
//             type="file"
//             multiple
//             accept="image/*"
//             onChange={handleNewImageChange}
//             className="w-full border px-4 py-2 rounded-md"
//             disabled={isLoading}
//           />
//           {newImagePreviews.length > 0 && (
//             <div className="mt-4 flex flex-wrap gap-4">
//               {newImagePreviews.map((preview, index) => (
//                 <img
//                   key={index}
//                   src={preview}
//                   alt={`New Preview ${index + 1}`}
//                   className="w-32 h-32 object-cover rounded-lg border"
//                 />
//               ))}
//             </div>
//           )}
//         </div>
//         <button
//           type="submit"
//           className={`w-full py-3 rounded-lg text-white ${
//             isLoading ? "bg-blue-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
//           }`}
//           disabled={isLoading}
//         >

//           {isLoading ? "Updating Product..." : "Update Product"}
//         </button>
//       </form>
//     </div>
//   );
// }

"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "@/component/Sidebar";
import Navbar from "@/component/Navbar";


const EditCategory = ({ params }) => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const router = useRouter();
  const { id } = params;

  useEffect(() => {
    console.log("params",params)
    console.log("documentId",id)

    const fetchCategory = async () => {
      try {
        const response = await fetch(`http://localhost:1337/api/categories/${id}`);
        if (!response.ok) throw new Error("Failed to fetch category");
        const result = await response.json();
        console.log("response ",response)
        setName(result.data.name);
        setCategory(result.data.category);
      } catch (error) {
        console.error("Error fetching category:", error);
      }
    };
    if (id) fetchCategory();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:1337/api/categories/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: { name, category } }),
      });
      if (!response.ok) throw new Error("Failed to update category");
      alert("Category updated successfully");
      router.push("/category");
    } catch (error) {
      console.error("Error updating category:", error);
      alert("Failed to update category");
    }
  };

  return (
    <div className="flex">
      <div className="w-[20%]">
        <Sidebar />
      </div>
      <div className="w-[80%]">
        <Navbar/>
        <div className="bg-blue-100">
          <div className="px-20 bg-white shadow-lg min-h-screen mx-10 rounded-md">
            <h2 className="font-serif text-3xl pt-10">Edit Category</h2>
            <form onSubmit={handleSubmit} className="mt-6">
              <div className="mb-4">
                <label className="block text-gray-700">Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="p-2 border border-gray-300 rounded-md w-full"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Category</label>
                <input
                  type="text"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="p-2 border border-gray-300 rounded-md w-full"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg"
              >
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditCategory;