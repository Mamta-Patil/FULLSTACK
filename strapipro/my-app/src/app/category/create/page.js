
// "use client";
// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import axios from "axios";
// import Navbar from "@/component/Navbar";
// import Sidebar from "@/component/Sidebar";

// export default function CreateCategory() {
//   const router = useRouter();

//   const [token, setToken] = useState(null);
//   const [name, setName] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);

//   // Fetch token
//   useEffect(() => {
//     const storedToken = typeof window !== "undefined" ? localStorage.getItem("token") : null;
//     setToken(storedToken);
//     console.log("Fetched token:", storedToken);
//   }, []);

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!token) {
//       setError("No authentication token found. Please log in.");
//       router.push("/login");
//       return;
//     }

//     if (!name) {
//       setError("Category name is required.");
//       return;
//     }

//     setIsLoading(true);
//     setError(null);

//     try {
//       const response = await axios.post(
//         "http://localhost:1337/api/categories",
//         {
//           data: {
//             name,
//           },
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             "Content-Type": "application/json",
//           },
//         }
//       );
//       console.log("Category created:", response.data);
//       alert("Category created successfully!");
//       router.push("/category");
//     } catch (err) {
//       console.error("Create category error:", err);
//       setError("Failed to create category: " + (err.response?.data?.error?.message || err.message));
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="flex">
//       <div className="w-[20%]">
//         <Sidebar />
//       </div>
//       <div className="w-[80%]">
//         <Navbar />
//         <div className="max-w-2xl mx-auto bg-white shadow-lg p-8 rounded-xl mt-10">
//           <h1 className="text-3xl font-bold mb-6">Create Category</h1>
//           {error && (
//             <p className="text-red-600 mb-4">{error}</p>
//           )}
//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div>
//               <label className="block mb-1 font-medium text-gray-700">Category Name</label>
//               <input
//                 type="text"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 className="w-full border px-4 py-2 rounded-md"
//                 required
//                 disabled={isLoading}
//                 placeholder="Enter category name"
//               />
//             </div>
//             <button
//               type="submit"
//               className={`w-full py-3 rounded-lg text-white ${
//                 isLoading ? "bg-blue-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
//               }`}
//               disabled={isLoading}
//             >
//               {isLoading ? "Creating Category..." : "Create Category"}
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

    "use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Navbar from "@/component/Navbar";
import Sidebar from "@/component/Sidebar";

export default function CreateCategory() {
  const router = useRouter();

  const [token, setToken] = useState(null);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch token
  useEffect(() => {
    const storedToken = typeof window !== "undefined" ? localStorage.getItem("token") : null;
    setToken(storedToken);
    console.log("Fetched token:", storedToken);
  }, []);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!token) {
      setError("No authentication token found. Please log in.");
      router.push("/login");
      return;
    }

    if (!name || !category) {
      setError("Both name and category are required.");
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        "http://localhost:1337/api/categories",
        {
          data: {
            name,
            category,
          },
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Category created:", response.data);
      alert("Category created successfully!");
      router.push("/category");
    } catch (err) {
      console.error("Create category error:", err);
      setError("Failed to create category: " + (err.response?.data?.error?.message || err.message));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex">
      <div className="w-[20%]">
        <Sidebar />
      </div>
      <div className="w-[80%]">
        <Navbar />
        <div className="max-w-2xl mx-auto bg-white shadow-lg p-8 rounded-xl mt-10">
          <h1 className="text-3xl font-bold mb-6">Create Category</h1>
          {error && (
            <p className="text-red-600 mb-4">{error}</p>
          )}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block mb-1 font-medium text-gray-700">Category Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border px-4 py-2 rounded-md"
                required
                disabled={isLoading}
                placeholder="Enter category name"
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
                disabled={isLoading}
                placeholder="Enter category type"
              />
            </div>
            <button
              type="submit"
              className={`w-full py-3 rounded-lg text-white ${
                isLoading ? "bg-blue-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
              }`}
              disabled={isLoading}
            >
              {isLoading ? "Creating Category..." : "Create Category"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}