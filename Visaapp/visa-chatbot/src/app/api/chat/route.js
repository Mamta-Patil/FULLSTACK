// import { GoogleGenerativeAI } from "@google/generative-ai";

// const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_API_KEY);
// const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// export const runtime = "edge";

// export async function POST(request) {
//   try {
//     const { message, history, language } = await request.json();

//     // Validate history roles
//     const validRoles = ["user", "model", "function", "system"];
//     history.forEach((msg, index) => {
//       if (!validRoles.includes(msg.role)) {
//         throw new Error(`Invalid role at index ${index}: ${msg.role}`);
//       }
//     });

//     // Limit history to last 10 messages
//     const limitedHistory = history.slice(-10);

//     // VisaBot system prompt
//     const systemPrompt = `
//       You are VisaBot, a friendly and professional visa application expert. Answer only about visa types (tourist, work, student, etc.), requirements, application processes, or related FAQs in 1-2 concise sentences with a clear, user-friendly tone. Avoid legal jargon. Reply in the language specified (${language || "en"}: en=English, es=Spanish, hi=Hindi), using recent messages for context to stay relevant and avoid repetition. If the question is vague (e.g., "Tell me about visas"), suggest a specific topic like tourist or work visas. If the question is unrelated to visas, respond with "Let’s focus on visas! Want to know about tourist visa requirements?" in the specified language. If the language is unclear, use English.
//     `;

//     const chat = model.startChat({
//       history: [
//         { role: "user", parts: [{ text: systemPrompt }] },
//         ...limitedHistory.map((msg) => ({
//           role: msg.role,
//           parts: [{ text: msg.content }],
//         })),
//       ],
//       generationConfig: {
//         temperature: 0.7,
//         maxOutputTokens: 50,
//       },
//     });

//     const result = await chat.sendMessage(message);
//     const response = await result.response;
//     const text = response.text();

//     return new Response(JSON.stringify({ reply: text }), {
//       status: 200,
//       headers: { "Content-Type": "application/json" },
//     });
//   } catch (error) {
//     console.error("Error in chat API:", error);
//     return new Response(
//       JSON.stringify({ error: error.message || "Failed to process your request!" }),
//       {
//         status: 500,
//         headers: { "Content-Type": "application/json" },
//       }
//     );
//   }
// }

// export async function OPTIONS() {
//   return new Response(null, {
//     headers: {
//       "Access-Control-Allow-Origin": "*",
//       "Access-Control-Allow-Methods": "POST, OPTIONS",
//       "Access-Control-Allow-Headers": "Content-Type",
//     },
//   });
// }


// "use client";
// import { useState, useEffect, useRef } from "react";

// export default function Chat() {
//   const initialMessage = [
//     {
//       role: "model",
//       content: "Hello! I'm VisaBot, your visa application guide. Ask about visa types, requirements, or processes in any language!",
//     },
//   ];
//   const [messages, setMessages] = useState(initialMessage);
//   const [input, setInput] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [language, setLanguage] = useState("en");
//   const [isRecording, setIsRecording] = useState(false);
//   const [speakResponses, setSpeakResponses] = useState(false);
//   const messagesEndRef = useRef(null);
//   const recognitionRef = useRef(null);

//   // Sample questions
//   const sampleQuestions = {
//     en: [
//       "What’s a Schengen visa?",
//       "How to apply for a US tourist visa?",
//       "What documents for a Canada work visa?",
//     ],
//     es: [
//       "¿Qué es una visa Schengen?",
//       "¿Cómo solicitar una visa de turista para EE.UU.?",
//       "¿Qué documentos para una visa de trabajo en Canadá?",
//     ],
//     hi: [
//       "शेंगेन वीजा क्या है?",
//       "अमेरिका पर्यटक वीजा के लिए कैसे आवेदन करें?",
//       "कनाडा कार्य वीजा के लिए कौन से दस्तावेज?",
//     ],
//   };

//   // Load data from localStorage
//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       const savedMessages = localStorage.getItem("visaBotHistory");
//       if (savedMessages) setMessages(JSON.parse(savedMessages));
//       const savedLanguage = localStorage.getItem("visaBotLanguage");
//       if (savedLanguage) setLanguage(savedLanguage);
//     }
//   }, []);

//   // Save data to localStorage
//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       localStorage.setItem("visaBotHistory", JSON.stringify(messages));
//       localStorage.setItem("visaBotLanguage", language);
//     }
//   }, [messages, language]);

//   // Scroll to latest message
//   useEffect(() => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages]);

