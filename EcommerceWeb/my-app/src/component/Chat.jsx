"use client";

import { useState, useEffect, useRef } from "react";
import { FaMessage } from "react-icons/fa6";
import { useSession } from "next-auth/react";

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const messagesEndRef = useRef(null);
  const { data: session } = useSession(); // Get user session

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input, timestamp: new Date() };
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
          userId: session?.user?.id || null, // Pass userId if logged in
        }),
      });

      const data = await response.json();
      if (data.error) {
        throw new Error(data.error);
      }

      setMessages((prev) => [
        ...prev,
        { role: "model", content: data.reply, timestamp: new Date() },
      ]);
    } catch (error) {
      console.error("Error fetching response:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: "model",
          content: "Sorry, something went wrong!",
          timestamp: new Date(),
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative">
      {/* Chat toggle icon */}
      <button
        onClick={() => setShowChat((prev) => !prev)}
        className="fixed bottom-6 right-6 p-4 bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 z-50"
        aria-label="Toggle chat"
      >
        <FaMessage size={24} />
      </button>

      {/* Chat window */}
      {showChat && (
        <div className="fixed bottom-20 right-6 w-[550px] max-h-[70vh] h-[400px] bg-white/90 backdrop-blur-md rounded-xl shadow-2xl p-4 flex flex-col transform transition-all duration-300 ease-in-out z-40 animate-in fade-in zoom-in-95">
          {/* Header */}
          <div className="flex items-center justify-between mb-3 bg-gradient-to-br from-blue-500 to-purple-60">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 p-2 0">
                Chatbot
              </h3>
            </div>
            <button
              onClick={() => setShowChat(false)}
              className="text-gray-500 hover:text-gray-700 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 max-h-96 overflow-y-auto px-2 space-y-3">
            {messages.length === 0 && !loading ? (
              <div className="text-center text-blue-500 text-sm py-4">
                Start a conversation!
              </div>
            ) : (
              messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${
                    msg.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`flex items-start gap-2 max-w-[75%] ${
                      msg.role === "user" ? "flex-row-reverse" : ""
                    }`}
                  >
                    {/* Avatar */}
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-medium ${
                        msg.role === "user" ? "bg-blue-500" : "bg-purple-500"
                      }`}
                    >
                      {msg.role === "user" ? "U" : "B"}
                    </div>

                    {/* Message Bubble */}
                    <div
                      className={`p-3 rounded-lg shadow-sm ${
                        msg.role === "user"
                          ? "bg-blue-500 text-white rounded-br-none"
                          : "bg-gray-100 text-gray-800 rounded-bl-none border border-gray-200"
                      }`}
                    >
                      <p>{msg.content}</p>
                      <span className="text-xs text-gray-400 mt-1 block">
                        {new Date(msg.timestamp).toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
            {loading && (
              <div className="flex justify-start">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-white text-sm font-medium">
                    B
                  </div>
                  <div className="p-3 bg-gray-100 rounded-lg shadow-sm border border-gray-200 rounded-bl-none">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></span>
                      <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-100"></span>
                      <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-200"></span>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Form */}
          <form
            onSubmit={handleSend}
            className="mt-3 flex items-center gap-2 border-t border-gray-200 pt-3"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              disabled={loading}
              className="flex-1 p-2 bg-gray-50 border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400"
            />
            <button
              type="submit"
              disabled={loading}
              className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5l7.5 7.5-7.5 7.5m-6-15l6 6-6 6"
                />
              </svg>
            </button>
          </form>
        </div>
      )}
    </div>
  );
}