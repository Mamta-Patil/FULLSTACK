import { useState } from 'react';

export default function InterviewPrep({ setMessages, language }) {
  const getTips = () => {
    const tips = [
      'Prepare answers for common questions.',
      'Dress professionally.',
      'Bring all required documents.',
    ];
    setMessages((prev) => [...prev, { text: `Interview Tips: ${tips.join(' ')}`, sender: 'bot' }]);
  };

  return (
    <div className="p-4 bg-red-100 rounded-lg">
      <h2 className="text-lg font-semibold mb-2">Interview Preparation</h2>
      <button
        onClick={getTips}
        className="w-full p-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
      >
        Get Interview Tips
      </button>
    </div>
  );
}