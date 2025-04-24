'use client';
import { useState, useEffect } from 'react';
import EditItemModal from './EditItemModal';

export default function InventoryList({ inventory }) {
  const [items, setItems] = useState(Array.isArray(inventory) ? inventory : []);
  const [predictions, setPredictions] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setItems(Array.isArray(inventory) ? inventory : []);
    setLoading(false);
  }, [inventory]);

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
        setError('Failed to fetch AI predictions: ' + err.message);
      }
    }
    fetchPredictions();
  }, [inventory]);

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`/api/inventory?id=${id}`, { method: 'DELETE' });
      if (res.ok) {
        setItems(items.filter((item) => item._id !== id));
      } else {
        setError('Failed to delete item');
      }
    } catch (error) {
      setError('Error deleting item: ' + error.message);
    }
  };

  if (loading) {
    return (
      <div className="bg-white p-6 rounded-xl shadow-lg">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Current Inventory</h3>
        <div className="animate-pulse space-y-4">
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-100 text-red-700 p-4 rounded-lg">Error: {error}. Please check MongoDB connection or AI service.</div>
    );
  }

  if (!items.length) {
    return (
      <div className="bg-white p-6 rounded-xl shadow-lg text-gray-600 text-center">
        No inventory items found. Click "Add Item" to start!
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
        <svg className="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
        Current Inventory
      </h3>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700">
              <th className="p-4 text-left font-semibold">Product</th>
              <th className="p-4 text-left font-semibold">Stock</th>
              <th className="p-4 text-left font-semibold">Reorder Point</th>
              <th className="p-4 text-left font-semibold">AI Status</th>
              <th className="p-4 text-left font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => {
              const prediction = predictions.find((pred) => pred.name === item.name) || {};
              const needsReorder = prediction.demand > item.stock || item.stock < item.reorderPoint;
              return (
                <tr
                  key={item._id}
                  className="border-b border-gray-200 hover:bg-gray-50 transition-all duration-200"
                >
                  <td className="p-4 text-gray-800">{item.name}</td>
                  <td className="p-4 text-gray-800">{item.stock}</td>
                  <td className="p-4 text-gray-800">{item.reorderPoint}</td>
                  <td className="p-4">
                    <div className="group relative">
                      {needsReorder ? (
                        <span className="text-red-600 font-medium flex items-center">
                          <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          Reorder Needed
                        </span>
                      ) : (
                        <span className="text-green-600 font-medium flex items-center">
                          <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          Stock Sufficient
                        </span>
                      )}
                      <div className="absolute hidden group-hover:block bg-gray-800 text-white text-xs rounded-lg p-2 mt-2 z-10 w-64">
                        {prediction.demand ? (
                          <>
                            <p>Predicted Demand: <span className="font-semibold">{prediction.demand}</span> units</p>
                            <p>AI Reorder Point: <span className="font-semibold">{prediction.reorder}</span> units</p>
                            <p className="mt-1">{needsReorder ? 'AI recommends reordering to meet demand.' : 'Stock is sufficient based on AI predictions.'}</p>
                          </>
                        ) : (
                          <p>No AI prediction available.</p>
                        )}
                      </div>
                    </div>
                  </td>
                  <td className="p-4 flex space-x-2">
                    <EditItemModal item={item} setItems={setItems} items={items} />
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="bg-gradient-to-r from-red-600 to-pink-600 text-white px-4 py-1.5 rounded-lg hover:from-red-700 hover:to-pink-700 transition-all duration-200 font-medium shadow-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}