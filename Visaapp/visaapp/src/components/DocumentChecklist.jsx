import { useState } from 'react';

export default function DocumentChecklist({ setMessages, language }) {
  const [visaType, setVisaType] = useState('');
  const [country, setCountry] = useState('');

  const getChecklist = async () => {
    const response = await fetch('/api/documents', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ visaType, country }),
    });
    const { documents } = await response.json();
    setMessages((prev) => [...prev, { text: `Required Documents: ${documents.join(', ')}`, sender: 'bot' }]);
  };

  return (
    <div className="p-4 bg-green-100 rounded-lg">
      <h2 className="text-lg font-semibold mb-2">Document Checklist</h2>
      <input
        type="text"
        value={visaType}
        onChange={(e) => setVisaType(e.target.value)}
        placeholder="Visa Type"
        className="w-full p-2 mb-2 border rounded-lg"
      />
      <input
        type="text"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
        placeholder="Country"
        className="w-full p-2 mb-2 border rounded-lg"
      />
      <button
        onClick={getChecklist}
        className="w-full p-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
      >
        Get Checklist
      </button>
    </div>
  );
}