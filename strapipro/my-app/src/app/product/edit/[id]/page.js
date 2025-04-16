
"use client";
import { use, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getProduct, updateProduct } from "@/lib/api";

export default function EditBlog({ params }) {
  const { id } = use(params);
  const router = useRouter();

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");

  useEffect(() => {
    async function fetchData() {
      const product = await getProduct(id);
      if (product) {
        setName(product.Name || "");
        setCategory(product.Category || "");
        setPrice(product.Price || "");
        setStock(product.Stock || "");
      }
    }
    fetchData();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateProduct(id, {
        Name: name,
        Category: category,
        Price: Number(price),
        Stock: Number(stock),
      });

      alert("Product updated successfully!");
      router.push("/product");
    } catch (err) {
      console.error("Update error", err);
      alert("Failed to update Product.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-lg p-8 rounded-xl mt-10">
      <h1 className="text-3xl font-bold mb-6">Edit Product</h1>
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

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
        >
          Update Product
        </button>
      </form>
    </div>
  );
}

