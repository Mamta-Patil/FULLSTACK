
'use client';
import { useState, useEffect } from 'react';

export default function PredictionCard({ inventory }) {
  const [predictions, setPredictions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPredictions() {
      try {
        const res = await fetch('/api/predict', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ inventory: Array.isArray(inventory) ? inventory : [] }),
        });
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        const data = await res.json();
        setPredictions(data);
      } catch (err) {
        setError('Failed to fetch predictions: ' + err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchPredictions();
  }, [inventory]);

  if (loading) {
    return (
      <div className="bg-white p-6 rounded-xl shadow-lg">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Demand Predictions</h3>
        <div className="animate-pulse space-y-4">
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-100 text-red-700 p-4 rounded-lg">Error: {error}</div>
    );
  }

  if (!predictions.length) {
    return (
      <div className="bg-white p-6 rounded-xl shadow-lg text-gray-600 text-center">
        No AI predictions available. Add items to inventory.
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
        <svg className="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2v12a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
        AI Demand Predictions
      </h3>
      <div className="space-y-4">
        {predictions.map((pred) => (
          <div
            key={pred.id}
            className="p-4 bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg shadow-sm hover:shadow-md transition-all duration-200"
          >
            <div className="flex items-center justify-between">
              <div>
                <span className="font-semibold text-gray-800">{pred.name}</span>
                <div className="mt-1 text-sm text-gray-600">
                  Predicted Demand: <span className="text-blue-600 font-medium">{pred.demand}</span> units
                </div>
                <div className="text-sm text-gray-600">
                  Reorder: <span className="text-green-600 font-medium">{pred.reorder}</span> units
                </div>
              </div>
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2v12a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
