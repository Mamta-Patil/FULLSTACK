import { useState } from 'react';

export default function EligibilityChecker({ setMessages, language }) {
  const [nationality, setNationality] = useState('');
  const [purpose, setPurpose] = useState('');
  const [duration, setDuration] = useState('');

  const checkEligibility = async () => {
    const response = await fetch('/api/eligibility', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nationality, purpose, duration }),
    });
    const { eligible, message } = await response.json();
    setMessages((prev) => [...prev, { text: message, sender: 'bot' }]);
  };

  return (
    <div className="p-4 bg-blue-100 rounded-lg">
      <h2 className="text-lg font-semibold mb-2">Visa Eligibility Checker</h2>
      <input
        type="text"
        value={nationality}
        onChange={(e) => setNationality(e.target.value)}
        placeholder="Nationality"
        className="w-full p-2 mb-2 border rounded-lg"
      />
      <input
        type="text"
        value={purpose}
        onChange={(e) => setPurpose(e.target.value)}
        placeholder="Purpose of Visit"
        className="w-full p-2 mb-2 border rounded-lg"
      />
      <input
        type="number"
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
        placeholder="Duration (days)"
        className="w-full p-2 mb-2 border rounded-lg"
      />
      <button
        onClick={checkEligibility}
        className="w-full p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Check Eligibility
      </button>
    </div>
  );
}