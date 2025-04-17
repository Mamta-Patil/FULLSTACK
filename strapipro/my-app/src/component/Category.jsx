"use client";
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import axios from "axios";
import Link from "next/link";
import { AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";

const Category = () => {
  const [categories, setCategories] = useState([]);

  const handleDeleteAction = async (id) => {
    if (!confirm("Are you sure you want to delete this category?")) {
      return;
    }
    try {
      const response = await axios.delete(`http://localhost:1337/api/categories/${id}`);
      if (response.status === 200) {
        setCategories(categories.filter((category) => category.id !== id));
        alert("Category deleted successfully.");
      } else {
        throw new Error("Failed to delete category");
      }
    } catch (error) {
      console.error("Error deleting category:", error);
      alert("Failed to delete category. Please try again.");
    }
  };
  useEffect(() => {
    const fetchCombinedData = async () => {
      try {
        const response = await axios.get("http://localhost:1337/api/categories");
        setCategories(response.data.data);
        console.log("category data ", response)
      } catch (error) {
        console.error("Error fetching categories data:", error);
      }
    };
    fetchCombinedData();
  }, []);

  return (
    <div>
      <div className="flex">
        <div className="w-[20%]">
          <Sidebar />
        </div>
        <div className="w-[80%]">
          <Navbar />
          <Link
                href="/category/create"
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg text-sm m-auto absolute top-32 right-4"
              >
                + Add Product
              </Link>
          
          <div className="flex justify-around mt-14">
          <table className="min-w-full text-left border border-gray-300 mt-10">
              <thead className="bg-[#ebeaea] text-xl">
                <tr className="p-3">
                  <th className="p-3">
                    <input type="checkbox" className="h-4 w-4 border border-black" />
                  </th>
                  <th className="p-3">ID</th>
                  <th className="p-3">Name</th>
                  <th className="p-3">Category</th>
                  <th className="p-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {categories.map((item, index) => (
                  <tr key={index} className="border-t border-gray-200">
                    <td className="p-3">
                      <input type="checkbox" className="h-4 w-4" />
                    </td>
                    <td className="p-3">{item.id}</td>
                    <td className="p-3">{item.name}</td>
                    <td className="p-3">{item.category}</td>
                    <td className="p-3 flex text-2xl text-blue-700">
                      <Link
                        href={`/category/edit/${item.documentId}`}
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

export default Category;