//   // Initialize speech recognition
//   useEffect(() => {
//     if (typeof window !== "undefined" && (window.SpeechRecognition || window.webkitSpeechRecognition)) {
//       const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
//       recognitionRef.current = new SpeechRecognition();
//       recognitionRef.current.lang = language === "es" ? "es-ES" : language === "hi" ? "hi-IN" : "en-US";
//       recognitionRef.current.continuous = false;
//       recognitionRef.current.interimResults = false;

//       recognitionRef.current.onresult = (event) => {
//         const transcript = event.results[0][0].transcript;
//         setInput(transcript);
//         setIsRecording(false);
//       };

//       recognitionRef.current.onerror = () => {
//         setError("Couldn’t hear you! Try again or type your question.");
//         setIsRecording(false);
//       };
//     }
//   }, [language]);

//   // Speak responses
//   useEffect(() => {
//     if (speakResponses && typeof window !== "undefined" && window.speechSynthesis) {
//       const lastMessage = messages[messages.length - 1];
//       if (lastMessage.role === "model" && !loading) {
//         const utterance = new SpeechSynthesisUtterance(lastMessage.content);
//         utterance.lang = language === "es" ? "es-ES" : language === "hi" ? "hi-IN" : "en-US";
//         window.speechSynthesis.speak(utterance);
//       }
//     }
//   }, [messages, speakResponses, language]);

//   // Detect input language
//   const detectLanguage = (text) => {
//     if (/[\u0900-\u097F]/.test(text)) return "hi"; // Hindi (Devanagari)
//     if (/[áéíóúñ¿¡]/.test(text)) return "es"; // Spanish (accents, ñ, ¿, ¡)
//     return "en"; // Default to English
//   };

//   const handleSend = async (e) => {
//     e.preventDefault();
//     if (!input.trim()) return;

//     const userMessage = { role: "user", content: input };
//     const detectedLanguage = detectLanguage(input); // Detect input language
//     setMessages((prev) => [...prev, userMessage]);
//     setInput("");
//     setLoading(true);
//     setError(null);

//     try {
//       const response = await fetch("/api/chat", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           message: input,
//           history: messages,
//           language: detectedLanguage, // Use detected language
//         }),
//       });

//       if (!response.ok) throw new Error(`API error: ${response.status}`);
//       const data = await response.json();
//       if (data.error) throw new Error(data.error);

//       setMessages((prev) => [
//         ...prev,
//         { role: "model", content: data.reply },
//       ]);
//       setLanguage(detectedLanguage); // Update UI language to match
//     } catch (error) {
//       console.error("Error fetching response:", error);
//       setError("Failed to connect! Please check your connection and try again.");
//       setMessages((prev) => [
//         ...prev,
//         { role: "model", content: "Sorry, I couldn’t process that. Try another visa question!" },
//       ]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const clearChat = () => {
//     setMessages(initialMessage);
//     if (typeof window !== "undefined") {
//       localStorage.setItem("visaBotHistory", JSON.stringify(initialMessage));
//     }
//   };

//   const toggleRecording = () => {
//     if (isRecording) {
//       recognitionRef.current?.stop();
//       setIsRecording(false);
//     } else if (recognitionRef.current) {
//       recognitionRef.current.start();
//       setIsRecording(true);
//     } else {
//       setError("Voice input not supported in this browser! Please type your question.");
//     }
//   };

//   const handleSampleQuestion = (question) => {
//     setInput(question);
//   };

