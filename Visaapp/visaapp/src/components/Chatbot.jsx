"use client"
import { useState, useEffect, useRef } from 'react';
import EligibilityChecker from './EligibilityChecker';
import DocumentChecklist from './DocumentChecklist';
import FeeCalculator from './FeeCalculator';
import AppointmentBooking from './AppointmentBooking';
import InterviewPrep from './InterviewPrep';
import LanguageSelector from './LanguageSelector';
import ChatHistory from './ChatHistory';
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
    <div className="w-full max-w-4xl bg-white rounded-lg shadow-xl p-6 flex flex-col h-[80vh]">
      <h1 className="text-2xl font-bold text-center text-blue-600 mb-4">Visa Application Assistant</h1>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 flex flex-col">
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
              placeholder="Type your message..."
            />
            <button
              onClick={handleSend}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Send
            </button>
          </div>
        </div>
        <div className="w-full md:w-80 flex flex-col gap-4">
          <LanguageSelector setLanguage={setLanguage} />
          <EligibilityChecker setMessages={setMessages} language={language} />
          <DocumentChecklist setMessages={setMessages} language={language} />
          <FeeCalculator setMessages={setMessages} language={language} />
          <AppointmentBooking setMessages={setMessages} language={language} />
          <InterviewPrep setMessages={setMessages} language={language} />
          <ChatHistory messages={messages} />
          <PDFGenerator messages={messages} />
        </div>
      </div>
    </div>
  );
}