"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { createProduct } from "@/lib/api";

export default function CreateProduct() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createProduct({
        Name: name,
        Category: category,
        Price: Number(price),
        Stock: Number(stock),
      });

      alert("Product created successfully!");
      router.push("/product"); // Navigate to product list
    } catch (err) {
      console.error("Create error", err);
      alert("Failed to create Product.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-lg p-8 rounded-xl mt-10">
      <h1 className="text-3xl font-bold mb-6">Create Product</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block mb-1 font-medium text-gray-700">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border px-4 py-2 rounded-md"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium text-gray-700">Category</label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full border px-4 py-2 rounded-md"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium text-gray-700">Price</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full border px-4 py-2 rounded-md"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium text-gray-700">Stock</label>
          <input
            type="number"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            className="w-full border px-4 py-2 rounded-md"
            required
          />
        </div>
        {/* <div>
          <label className="block mb-1 font-medium text-gray-700">Document ID</label>
          <input
            type="text"
            value={documentId}
            onChange={(e) => setDocumentId(e.target.value)}
            className="w-full border px-4 py-2 rounded-md"
          />
        </div> */}

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700"
        >
          Create Product
        </button>
      </form>
    </div>
  );
}