//   return (
//     <div
//       className="flex flex-col items-center justify-center w-full max-w-2xl p-4 bg-white/95 backdrop-blur-lg rounded-lg shadow-xl"
//       style={{
//         backgroundImage: "url('/visa-bg.jpg')",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       <div className="w-full p-6 border-b border-gray-200">
//         <h2 className="text-2xl font-semibold text-gray-800 text-center">
//           Chat with VisaBot
//         </h2>
//         <div className="flex justify-center gap-4 mt-2">
//           <select
//             value={language}
//             onChange={(e) => setLanguage(e.target.value)}
//             className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//           >
//             <option value="en">English</option>
//             <option value="es">Español</option>
//             <option value="hi">हिन्दी</option>
//           </select>
//           <button
//             onClick={() => setSpeakResponses(!speakResponses)}
//             className={`p-2 rounded-md ${speakResponses ? "bg-blue-500 text-white" : "bg-gray-200"}`}
//           >
//             <span className="material-symbols-rounded">volume_up</span>
//           </button>
//         </div>
//       </div>
//       <div className="w-full max-h-[500px] overflow-y-auto p-6">
//         {messages.map((msg, index) => (
//           <div
//             key={index}
//             className={`p-4 mb-4 rounded-lg ${
//               msg.role === "user"
//                 ? "bg-blue-100 text-gray-800 ml-10 rounded-br-none"
//                 : "bg-gray-100 text-gray-800 mr-10 rounded-bl-none"
//             } transition-all duration-200`}
//           >
//             <strong>{msg.role === "user" ? "You" : "VisaBot"}: </strong>
//             {msg.content}
//           </div>
//         ))}
//         {loading && (
//           <div className="p-4 mb-4 bg-gray-100 text-gray-800 mr-10 rounded-bl-none animate-pulse flex items-center gap-2">
//             VisaBot: Processing your request...
//           </div>
//         )}
//         {error && (
//           <div className="p-4 mb-4 bg-red-100 text-red-800 mr-10 rounded-bl-none">
//             {error}
//           </div>
//         )}
//         <div ref={messagesEndRef} />
//       </div>
//       <div className="w-full p-6 bg-white/90 rounded-b-lg">
//         <div className="flex flex-wrap gap-2 mb-4">
//           {sampleQuestions[language].map((q, index) => (
//             <button
//               key={index}
//               onClick={() => handleSampleQuestion(q)}
//               className="text-sm text-blue-500 hover:underline"
//             >
//               {q}
//             </button>
//           ))}
//         </div>
//         <button
//           onClick={clearChat}
//           className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition mb-4 self-end"
//         >
//           Clear Chat
//         </button>
//         <form onSubmit={handleSend} className="flex gap-2">
//           <input
//             type="text"
//             value={input}
//             onChange={(e) => setInput(e.target.value)}
//             placeholder="Ask about visas in any language..."
//             disabled={loading}
//             className="flex-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           <button
//             type="button"
//             onClick={toggleRecording}
//             className={`p-3 rounded-md ${
//               isRecording ? "bg-red-500" : "bg-blue-500"
//             } text-white hover:bg-opacity-80 transition`}
//           >
//             <span className="material-symbols-rounded">mic</span>
//           </button>
//           <button
//             type="submit"
//             disabled={loading}
//             className="bg-green-500 text-white p-3 rounded-md hover:bg-green-600 transition"
//           >
//             <span className="material-symbols-rounded">send</span>
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export const runtime = "edge";

export async function POST(request) {
  try {
    const { message, history, language } = await request.json();
    console.log("Received request:", { message, language }); // Debug log

    // Validate history roles
    const validRoles = ["user", "model", "function", "system"];
    history.forEach((msg, index) => {
      if (!validRoles.includes(msg.role)) {
        throw new Error(`Invalid role at index ${index}: ${msg.role}`);
      }
    });

    // Limit history to last 10 messages
    const limitedHistory = history.slice(-10);

    // VisaBot system prompt
    const systemPrompt = `
      You are VisaBot, a friendly and professional visa application expert. Answer only about visa types (tourist, work, student, etc.), requirements, application processes, or related FAQs in 1-2 concise sentences with a clear, user-friendly tone. Avoid legal jargon. Reply strictly in the language specified (${language}: en=English, es=Spanish, hi=Hindi), using recent messages for context to stay relevant and avoid repetition. For vague questions (e.g., "Tell me about visas" or "क्या आप मुझे वीज़ा के बारे में समझा सकते हैं"), suggest a specific topic like tourist or work visas in the same language (e.g., "आइए वीज़ा पर ध्यान दें! पर्यटक वीज़ा की आवश्यकताओं के बारे में जानना चाहते हैं?" for hi). If the question is unrelated to visas, respond with "आइए वीज़ा पर ध्यान दें! पर्यटक वीज़ा की आवश्यकताओं के बारे में जानना चाहते हैं?" (hi), "¡Hablemos de visas! ¿Quieres saber sobre los requisitos de una visa de turista?" (es), or "Let’s focus on visas! Want to know about tourist visa requirements?" (en), matching the specified language. If the language is invalid, use English.
    `;

    const chat = model.startChat({
      history: [
        { role: "user", parts: [{ text: systemPrompt }] },
        ...limitedHistory.map((msg) => ({
          role: msg.role,
          parts: [{ text: msg.content }],
        })),
      ],
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 50,
      },
    });

    const result = await chat.sendMessage(message);
    const response = await result.response;
    const text = response.text();
    console.log("API response:", text); // Debug log

    return new Response(JSON.stringify({ reply: text }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error in chat API:", error);
    return new Response(
      JSON.stringify({ error: error.message || "Failed to process your request!" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}

export async function OPTIONS() {
  return new Response(null, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}   