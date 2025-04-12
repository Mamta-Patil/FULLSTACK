// 'use client';
// import { useState, useEffect } from 'react';

// export default function ChatWindow({ user }) {
//   const [message, setMessage] = useState('');
//   const [chatHistory, setChatHistory] = useState([]);
//   const [purchases, setPurchases] = useState([]);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const fetchPurchases = async () => {
//       try {
//         const res = await fetch('/api/purchase');
//         if (res.ok) {
//           const data = await res.json();
//           setPurchases(data);
//         }
//       } catch (error) {
//         console.error('Fetch purchases error:', error);
//       }
//     };
//     fetchPurchases();
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!message.trim()) return;
//     setLoading(true);
//     try {
//       setChatHistory([...chatHistory, { role: 'user', content: message }]);
//       const res = await fetch('/api/chat', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ message }),
//       });
//       const data = await res.json();
//       if (res.ok) {
//         setChatHistory((prev) => [...prev, { role: 'bot', content: data.response }]);
//       } else {
//         throw new Error(data.error || 'Chat error');
//       }
//       setMessage('');
//     } catch (error) {
//       console.error('Chat error:', error);
//     }
//     setLoading(false);
//   };

//   const addPurchase = async () => {
//     const item = prompt('Enter item name:');
//     const price = prompt('Enter item price:');
//     if (item && price) {
//       try {
//         const res = await fetch('/api/purchase', {
//           method: 'POST',
//           headers: { 'Content-Type': 'application/json' },
//           body: JSON.stringify({ item, price: parseFloat(price) }),
//         });
//         if (res.ok) {
//           const updatedRes = await fetch('/api/purchase');
//           if (updatedRes.ok) {
//             setPurchases(await updatedRes.json());
//           }
//         }
//       } catch (error) {
//         console.error('Purchase error:', error);
//       }
//     }
//   };

//   return (
//     <div className="min-h-screen p-4">
//       <div className="max-w-2xl mx-auto">
//         <div className="flex justify-between mb-4">
//           <h1 className="text-2xl">Chatbot</h1>
//           <form
//             action="/api/auth/signout"
//             method="POST"
//             className="p-2 bg-red-500 text-white rounded"
//           >
//             <button type="submit">Sign Out</button>
//           </form>
//         </div>
//         <div className="mb-4">
//           <h2 className="text-xl">Purchase History</h2>
//           {purchases.length ? (
//             <ul>
//               {purchases.map((p, i) => (
//                 <li key={i}>
//                   {p.item} - ${p.price} (Purchased on {new Date(p.purchaseDate).toLocaleDateString()})
//                 </li>
//               ))}
//             </ul>
//           ) : (
//             <p>No purchases yet.</p>
//           )}
//           <button
//             onClick={addPurchase}
//             className="mt-2 p-2 bg-green-500 text-white rounded"
//           >
//             Add Purchase
//           </button>
//         </div>
//         <div className="h-96 overflow-y-auto border p-4 mb-4">
//           {chatHistory.map((msg, i) => (
//             <div
//               key={i}
//               className={`mb-2 ${msg.role === 'user' ? 'text-right' : 'text-left'}`}
//             >
//               <span
//                 className={`inline-block p-2 rounded ${
//                   msg.role === 'user' ? 'bg-blue-100' : 'bg-gray-100'
//                 }`}
//               >
//                 {msg.content}
//               </span>
//             </div>
//           ))}
//           {loading && <p className="text-center">Loading...</p>}
//         </div>
//         <form onSubmit={handleSubmit} className="flex gap-2">
//           <input
//             type="text"
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//             className="flex-1 p-2 border rounded"
//             placeholder="Type your message..."
//           />
//           <button type="submit" className="p-2 bg-blue-500 text-white rounded">
//             Send
//           </button>
//         </form>
//       </div>

//     </div>
//   );
// }

'use client';
import { useState, useEffect } from 'react';
// const session = await getServerSession(authOptions);
//   if (!session) {
//     redirect('/auth/signin');
//   }
export default function ChatWindow({ user }) {
  
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [purchases, setPurchases] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPurchases = async () => {
      try {
        const res = await fetch('/api/purchases');
        if (res.ok) {
          const data = await res.json();
          setPurchases(data);
        }
      } catch (error) {
        console.error('Fetch purchases error:', error);
      }
    };
    fetchPurchases();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;
    
    setLoading(true);
    try {
      setChatHistory([...chatHistory, { role: 'user', content: message }]);
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message }),
      });
      const data = await res.json();
      if (res.ok) {
        setChatHistory((prev) => [...prev, { role: 'bot', content: data.response }]);
      } else {
        throw new Error(data.error || 'Chat error');
      }
      setMessage('');
    } catch (error) {
        console.error('Chat error:', error);
    }
    setLoading(false);
  };

  const addPurchase = async () => {
    const item = prompt('Enter item name:');
    const price = prompt('Enter item price:');
    if (item && price) {
      try {
        const res = await fetch('/api/purchases', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ item, price: parseFloat(price) }),
        });
        if (res.ok) {
          const updatedRes = await fetch('/api/purchases');
          if (updatedRes.ok) {
            setPurchases(await updatedRes.json());
          }
        }
      } catch (error) {
        console.error('Purchase error:', error);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-100 flex items-center justify-center p-4 sm:p-6">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-2xl p-6 sm:p-8">
        {/* Header Section */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-gray-800 tracking-tight">
            Chatbot
          </h1>
          <form action="/api/auth/signout" method="POST">
            <button
              type="submit"
              className="px-4 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors duration-300"
            >
              Sign Out
            </button>
          </form>
        </div>

        {/* Purchase History Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Purchase History
          </h2>
          <div className="bg-gray-50 p-4 rounded-xl shadow-sm border border-gray-200">
            {purchases.length ? (
              <ul className="space-y-3">
                {purchases.map((p, i) => (
                  <li
                    key={i}
                    className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm hover:bg-gray-100 transition-colors duration-200"
                  >
                    <span className="text-gray-800 font-medium">{p.item}</span>
                    <span className="text-gray-600">
                      ${p.price.toFixed(2)} (Purchased on{' '}
                      {new Date(p.purchaseDate).toLocaleDateString()})
                    </span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500 italic">No purchases yet.</p>
            )}
            <button
              onClick={addPurchase}
              className="mt-4 px-4 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors duration-300"
            >
              Add Purchase
            </button>
          </div>
        </div>

        {/* Chat Window */}
        <div className="h-96 bg-gray-50 rounded-xl shadow-inner p-4 mb-6 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
          {chatHistory.map((msg, i) => (
            <div
              key={i}
              className={`mb-4 flex ${
                msg.role === 'user' ? 'justify-end' : 'justify-start'
              }`}
            >
              <div
                className={`max-w-xs sm:max-w-md p-3 rounded-2xl shadow-md transform transition-transform duration-300 ${
                  msg.role === 'user'
                    ? 'bg-blue-600 text-white translate-x-2'
                    : 'bg-white text-gray-800 -translate-x-2'
                }`}
              >
                <p className="text-sm sm:text-base">{msg.content}</p>
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex justify-center">
              <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-8 w-8"></div>
            </div>
          )}
        </div>

        {/* Input Form */}
        <form onSubmit={handleSubmit} className="flex gap-3">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="flex-1 p-3 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 text-gray-800 placeholder-gray-400"
            placeholder="Type your message..."
          />
          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}