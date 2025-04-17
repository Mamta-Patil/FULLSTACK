"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import { CiSearch } from "react-icons/ci";
import { deleteProduct, getproducts } from "@/lib/api";
import { AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import Link from "next/link";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [priceRange, setPriceRange] = useState("All Price");
  const [stockFilter, setStockFilter] = useState("All Stock");

  // Fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getproducts();
      console.log("products data : ", data);
      setProducts(data);
    };
    fetchProducts();
  }, []);

  // Fetch categories
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("http://localhost:1337/api/categories");
        const result = await response.json();
        setCategories(result.data || []);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

  // Handle delete product
  const handleDeleteAction = async (productId) => {
    try {
      console.log("productID:", productId);
      await deleteProduct(productId);
      setProducts(products.filter((product) => product.documentId !== productId));
      alert("Product deleted successfully.");
    } catch (error) {
      console.error("Error deleting product:", error);
      alert("An error occurred while deleting the product.");
    }
  };

  // Filter products based on search, category, price, and stock
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All Categories" ||
      product.category?.name === selectedCategory;
    const matchesPrice =
      priceRange === "All Price" ||
      (priceRange === "0-50" && product.price >= 0 && product.price <= 50) ||
      (priceRange === "51-100" && product.price > 50 && product.price <= 100) ||
      (priceRange === "100+" && product.price > 100);
    const matchesStock =
      stockFilter === "All Stock" ||
      (stockFilter === "10-20" && product.stock >= 10 && product.stock <= 20) ||
      (stockFilter === "20-50" && product.stock > 20 && product.stock <= 50) ||
      (stockFilter === "50-100" && product.stock > 50 && product.stock <= 100) ||
      (stockFilter === "100+" && product.stock > 100);

    return matchesSearch && matchesCategory && matchesPrice && matchesStock;
  });

  return (
    <div className="flex">
      <div className="w-[20%]">
        <Sidebar />
      </div>
      <div className="w-[80%]">
        <Navbar />
        <div className="bg-blue-100">
          <div className="px-20 bg-white shadow-lg h-screen mx-10 rounded-md">
            <div className="flex justify-between pt-10">
              <h2 className="font-serif text-3xl">Product Management</h2>
              <Link
                href="/product/create"
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg text-sm"
              >
                + Add Product
              </Link>
            </div>

            <div className="rounded-md border-1 border-[lightgrey] mt-6 flex justify-around py-2 text-[grey]">
              <div className="flex">
                <div className="flex border-1 border-md rounded-md border-[lightgrey] ps-2 text-xl">
                  <CiSearch className="mt-3 ms-2" />
                  <input
                    type="text"
                    placeholder="Search products..."
                    className="p-2 outline-none w-[520px]"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
              <select
                className="p-2 rounded-md border-1 border-[lightgrey]"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="All Categories">All Categories</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.name}>
                    {category.name}
                  </option>
                ))}
              </select>
              <select
                className="p-2 rounded-md border-1 border-[lightgrey] pe-6"
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
              >
                <option value="All Price">All Price</option>
                <option value="0-50">0 - 50</option>
                <option value="51-100">51 - 100</option>
                <option value="100+">100+</option>
              </select>
              <select
                className="p-2 rounded-md border-1 border-[lightgrey]"
                value={stockFilter}
                onChange={(e) => setStockFilter(e.target.value)}
              >
                <option value="All Stock">All Stock</option>
                <option value="10-20">10 - 20</option>
                <option value="20-50">20 - 50</option>
                <option value="50-100">50 - 100</option>
                <option value="100+">100+</option>
              </select>
              <button className="p-2 rounded-md border-1 border-[lightgrey]">
                Export ({filteredProducts.length})
              </button>
              
            </div>

            <table className="min-w-full text-left border border-gray-300 mt-10">
              <thead className="bg-[#ebeaea] text-xl">
                <tr className="p-3">
                  <th className="p-3">
                    <input type="checkbox" className="h-4 w-4 border border-black" />
                  </th>
                  <th className="p-3">Image</th>
                  <th className="p-3">ID</th>
                  <th className="p-3">Name</th>
                  <th className="p-3">Price</th>
                  <th className="p-3">Stock</th>
                  <th className="p-3">Category</th>
                  <th className="p-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredProducts.map((item, index) => (
                  <tr key={index} className="border-t border-gray-200">
                    <td className="p-3">
                      <input type="checkbox" className="h-4 w-4" />
                    </td>
                    <td className="p-3">
                      {item.image && Array.isArray(item.image) && item.image.length > 0 ? (
                        <div className="mt-4 flex flex-wrap gap-4">
                          {item.image.map((img, imgIndex) => {
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
                                className="w-28 h-14 object-cover rounded-full border"
                              />
                            );
                          })}
                        </div>
                      ) : (
                        <div className="mt-2 text-gray-500 italic">No images available</div>
                      )}
                    </td>
                    <td className="p-3">{item.id}</td>
                    <td className="p-3">{item.name}</td>
                    <td className="p-3">{item.price}</td>
                    <td className="p-3">{item.stock}</td>
                    <td className="p-3">{item.category?.name}</td>
                    <td className="p-3 flex text-2xl text-blue-700">
                      <Link
                        href={`/product/edit/${item.documentId}`}
                        className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg text-sm"
                      >
                        <AiFillEdit />
                      </Link>
                      <button
                        type="button"
                        onClick={() => handleDeleteAction(item.documentId)}
                        className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm"
                      >
                        <MdDelete />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
