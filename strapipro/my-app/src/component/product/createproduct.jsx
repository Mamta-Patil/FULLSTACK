"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function CreateProduct() {
  const router = useRouter();
  const [token, setToken] = useState(null);

  const [name, setName] = useState("");
  const [categoryList, setCategoryList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [image, setImage] = useState([]); // File objects
  const [imagePreviews, setImagePreviews] = useState([]); // Preview URLs

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch token and categories
  useEffect(() => {
    const storedToken =
      typeof window !== "undefined" ? localStorage.getItem("token") : null;
    setToken(storedToken);
    console.log("Fetched token:", storedToken);

    const fetchCategories = async () => {
      try {
        const response = await axios.get("http://localhost:1337/api/categories");
        setCategoryList(response.data.data);
        console.log("Fetched categories:", response.data.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImage(files);
    const previews = files.map((file) => URL.createObjectURL(file));
    setImagePreviews(previews);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!token) {
      alert("No authentication token found. Please log in.");
      router.push("/login");
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      // Validate token
      await axios.get("http://localhost:1337/api/products", {
        headers: { Authorization: `Bearer ${token}` },
      });

      // Upload images
      const formData = new FormData();
      image.forEach((img) => formData.append("files", img));

      const uploadResponse = await axios.post(
        "http://localhost:1337/api/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const imageIds = uploadResponse.data.map((file) => file.id);

      // Create product
      const productResponse = await axios.post(
        "http://localhost:1337/api/products",
        {
          data: {
            name,
            category: selectedCategory,
            price,
            stock,
            image: imageIds,
          },
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Product created successfully!");
      router.push("/product");
    } catch (error) {
      console.error("Error creating product:", error);
      const errorMessage = error.response?.data?.error?.message || error.message;
      if (error.response?.status === 500) {
        setError(`Server error while uploading files: ${errorMessage}`);
      } else {
        setError(`Failed to create product: ${errorMessage}`);
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    return () => {
      imagePreviews.forEach((preview) => URL.revokeObjectURL(preview));
    };
  }, [imagePreviews]);

  if (error && !isLoading) {
    return (
      <div className="max-w-2xl mx-auto p-8">
        <h1 className="text-3xl font-bold mb-6">Error</h1>
        <p className="text-red-600">{error}</p>
        <button
          onClick={() => router.push("/product")}
          className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
        >
          Back to Products
        </button>
      </div>
    );
  }

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
            disabled={isLoading}
          />
        </div>

        <div>
          <label className="block mb-1 font-medium text-gray-700">Category</label>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full border px-4 py-2 rounded-md"
            required
            disabled={isLoading}
          >
            <option value="">Select a category</option>
            {categoryList.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat?.name || "Unnamed Category"}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block mb-1 font-medium text-gray-700">Price</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full border px-4 py-2 rounded-md"
            required
            disabled={isLoading}
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
            disabled={isLoading}
          />
        </div>

        <div>
          <label className="block mb-1 font-medium text-gray-700">
            Upload Images
          </label>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageChange}
            className="w-full border px-4 py-2 rounded-md"
            required
            disabled={isLoading}
          />
          {imagePreviews.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-4">
              {imagePreviews.map((preview, index) => (
                <img
                  key={index}
                  src={preview}
                  alt={`Preview ${index + 1}`}
                  className="w-32 h-32 object-cover rounded-lg border"
                />
              ))}
            </div>
          )}
        </div>

        <button
          type="submit"
          className={`w-full py-3 rounded-lg text-white ${
            isLoading
              ? "bg-green-400 cursor-not-allowed"
              : "bg-green-600 hover:bg-green-700"
          }`}
          disabled={isLoading}
        >
          {isLoading ? "Creating Product..." : "Create Product"}
        </button>
      </form>
    </div>
  );
}
