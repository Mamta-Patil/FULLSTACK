// // // "use client";
// // // import { useState, useEffect, useRef } from "react";

// // // export default function Chat() {
// // //   const [messages, setMessages] = useState([
// // //     {
// // //       role: "model",
// // //       content: "Roar! I'm DinoBot, your fun dino pal! Ask me about T-Rex’s big teeth or Triceratops’ cool horns. What dino do you love?",
// // //     },
// // //   ]);
// // //   const [input, setInput] = useState("");
// // //   const [loading, setLoading] = useState(false);
// // //   const messagesEndRef = useRef(null);

// // //   useEffect(() => {
// // //     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
// // //   }, [messages]);

// // //   const handleSend = async (e) => {
// // //     e.preventDefault();
// // //     if (!input.trim()) return;

// // //     const userMessage = { role: "user", content: input };
// // //     setMessages((prev) => [...prev, userMessage]);
// // //     setInput("");
// // //     setLoading(true);

// // //     try {
// // //       const response = await fetch("/api/chat", {
// // //         method: "POST",
// // //         headers: { "Content-Type": "application/json" },
// // //         body: JSON.stringify({
// // //           message: input,
// // //           history: messages,
// // //         }),
// // //       });

// // //       const data = await response.json();
// // //       if (data.error) {
// // //         throw new Error(data.error);
// // //       }

