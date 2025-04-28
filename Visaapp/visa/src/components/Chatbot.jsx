"use client"
import { useState, useEffect, useRef } from 'react';
import LanguageSelector from './LanguageSelector';
import PDFGenerator from './PDFGenerator';

export default function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [language, setLanguage] = useState('en');
  const messagesEndRef = useRef(null);

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMessage = { text: input, sender: 'user' };
    setMessages([...messages, userMessage]);
    setInput('');

    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: input, language }),
    });
    const { response: botResponse } = await response.json();
    setMessages((prev) => [...prev, { text: botResponse, sender: 'bot' }]);
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="w-full max-w-2xl bg-white rounded-lg shadow-xl p-6 flex flex-col h-[80vh]">
      <h1 className="text-2xl font-bold text-center text-blue-600 mb-4">Visa Application Assistant</h1>
      <div className="flex justify-between mb-4">
        <LanguageSelector setLanguage={setLanguage} />
        <PDFGenerator messages={messages} />
      </div>
      <div className="flex-1 overflow-y-auto p-4 bg-gray-50 rounded-lg">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`chat-message ${msg.sender === 'user' ? 'user-message' : 'bot-message'}`}
          >
            {msg.text}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="mt-4 flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Ask about visa eligibility, documents, fees, or more..."
        />
        <button
          onClick={handleSend}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Send
        </button>
      </div>
    </div>
  );
}
