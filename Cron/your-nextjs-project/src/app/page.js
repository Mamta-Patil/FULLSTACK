// 'use client';

// import { useState } from 'react';

// export default function Home()
// {
//   const [data, setData] = useState([]);
//   const [message, setMessage] = useState('');
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);

//   const fetchData = async () => 
//   {
//     setLoading(true);
//     setError('');
//     setMessage('');
//     try 
//     {
//       const response = await fetch('/api/cron/fetch-data?secret=fklkyguhknm');
//       const result = await response.json();

//       if (!response.ok) 
//       {
//         throw new Error(result.error || 'Failed to fetch data');
//       }

//       setMessage(result.message);
//       setData(result.data || []);
//     } 
//     catch (err) 
//     {
//       setError(err.message);
//     } 
//     finally 
//     {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
//       <h1 className="text-3xl font-bold mb-6 text-gray-800">Cron Job Data Fetcher</h1>

//       <button onClick={fetchData} disabled={loading} className={`px-6 py-2 rounded-lg font-semibold text-white transition-colors ${ loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'}`}>
//         {loading ? 'Fetching...' : 'Fetch Data'}
//       </button>

//       {message && ( <p className="mt-4 text-green-600 font-medium">{message}</p>)}

//       {error && ( <p className="mt-4 text-red-600 font-medium">{error}</p>)}

//       {data.length > 0 
//       && 
//       (
//         <div className="mt-6 w-full max-w-2xl">

//           <h2 className="text-xl font-semibold mb-4 text-gray-700">Fetched Data</h2>
          
//           <div className="overflow-x-auto">
//             <table className="w-full bg-white shadow-md rounded-lg">
//               <thead>
//                 <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
//                   <th className="py-3 px-6 text-left">ID</th>
//                   <th className="py-3 px-6 text-left">Title</th>
//                   <th className="py-3 px-6 text-left">Body</th>
//                 </tr>
//               </thead>
//               <tbody className="text-gray-600 text-sm font-light">
//                 {data.map((post) => (
//                   <tr key={post.id} className="border-b border-gray-200 hover:bg-gray-100">
//                     <td className="py-3 px-6 text-left">{post.id}</td>
//                     <td className="py-3 px-6 text-left">{post.title}</td>
//                     <td className="py-3 px-6 text-left">{post.body}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

'use client';

import { useState } from 'react';

export default function Home() {
  const [data, setData] = useState([]);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    setError('');
    setMessage('');
    try {
      const response = await fetch('/api/cron/fetch-data?secret=fklkyguhknm');
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to fetch data');
      }

      setMessage(result.message);
      setData(result.data || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-8 tracking-tight sm:text-5xl">
        Cron Job Data Fetcher
      </h1>

      <button
        onClick={fetchData}
        disabled={loading}
        className={`relative px-8 py-3 rounded-full font-semibold text-white transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
          loading
            ? 'bg-gray-400 cursor-not-allowed'
            : 'bg-blue-600 hover:bg-blue-700 active:bg-blue-800'
        }`}
      >

        {loading ? (
          <span className="flex items-center">
            <svg
              className="animate-spin h-5 w-5 mr-2 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              ></path>
            </svg>
            Fetching...
          </span>
        ) : (
          'Fetch Data'
        )}
      </button>

      {message && (
        <p className="mt-6 text-lg text-green-600 font-medium bg-green-50 px-4 py-2 rounded-lg animate-fade-in">
          {message}
        </p>
      )}

      {error && (
        <p className="mt-6 text-lg text-red-600 font-medium bg-red-50 px-4 py-2 rounded-lg animate-fade-in">
          {error}
        </p>
      )}

      {data.length > 0 && (
        <div className="mt-8 w-full max-w-4xl bg-white rounded-xl shadow-lg p-6 animate-fade-in">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Fetched Data
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-separate border-spacing-0">
              <thead>
                <tr className="bg-indigo-600 text-white text-sm uppercase font-medium">
                  <th className="py-4 px-6 rounded-tl-lg">ID</th>
                  <th className="py-4 px-6">Title</th>
                  <th className="py-4 px-6 rounded-tr-lg">Body</th>
                </tr>
              </thead>
              <tbody className="text-gray-700 text-sm">
                {data.map((post) => (
                  <tr
                    key={post.id}
                    className="border-b border-gray-200 hover:bg-indigo-50 transition-colors"
                  >
                    <td className="py-4 px-6">{post.id}</td>
                    <td className="py-4 px-6">{post.title}</td>
                    <td className="py-4 px-6">{post.body}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