// // //       setMessages((prev) => [
// // //         ...prev,
// // //         { role: "model", content: `${data.reply} ` },
// // //       ]);
// // //     } catch (error) {
// // //       console.error("Error fetching response:", error);
// // //       setMessages((prev) => [
// // //         ...prev,
// // //         { role: "model", content: "Oops, a dino ate my answer! Try another question! 🦕" },
// // //       ]);
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   return (
// // //     <div
// // //       className="min-h-screen flex items-center justify-center p-4"
// // //       style={{
// // //         backgroundImage: "url('https://images.unsplash.com/photo-1551621509-7c7f9e6b6b0f?auto=format&fit=crop&w=1920')",
// // //         backgroundSize: "cover",
// // //         backgroundAttachment: "fixed",
// // //         fontFamily: "'Arial', sans-serif",
// // //       }}
// // //     >
// // //       <div className="max-w-2xl w-full bg-white/95 backdrop-blur-lg rounded-lg shadow-xl">
// // //         <div className="p-6 border-b border-gray-200">
// // //           <h1 className="text-3xl font-bold text-center text-gray-800 flex items-center justify-center gap-2">
// // //             DinoBot <span className="text-4xl">🦖</span>
// // //           </h1>
// // //           <p className="text-center text-gray-600">Your fun guide to dino facts!</p>
// // //         </div>
// // //         <div className="max-h-[500px] overflow-y-auto p-6">
// // //           {messages.map((msg, index) => (
// // //             <div
// // //               key={index}
// // //               className={`p-4 mb-4 rounded-lg ${
// // //                 msg.role === "user"
// // //                   ? "bg-green-500 text-white rounded-br-none ml-10"
// // //                   : "bg-blue-500 text-white rounded-bl-none mr-10"
// // //               } animate-slideIn`}
// // //             >
// // //               <strong>{msg.role === "user" ? "You" : "DinoBot"}: </strong>
// // //               {msg.content}
// // //             </div>
// // //           ))}
// // //           {loading && (
// // //             <div className="p-4 mb-4 bg-blue-500 text-white rounded-bl-none mr-10 animate-pulse flex items-center gap-2">
// // //               <span className="text-xl">🦕</span> DinoBot: Digging up dino fun...
// // //             </div>
// // //           )}
// // //           <div ref={messagesEndRef} />
// // //         </div>
// // //         <div className="flex flex-col gap-4 bg-white/90 rounded-b-lg p-6">
// // //           <form onSubmit={handleSend} className="flex gap-2">
// // //             <input
// // //               type="text"
// // //               value={input}
// // //               onChange={(e) => setInput(e.target.value)}
// // //               placeholder="Ask about your favorite dino! 🦕"
// // //               disabled={loading}
// // //               className="flex-1 p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
// // //             />
// // //             <button
// // //               type="submit"
// // //               disabled={loading}
// // //               className="bg-green-500 text-white p-3 rounded-full hover:bg-green-600 transition flex items-center justify-center"
// // //             >
// // //               <span className="material-symbols-rounded">send</span>
// // //             </button>
// // //           </form>
// // //         </div>
// // //       </div>
// // //       <style jsx>{`
// // //         .animate-slideIn {
// // //           animation: slideIn 0.3s ease;
// // //         }
// // //         @keyframes slideIn {
// // //           from {
// // //             transform: translateY(20px);
// // //             opacity: 0;
// // //           }
// // //           to {
// // //             transform: translateY(0);
// // //             opacity: 1;
// // //           }
// // //         }
// // //       `}</style>
// // //     </div>
// // //   );
// // // }
// // "use client";
// // import { useState, useEffect, useRef } from "react";

// // export default function Chat() {
// //   const [messages, setMessages] = useState([
// //     {
// //       role: "model",
// //       content: "Zoom! I'm SpaceBot, your cosmic pal! Ask me about Mars, black holes, or astronauts. What’s your space question? 🚀",
// //     },
// //   ]);
// //   const [input, setInput] = useState("");
// //   const [loading, setLoading] = useState(false);
// //   const messagesEndRef = useRef(null);

// //   useEffect(() => {
// //     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
// //   }, [messages]);

// //   const handleSend = async (e) => {
// //     e.preventDefault();
// //     if (!input.trim()) return;

// //     const userMessage = { role: "user", content: input };
// //     setMessages((prev) => [...prev, userMessage]);
// //     setInput("");
// //     setLoading(true);

// //     try {
// //       const response = await fetch("/api/chat", {
// //         method: "POST",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify({
// //           message: input,
// //           history: messages,
// //         }),
// //       });

// //       const data = await response.json();
// //       if (data.error) {
// //         throw new Error(data.error);
// //       }

// //       setMessages((prev) => [
// //         ...prev,
// //         { role: "model", content: `${data.reply} ` },
// //       ]);
// //     } catch (error) {
// //       console.error("Error fetching response:", error);
// //       setMessages((prev) => [
// //         ...prev,
// //         { role: "model", content: "Oops, my rocket crashed! Try another space question! 🌌" },
// //       ]);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <div
// //       className="min-h-screen flex items-center justify-center p-4"
// //       style={{
// //         backgroundImage: "url('https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?auto=format&fit=crop&w=1920')",
// //         backgroundSize: "cover",
// //         backgroundAttachment: "fixed",
// //         fontFamily: "'Arial', sans-serif",
// //       }}
// //     >
// //       <div className="max-w-2xl w-full bg-white/95 backdrop-blur-lg rounded-lg shadow-xl">
// //         <div className="p-6 border-b border-gray-200">
// //           <h1 className="text-3xl font-bold text-center text-gray-800 flex items-center justify-center gap-2">
// //             SpaceBot <span className="text-4xl">🚀</span>
// //           </h1>
// //           <p className="text-center text-gray-600">Your fun guide to space adventures!</p>
// //         </div>
// //         <div className="max-h-[500px] overflow-y-auto p-6">
// //           {messages.map((msg, index) => (
// //             <div
// //               key={index}
// //               className={`p-4 mb-4 rounded-lg ${
// //                 msg.role === "user"
// //                   ? "bg-green-500 text-white rounded-br-none ml-10"
// //                   : "bg-blue-500 text-white rounded-bl-none mr-10"
// //               } animate-slideIn`}
// //             >
// //               <strong>{msg.role === "user" ? "You" : "SpaceBot"}: </strong>
// //               {msg.content}
// //             </div>
// //           ))}

// //           {loading && (
// //             <div className="p-4 mb-4 bg-blue-500 text-white rounded-bl-none mr-10 animate-pulse flex items-center gap-2">
// //               <span className="text-xl">🌌</span> SpaceBot: Blasting off with space facts...
// //             </div>
// //           )}
// //           <div ref={messagesEndRef} />
// //         </div>
// //         <div className="flex flex-col gap-4 bg-white/90 rounded-b-lg p-6">
// //           <form onSubmit={handleSend} className="flex gap-2">
// //             <input
// //               type="text"
// //               value={input}
// //               onChange={(e) => setInput(e.target.value)}
// //               placeholder="Ask about your favorite planet! 🚀"
// //               disabled={loading}
// //               className="flex-1 p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
// //             />
// //             <button
// //               type="submit"
// //               disabled={loading}
// //               className="bg-green-500 text-white p-3 rounded-full hover:bg-green-600 transition flex items-center justify-center"
// //             >
// //               <span className="material-symbols-rounded">send</span>
// //             </button>
// //           </form>
// //         </div>
// //       </div>
// //       <style jsx>{`
// //         .animate-slideIn {
// //           animation: slideIn 0.3s ease;
// //         }
// //         @keyframes slideIn {
// //           from {
// //             transform: translateY(20px);
// //             opacity: 0;
// //           }
// //           to {
// //             transform: translateY(0);
// //             opacity: 1;
// //           }
// //         }
// //       `}</style>
// //     </div>
// //   );
// // }
// "use client";
// import { useState, useEffect, useRef } from "react";

// export default function Chat() {
//   const [messages, setMessages] = useState([
//     {
//       role: "model",
//       content: "Zoom! I'm SpaceBot, your cosmic pal! Ask me about Mars, black holes, or astronauts. What’s your space question? 🚀",
//     },
//   ]);
//   const [input, setInput] = useState("");
//   const [loading, setLoading] = useState(false);
//   const messagesEndRef = useRef(null);

//   useEffect(() => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages]);

//   const handleSend = async (e) => {
//     e.preventDefault();
//     if (!input.trim()) return;

//     const userMessage = { role: "user", content: input };
//     setMessages((prev) => [...prev, userMessage]);
//     setInput("");
//     setLoading(true);

//     try {
//       const response = await fetch("/api/chat", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           message: input,
//           history: messages,
//         }),
//       });

//       const data = await response.json();
//       if (data.error) {
//         throw new Error(data.error);
//       }

//       setMessages((prev) => [
//         ...prev,
//         { role: "model", content: `${data.reply} 🚀` },
//       ]);
//     } catch (error) {
//       console.error("Error fetching response:", error);
//       setMessages((prev) => [
//         ...prev,
//         { role: "model", content: "Oops, my rocket crashed! Try another space question! 🌌" },
//       ]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div
//       className="min-h-screen flex items-center justify-center p-4"
//       style={{
//         backgroundImage: "url('https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?auto=format&fit=crop&w=1920')",
//         backgroundSize: "cover",
//         backgroundAttachment: "fixed",
//         fontFamily: "'Arial', sans-serif",
//       }}
//     >
//       <div className="max-w-2xl w-full bg-white/95 backdrop-blur-lg rounded-lg shadow-xl">
//         <div className="p-6 border-b border-gray-200">
//           <h1 className="text-3xl font-bold text-center text-gray-800 flex items-center justify-center gap-2">
//             SpaceBot <span className="text-4xl">🚀</span>
//           </h1>
//           <p className="text-center text-gray-600">Your fun guide to space adventures!</p>
//         </div>
//         <div className="max-h-[500px] overflow-y-auto p-6">
//           {messages.map((msg, index) => (
//             <div
//               key={index}
//               className={`p-4 mb-4 rounded-lg ${
//                 msg.role === "user"
//                   ? "bg-green-500 text-white rounded-br-none ml-10"
//                   : "bg-blue-500 text-white rounded-bl-none mr-10"
//               } animate-slideIn`}
//             >
//               <strong>{msg.role === "user" ? "You" : "SpaceBot"}: </strong>
//               {msg.content}
//             </div>
//           ))}
//           {loading && (
//             <div className="p-4 mb-4 bg-blue-500 text-white rounded-bl-none mr-10 animate-pulse flex items-center gap-2">
//               <span className="text-xl">🌌</span> SpaceBot: Blasting off with space facts...
//             </div>
//           )}
//           <div ref={messagesEndRef} />
//         </div>
//         <div className="flex flex-col gap-4 bg-white/90 rounded-b-lg p-6">
//           <form onSubmit={handleSend} className="flex gap-2">
//             <input
//               type="text"
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//               placeholder="Ask about your favorite planet in any language! 🚀"
//               disabled={loading}
//               className="flex-1 p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//             <button
//               type="submit"
//               disabled={loading}
//               className="bg-green-500 text-white p-3 rounded-full hover:bg-green-600 transition flex items-center justify-center"
//             >
//               <span className="material-symbols-rounded">send</span>
//             </button>
//           </form>
//         </div>
//       </div>
//       <style jsx>{`
//         .animate-slideIn {
//           animation: slideIn 0.3s ease;
//         }
//         @keyframes slideIn {
//           from {
//             transform: translateY(20px);
//             opacity: 0;
//           }
//           to {
//             transform: translateY(0);
//             opacity: 1;
//           }
//         }
//       `}</style>
//     </div>
//   );
// }



"use client";
import { useState, useEffect, useRef } from "react";

export default function Chat() {
  const [messages, setMessages] = useState(() => {
    // Load messages from localStorage on mount
    const savedMessages = localStorage.getItem("spaceBotHistory");
    return savedMessages
      ? JSON.parse(savedMessages)
      : [
          {
            role: "model",
            content: "Zoom! I'm SpaceBot, your cosmic pal! Ask me about Mars, black holes, or astronauts. What’s your space question? 🚀",
          },
        ];
  });
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    localStorage.setItem("spaceBotHistory", JSON.stringify(messages));
  }, [messages]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: input,
          history: messages,
        }),
      });

      const data = await response.json();
      if (data.error) {
        throw new Error(data.error);
      }

      setMessages((prev) => [
        ...prev,
        { role: "model", content: `${data.reply} 🚀` },
      ]);
    } catch (error) {
      console.error("Error fetching response:", error);
      setMessages((prev) => [
        ...prev,
        { role: "model", content: "Oops, my rocket crashed! Try another space question! 🌌" },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const clearChat = () => {
    const initialMessage = [
      {
        role: "model",
        content: "Zoom! I'm SpaceBot, your cosmic pal! Ask me about Mars, black holes, or astronauts. What’s your space question? 🚀",
      },
    ];
    setMessages(initialMessage);
    localStorage.setItem("spaceBotHistory", JSON.stringify(initialMessage));
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?auto=format&fit=crop&w=1920')",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        fontFamily: "'Arial', sans-serif",
      }}
    >
      <div className="max-w-2xl w-full bg-white/95 backdrop-blur-lg rounded-lg shadow-xl">
        <div className="p-6 border-b border-gray-200">
          <h1 className="text-3xl font-bold text-center text-gray-800 flex items-center justify-center gap-2">
            SpaceBot <span className="text-4xl">🚀</span>
          </h1>
          <p className="text-center text-gray-600">Your fun guide to space adventures!</p>
        </div>
        <div className="max-h-[500px] overflow-y-auto p-6">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`p-4 mb-4 rounded-lg ${
                msg.role === "user"
                  ? "bg-green-500 text-white rounded-br-none ml-10"
                  : "bg-blue-500 text-white rounded-bl-none mr-10"
              } animate-slideIn`}
            >
              <strong>{msg.role === "user" ? "You" : "SpaceBot"}: </strong>
              {msg.content}
            </div>
          ))}
          {loading && (
            <div className="p-4 mb-4 bg-blue-500 text-white rounded-bl-none mr-10 animate-pulse flex items-center gap-2">
              <span className="text-xl">🌌</span> SpaceBot: Blasting off with space facts...
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
        <div className="flex flex-col gap-4 bg-white/90 rounded-b-lg p-6">
          <button
            onClick={clearChat}
            className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition self-end"
          >
            Clear Chat
          </button>
          <form onSubmit={handleSend} className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about your favorite planet in any language! 🚀"
              disabled={loading}
              className="flex-1 p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              disabled={loading}
              className="bg-green-500 text-white p-3 rounded-full hover:bg-green-600 transition flex items-center justify-center"
            >
              <span className="material-symbols-rounded">send</span>
            </button>
          </form>
        </div>
      </div>
      <style jsx>{`
        .animate-slideIn {
          animation: slideIn 0.3s ease;
        }
        @keyframes slideIn {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}