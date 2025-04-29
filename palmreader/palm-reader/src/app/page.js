'use client';

import { useState } from 'react';
import PalmReaderForm from './components/PalmReaderForm';
import PalmReaderResult from './components/PalmReaderResult';

export default function Home() {
  const [result, setResult] = useState(null);

  const handleSubmit = async (formData) => {
    try {
      const response = await fetch('/api/palm-reader', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      if (data.result) {
        setResult(data.result);
      } else {
        alert('Error analyzing palm image');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to process request');
    }
  };

  return (
    <main className="w-full max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center text-indigo-600 mb-8">
        AI-Powered Palm Reader
      </h1>
      <PalmReaderForm onSubmit={handleSubmit} />
      <PalmReaderResult result={result} />
    </main>
  );
}