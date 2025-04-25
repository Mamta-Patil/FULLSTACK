// 'use client';

// import { useState, useEffect } from 'react';
// // import visas from '../app/data/visas.json';
// import visas from '../data/visas.json'; // Corrected path
// export default function VisaResults() {
//   const [filteredVisas, setFilteredVisas] = useState(visas);

//   useEffect(() => {
//     setFilteredVisas(visas); // Initial load with all visas
//   }, []);

//   return (
//     <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//       {filteredVisas.length === 0 ? (
//         <p className="text-gray-600 text-center col-span-full">
//           No visas found. Try adjusting your filters.
//         </p>
//       ) : (
//         filteredVisas.map((visa) => (
//           <div
//             key={visa.id}
//             className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-200"
//           >
//             <h2 className="text-xl font-semibold text-primary">{visa.name}</h2>
//             <p className="text-gray-600 mt-2"><strong>Country:</strong> {visa.country}</p>
//             <p className="text-gray-600"><strong>Purpose:</strong> {visa.purpose.charAt(0).toUpperCase() + visa.purpose.slice(1)}</p>
//             <p className="text-gray-600"><strong>Description:</strong> {visa.description}</p>
//             <p className="text-gray-600"><strong>Duration:</strong> {visa.duration}</p>
//             <p className="text-gray-600"><strong>Eligibility:</strong> {visa.eligibility}</p>
//           </div>
//         ))
//       )}
//     </div>
//   );
// }


'use client';

import { useState, useEffect } from 'react';
import visas from '../app/data/visas.json'; // Correct for app/components/VisaForm.jsx

export default function VisaResults() {
  const [filteredVisas, setFilteredVisas] = useState(visas);

  useEffect(() => {
    setFilteredVisas(visas); // Initial load with all visas
  }, []);

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {filteredVisas.length === 0 ? (
        <p className="text-gray-600 text-center col-span-full">
          No visas found. Try adjusting your filters.
        </p>
      ) : (
        filteredVisas.map((visa) => (
          <div
            key={visa.id}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-200"
          >
            <h2 className="text-xl font-semibold text-primary">{visa.name}</h2>
            <p className="text-gray-600 mt-2"><strong>Country:</strong> {visa.country}</p>
            <p className="text-gray-600"><strong>Purpose:</strong> {visa.purpose.charAt(0).toUpperCase() + visa.purpose.slice(1)}</p>
            <p className="text-gray-600"><strong>Description:</strong> {visa.description}</p>
            <p className="text-gray-600"><strong>Duration:</strong> {visa.duration}</p>
            <p className="text-gray-600"><strong>Eligibility:</strong> {visa.eligibility}</p>
          </div>
        ))
      )}
    </div>
  );
}