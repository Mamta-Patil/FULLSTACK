// 'use client';
// import { useState } from 'react';
// import axios from 'axios';

// const locales = [
//   { code: 'en', label: 'English' },
//   { code: 'hi-IN', label: 'Hindi' },
//   { code: 'gu-IN', label: 'Gujarati' },
//   { code: 'mr-IN', label: 'Marathi' },
// ];

// export default function CreateBlogPage() {
//   const [names, setNames] = useState({
//     'en': '',
//     'hi-IN': '',
//     'gu-IN': '',
//     'mr-IN': ''
//   });
//   const [image, setImage] = useState([]);

//   const handleAddSubmit = async (e) => {
//     e.preventDefault();

//     if (!names['en'].trim() || image.length === 0) {
//       alert('Please enter at least English name and select images.');
//       return;
//     }

//     try {
//       const formData = new FormData();
//       image.forEach((img) => formData.append('files', img));

//       const uploadResponse = await axios.post(
//         'http://localhost:1337/api/upload',
//         formData,
//         {
//           headers: { 'Content-Type': 'multipart/form-data' },
//         }
//       );

//       const uploadedFiles = uploadResponse.data;
//       const imageIds = uploadedFiles.map((file) => file.id);

//       // Create blog in English first
//       const enResponse = await axios.post(
//         `http://localhost:1337/api/products`,
//         {
//           data: {
//             name: names['en'],
//             image: imageIds,
//           },
//         }
//       );

//       const mainId = enResponse.data.data.id;

//       // Create localized versions
//       for (const locale of ['hi-IN', 'gu-IN', 'mr-IN']) {
//         if (names[locale].trim()) {
//           await axios.post(`http://localhost:1337/api/products?populate=*&locale=${locale}`, {
//             data: {
//               name: names[locale],
//               image: imageIds,
//               locale,
//               localizations: [mainId],
//             },
//           });
//         }
//       }

//       alert('Blog created successfully!');
//     } catch (error) {
//       console.error(error);
//       alert('Error creating blog');
//     }
//   };

//   return (
//     <div className="max-w-2xl mx-auto bg-white rounded-xl p-8 shadow">
//       <h1 className="text-3xl font-bold mb-6 text-center">Create Multilingual Blog</h1>
//       <form onSubmit={handleAddSubmit} encType="multipart/form-data" className="space-y-6">
//         {locales.map((loc) => (
//           <div key={loc.code}>
//             <label className="block text-sm font-medium text-gray-700 mb-1">{loc.label} Name</label>
//             <input
//               type="text"
//               value={names[loc.code]}
//               onChange={(e) =>
//                 setNames((prev) => ({ ...prev, [loc.code]: e.target.value }))
//               }
//               className="w-full px-4 py-2 border rounded-lg"
//               placeholder={`Enter blog name in ${loc.label}`}
//             />
//           </div>
//         ))}

//         <div>
//           <label className="block mb-1 text-sm font-medium">Upload Images</label>
//           <input
//             type="file"
//             multiple
//             accept="image/*"
//             onChange={(e) => setImage(Array.from(e.target.files))}
//             className="w-full px-4 py-2 border rounded-lg"
//             required
//           />
//         </div>

//         <button
//           type="submit"
//           className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg"
//         >
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// }
