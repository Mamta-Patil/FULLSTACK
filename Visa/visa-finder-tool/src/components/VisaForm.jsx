// 'use client';

// import { useState } from 'react';
// import visas from '../data/visas.json'; // Corrected path

// export default function VisaForm() {
//   const [country, setCountry] = useState('');
//   const [purpose, setPurpose] = useState('');
//   const [filteredVisas, setFilteredVisas] = useState([]);

//   const countries = [...new Set(visas.map((visa) => visa.country))];
//   const purposes = ['study', 'work', 'travel'];

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const results = visas.filter(
//       (visa) =>
//         (!country || visa.country === country) &&
//         (!purpose || visa.purpose === purpose)
//     );
//     setFilteredVisas(results);
//   };

//   return (
//     <div className="bg-white p-6 rounded-lg shadow-md mb-8">
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <label htmlFor="country" className="block text-sm font-medium text-gray-700">
//             Select Country
//           </label>
//           <select
//             id="country"
//             value={country}
//             onChange={(e) => setCountry(e.target.value)}
//             className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
//           >
//             <option value="">All Countries</option>
//             {countries.map((c) => (
//               <option key={c} value={c}>
//                 {c}
//               </option>
//             ))}
//           </select>
//         </div>
//         <div>
//           <label htmlFor="purpose" className="block text-sm font-medium text-gray-700">
//             Select Purpose
//           </label>
//           <select
//             id="purpose"
//             value={purpose}
//             onChange={(e) => setPurpose(e.target.value)}
//             className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
//           >
//             <option value="">All Purposes</option>
//             {purposes.map((p) => (
//               <option key={p} value={p}>
//                 {p.charAt(0).toUpperCase() + p.slice(1)}
//               </option>
//             ))}
//           </select>
//         </div>
//         <button
//           type="submit"
//           className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
//         >
//           Find Visas
//         </button>
//       </form>
//     </div>
//   );
// }

'use client';

import { useState } from 'react';
import visas from '../app/data/visas.json' // Correct for app/components/VisaForm.jsx

export default function VisaForm() {
  const [country, setCountry] = useState('');
  const [purpose, setPurpose] = useState('');
  const [filteredVisas, setFilteredVisas] = useState([]);

  const countries = [...new Set(visas.map((visa) => visa.country))];
  const purposes = ['study', 'work', 'travel'];

  const handleSubmit = (e) => {
    e.preventDefault();
    const results = visas.filter(
      (visa) =>
        (!country || visa.country === country) &&
        (!purpose || visa.purpose === purpose)
    );
    setFilteredVisas(results);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-8">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="country" className="block text-sm font-medium text-gray-700">
            Select Country
          </label>
          <select
            id="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
          >
            <option value="">All Countries</option>
            {countries.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="purpose" className="block text-sm font-medium text-gray-700">
            Select Purpose
          </label>
          <select
            id="purpose"
            value={purpose}
            onChange={(e) => setPurpose(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
          >
            <option value="">All Purposes</option>
            {purposes.map((p) => (
              <option key={p} value={p}>
                {p.charAt(0).toUpperCase() + p.slice(1)}
              </option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
        >
          Find Visas
        </button>
      </form>
    </div>
  );
}