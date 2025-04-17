"use client";
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [totalStock, setTotalStock] = useState(0);

  // Fetch combined data
  useEffect(() => {
    const fetchCombinedData = async () => {
      try {
        const response = await fetch("http://localhost:1337/api/combined-data");
        const result = await response.json();
        setProducts(result.products || []);
        setCategories(result.categories || []);

        const stockSum = (result.products || [])
          .filter((product) => product.stock !== null)
          .reduce((sum, product) => sum + product.stock, 0);
        setTotalStock(stockSum);
      } catch (error) {
        console.error("Error fetching combined data:", error);
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
          <div className="flex justify-around mt-14">
            <div className="p-28 bg-white rounded-md text-black shadow-lg">
              <h2 className="text-2xl font-serif">Products</h2>
              <p className="text-3xl font-bold mt-4 text-center">{products.length}</p>
            </div>
            <div className="p-28 bg-white rounded-md text-black shadow-lg">
              <h2 className="text-2xl font-serif">Stock</h2>
              <p className="text-3xl font-bold mt-4 text-center">{totalStock}</p>
            </div>
            <div className="p-28 bg-white rounded-md text-black shadow-lg">
              <h2 className="text-2xl font-serif">Categories</h2>
              <p className="text-3xl font-bold mt-4 text-center">{categories.length}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;