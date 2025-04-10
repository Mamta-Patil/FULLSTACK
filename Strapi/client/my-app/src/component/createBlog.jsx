'use client';
import { useState } from 'react';
import axios from 'axios';

export default function CreateBlogPage() {
  const [locale, setLocale] = useState('en');
  const locales = [
    { code: 'en', name: 'English' },
    { code: 'gu-IN', name: 'Gujarati' },
    { code: 'hi-IN', name: 'Hindi' },
    { code: 'mr-IN', name: 'Marathi' },
  ];
  const [addName, setName] = useState('');
  const [image, setImage] = useState([]);


  const handleAddSubmit = async (e) => {
    e.preventDefault();
  
    if (!addName.trim() || image.length === 0) {
      alert('Please enter a product name and select at least one image.');
      return;
    }
  
    try {
      const formData = new FormData();
  
      image.forEach((img) => {
        formData.append('files', img);
      });
  
      const uploadResponse = await axios.post(
        'http://localhost:1337/api/upload',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
  
      const uploadedFiles = uploadResponse.data;
      const imageIds = uploadedFiles.map((file) => file.id);
  
      const productResponse = await axios.post(
        `http://localhost:1337/api/products?locale=${locale}`, // this line updated
        {
          data: {
            name: addName,
            image: imageIds,
          },
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
  
      console.log('Product created successfully:', productResponse.data);
      alert('Product created successfully!');
    } catch (error) {
      alert('An error occurred while creating the product. Please try again.');
    }
  };
  

  // const handleAddSubmit = async (e) => {
  //   e.preventDefault();

  //   if (!addName.trim() || image.length === 0) {
  //     alert('Please enter a product name and select at least one image.');
  //     return;
  //   }

  //   try {
  //     const formData = new FormData();

  //     // Append selected images to FormData
  //     image.forEach((img) => {
  //       formData.append('files', img);
  //     });

  //     // Upload images
  //     const uploadResponse = await axios.post(
  //       'http://localhost:1337/api/upload',
  //       formData,
  //       {
  //         headers: {
  //           'Content-Type': 'multipart/form-data',
  //         },
  //       }
  //     );

  //     const uploadedFiles = uploadResponse.data;
  //     const imageIds = uploadedFiles.map((file) => file.id);

  //     // Create product
  //     const productResponse = await axios.post(
  //       'http://localhost:1337/api/products',
  //       {
  //         data: {
  //           name: addName,
  //           image: imageIds,
  //         },
  //       },
  //       {
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //       }
  //     );

  //     console.log('Product created successfully:', productResponse.data);
  //     alert('Product created successfully!');
  //   }
  //    catch (error) {
  //     alert('An error occurred while creating the product. Please try again.');
  //   }
  // };

  return (
<div className="flex justify-center items-center px-4">
  <div className="w-full max-w-2xl bg-white rounded-2xl p-8">
  <label htmlFor="locale" className="text-white mr-2">Select Language:</label>
        <select
          onChange={(e) => setLocale(e.target.value)}
          className="p-2 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
        >
          {locales.map((locale) => (
            <option key={locale.code} value={locale.code}>
              {locale.name}
            </option>
          ))}
        </select>

    <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
      Add Product
    </h2>
    <p className="text-sm mt-2 text-gray-600">Selected language : {locale}</p>

    <form
      onSubmit={handleAddSubmit}
      className="space-y-6"
      encType="multipart/form-data"
    >

      {/* Product Name */}
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Product Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={addName}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter product name"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      {/* Image Upload */}
      <div>
        <label
          htmlFor="image"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Upload Images
        </label>
        <input
          type="file"
          id="addImage"
          name="image"
          accept="image/*"
          multiple
          onChange={(e) => setImage(Array.from(e.target.files))}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          required
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg py-3 px-6 rounded-lg transition duration-300"
      >
        Submit
      </button>

    </form>

  </div>
</div>
  );
}
