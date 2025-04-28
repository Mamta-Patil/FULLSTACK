import { useState } from 'react';

export default function FeeCalculator({ setMessages, language }) {
  const [visaType, setVisaType] = useState('');
  const [country, setCountry] = useState('');

  const calculateFee = async () => {
    const response = await fetch('/api/fees', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ visaType, country }),
    });
    const { fee, currency } = await response.json();
    setMessages((prev) => [...prev, { text: `Visa Fee: ${fee} ${currency}`, sender: 'bot' }]);
  };

  return (
    <div className="p-4 bg-yellow-100 rounded-lg">
      <h2 className="text-lg font-semibold mb-2">Fee Calculator</h2>
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
        onClick={calculateFee}
        className="w-full p-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700"
      >
        Calculate Fee
      </button>
    </div>
  );
}