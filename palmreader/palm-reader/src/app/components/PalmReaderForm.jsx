// 'use client';

// import { useState } from 'react';

// export default function PalmReaderForm({ onSubmit }) {
//   const [image, setImage] = useState(null);
//   const [prompt, setPrompt] = useState('');
//   const [preview, setPreview] = useState('/placeholder.jpg');

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (file && ['image/jpeg', 'image/png', 'image/jpg'].includes(file.type)) {
//       setImage(file);
//       setPreview(URL.createObjectURL(file));
//     } else {
//       alert('Please select a valid image file (JPEG, PNG, JPG)');
//       e.target.value = null;
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!image) {
//       alert('Please upload a palm image');
//       return;
//     }
//     const formData = new FormData();
//     formData.append('image', image);
//     formData.append('prompt', prompt);
//     onSubmit(formData);
//   };

//   return (
//     <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
//       <h2 className="text-2xl font-bold text-gray-800 mb-4">Palm Reader</h2>
//       <div className="mb-4">
//         <label className="block text-gray-700 mb-2">Upload Palm Image</label>
//         <input
//           type="file"
//           accept="image/jpeg,image/png,image/jpg"
//           onChange={handleFileChange}
//           className="w-full p-2 border rounded"
//         />
//       </div>
//       <div className="mb-4">
//         <img src={preview} alt="Palm Preview" className="w-full h-48 object-cover rounded" />
//       </div>
//       <div className="mb-4">
//         <label className="block text-gray-700 mb-2">Optional Prompt</label>
//         <textarea
//           value={prompt}
//           onChange={(e) => setPrompt(e.target.value)}
//           placeholder="e.g., Focus on love and career lines"
//           className="w-full p-2 border rounded"
//         />
//       </div>
//       <button
//         type="submit"
//         className="w-full bg-indigo-600 text-white p-2 rounded hover:bg-indigo-700"
//       >
//         Analyze Palm
//       </button>
//     </form>
//   );
// }



// 'use client';

// import { useState } from 'react';

// export default function PalmReaderForm({ onSubmit }) {
//   const [image, setImage] = useState(null);
//   const [prompt, setPrompt] = useState('');
//   const [preview, setPreview] = useState(null); // Changed to null for fallback

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (file && ['image/jpeg', 'image/png', 'image/jpg'].includes(file.type)) {
//       setImage(file);
//       setPreview(URL.createObjectURL(file));
//     } else {
//       alert('Please select a valid image file (JPEG, PNG, JPG)');
//       e.target.value = null;
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!image) {
//       alert('Please upload a palm image');
//       return;
//     }
//     const formData = new FormData();
//     formData.append('image', image);
//     formData.append('prompt', prompt);
//     onSubmit(formData);
//   };

//   return (
//     <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
//       <h2 className="text-2xl font-bold text-gray-800 mb-4">Palm Reader</h2>
//       <div className="mb-4">
//         <label className="block text-gray-700 mb-2">Upload Palm Image</label>
//         <input
//           type="file"
//           accept="image/jpeg,image/png,image/jpg"
//           onChange={handleFileChange}
//           className="w-full p-2 border rounded"
//         />
//       </div>
//       <div className="mb-4">
//         {preview ? (
//           <img src={preview} alt="Palm Preview" className="w-full h-48 object-cover rounded" />
//         ) : (
//           <div className="w-full h-48 bg-gray-200 flex items-center justify-center rounded">
//             <span className="text-gray-500">No image selected</span>
//           </div>
//         )}
//       </div>
//       <div className="mb-4">
//         <label className="block text-gray-700 mb-2">Optional Prompt</label>
//         <textarea
//           value={prompt}
//           onChange={(e) => setPrompt(e.target.value)}
//           placeholder="e.g., Focus on love and career lines"
//           className="w-full p-2 border rounded"
//         />
//       </div>
//       <button
//         type="submit"
//         className="w-full bg-indigo-600 text-white p-2 rounded hover:bg-indigo-700"
//       >
//         Analyze Palm
//       </button>
//     </form>
//   );
// }


'use client';

import { useState } from 'react';

export default function PalmReaderForm({ onSubmit }) {
  const [image, setImage] = useState(null);
  const [prompt, setPrompt] = useState('');
  const [preview, setPreview] = useState(null);

  const promptSuggestions = [
    'Describe the heart line’s length and curvature.',
    'Analyze the head line’s depth and shape.',
    'Provide details on the life line’s curve and intersections.',
    'Describe all visible palm lines and their characteristics.',
  ];

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!['image/jpeg', 'image/png', 'image/jpg'].includes(file.type)) {
      alert('Please select a valid image file (JPEG, PNG, JPG)');
      e.target.value = null;
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      alert('Image file is too large. Please upload an image under 5MB.');
      e.target.value = null;
      return;
    }

    const img = new Image();
    img.src = URL.createObjectURL(file);
    img.onload = () => {
      if (img.width < 800 || img.height < 800) {
        alert('Image resolution is too low. Please upload an image with at least 800x800 pixels.');
        e.target.value = null;
        return;
      }
      setImage(file);
      setPreview(URL.createObjectURL(file));
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!image) {
      alert('Please upload a palm image');
      return;
    }
    const formData = new FormData();
    formData.append('image', image);
    formData.append('prompt', prompt);
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Palm Reader</h2>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Upload Palm Image</label>
        <input
          type="file"
          accept="image/jpeg,image/png,image/jpg"
          onChange={handleFileChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        {preview ? (
          <img src={preview} alt="Palm Preview" className="w-full h-48 object-cover rounded" />
        ) : (
          <div className="w-full h-48 bg-gray-200 flex items-center justify-center rounded">
            <span className="text-gray-500">No image selected</span>
          </div>
        )}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Optional Prompt</label>
        <select
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="w-full p-2 border rounded mb-2"
        >
          <option value="">Select a prompt or type your own</option>
          {promptSuggestions.map((suggestion, index) => (
            <option key={index} value={suggestion}>{suggestion}</option>
          ))}
        </select>
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="e.g., Describe the heart line's length and curvature"
          className="w-full p-2 border rounded"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-indigo-600 text-white p-2 rounded hover:bg-indigo-700"
      >
        Analyze Palm
      </button>
    </form>
  );
}