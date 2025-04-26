// // import Image from "next/image";

// // export default function Home() {
// //   return (
// //     <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
// //       <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
// //         <Image
// //           className="dark:invert"
// //           src="/next.svg"
// //           alt="Next.js logo"
// //           width={180}
// //           height={38}
// //           priority
// //         />
// //         <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
// //           <li className="mb-2 tracking-[-.01em]">
// //             Get started by editing{" "}
// //             <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
// //               src/app/page.js
// //             </code>
// //             .
// //           </li>
// //           <li className="tracking-[-.01em]">
// //             Save and see your changes instantly.
// //           </li>
// //         </ol>

// //         <div className="flex gap-4 items-center flex-col sm:flex-row">
// //           <a
// //             className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
// //             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
// //             target="_blank"
// //             rel="noopener noreferrer"
// //           >
// //             <Image
// //               className="dark:invert"
// //               src="/vercel.svg"
// //               alt="Vercel logomark"
// //               width={20}
// //               height={20}
// //             />
// //             Deploy now
// //           </a>
// //           <a
// //             className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
// //             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
// //             target="_blank"
// //             rel="noopener noreferrer"
// //           >
// //             Read our docs
// //           </a>
// //         </div>
// //       </main>
// //       <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
// //         <a
// //           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
// //           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           <Image
// //             aria-hidden
// //             src="/file.svg"
// //             alt="File icon"
// //             width={16}
// //             height={16}
// //           />
// //           Learn
// //         </a>
// //         <a
// //           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
// //           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           <Image
// //             aria-hidden
// //             src="/window.svg"
// //             alt="Window icon"
// //             width={16}
// //             height={16}
// //           />
// //           Examples
// //         </a>
// //         <a
// //           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
// //           href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           <Image
// //             aria-hidden
// //             src="/globe.svg"
// //             alt="Globe icon"
// //             width={16}
// //             height={16}
// //           />
// //           Go to nextjs.org →
// //         </a>
// //       </footer>
// //     </div>
// //   );
// // }

// // app/page.js
// 'use client';

// import { useState } from 'react';

// export default function Home() {
//   const [visaType, setVisaType] = useState('');
//   const [documents, setDocuments] = useState([]);
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');

//   // Fetch documents for the selected visa type
//   const handleGetDocuments = async () => {
//     if (!visaType) {
//       setMessage('Please select a visa type.');
//       return;
//     }

//     try {
//       const response = await fetch(`/api/documents?visa=${visaType}`);
//       const data = await response.json();
//       if (response.ok) {
//         setDocuments(data.documents);
//         setMessage('Documents loaded successfully!');
//       } else {
//         setMessage(data.error || 'Error fetching documents.');
//       }
//     } catch (error) {
//       setMessage('Something went wrong.');
//     }
//   };

//   // Send document list via email
//   const handleSendEmail = async () => {
//     if (!visaType || !email) {
//       setMessage('Please select a visa type and enter an email.');
//       return;
//     }

//     try {
//       const response = await fetch('/api/send-email', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ visaType, email }),
//       });
//       const data = await response.json();
//       setMessage(data.message);
//     } catch (error) {
//       setMessage('Error sending email.');
//     }
//   };

//   return (

//     <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
//       <h1>Document Checklist Generator</h1>
//       <div>
//         <label htmlFor="visaType">Select Visa Type:</label>
//         <select
//           id="visaType"
//           value={visaType}
//           onChange={(e) => setVisaType(e.target.value)}
//         >
//           <option value="">-- Select --</option>
//           <option value="Tourist Visa">Tourist Visa</option>
//           <option value="Student Visa">Student Visa</option>
//           <option value="Work Visa">Work Visa</option>
//         </select>
//       </div>
//       <div style={{ marginTop: '20px' }}>
//         <label htmlFor="email">Email (for sending checklist):</label>
//         <input
//           id="email"
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           placeholder="Enter your email"
//           style={{ width: '100%', padding: '8px' }}
//         />
//       </div>
//       <div style={{ marginTop: '20px' }}>
//         <button onClick={handleGetDocuments} style={{ marginRight: '10px' }}>
//           Show Documents
//         </button>
//         <button onClick={handleSendEmail}>Send via Email</button>
//       </div>
//       {message && <p>{message}</p>}
//       {documents.length > 0 && (
//         <div style={{ marginTop: '20px' }}>
//           <h2>Required Documents for {visaType}</h2>
//           <ul>
//             {documents.map((doc, index) => (
//               <li key={index}>{doc}</li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// }

'use client';

import { useState } from 'react';

export default function Home() {
  const [visaType, setVisaType] = useState('');
  const [documents, setDocuments] = useState([]);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Fetch documents for the selected visa type
  const handleGetDocuments = async () => {
    if (!visaType) {
      setMessage('Please select a visa type.');
      return;
    }

    try {
      const response = await fetch(`/api/documents?visa=${visaType}`);
      const data = await response.json();
      if (response.ok) {
        setDocuments(data.documents);
        setMessage('Documents loaded successfully!');
      } else {
        setMessage(data.error || 'Error fetching documents.');
      }
    } catch (error) {
      setMessage('Something went wrong.');
    }
  };

  // Send document list via email
  const handleSendEmail = async () => {
    if (!visaType || !email) {
      setMessage('Please select a visa type and enter an email.');
      return;
    }

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ visaType, email }),
      });
      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      setMessage('Error sending email.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 sm:p-6">
      <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8 max-w-lg w-full">
        <h1 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-6">
          Document Checklist Generator
        </h1>
        <div className="mb-6">
          <label
            htmlFor="visaType"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Select Visa Type
          </label>
          <select
            id="visaType"
            value={visaType}
            onChange={(e) => setVisaType(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
          >
            <option value="">-- Select --</option>
            <option value="Tourist Visa">Tourist Visa</option>
            <option value="Student Visa">Student Visa</option>
            <option value="Work Visa">Work Visa</option>
          </select>
        </div>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Email (for sending checklist)
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
          />
        </div>
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <button
            onClick={handleGetDocuments}
            className="w-full sm:w-auto bg-blue-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
          >
            Show Documents
          </button>
          <button
            onClick={handleSendEmail}
            className="w-full sm:w-auto bg-green-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200"
          >
            Send via Email
          </button>
        </div>
        {message && (
          <p
            className={`text-center text-sm ${
              message.includes('Error') || message.includes('Please')
                ? 'text-red-600'
                : 'text-green-600'
            }`}
          >
            {message}
          </p>
        )}
        {documents.length > 0 && (
          <div className="mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Required Documents for {visaType}
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {documents.map((doc, index) => (
                <li key={index}>{doc}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
