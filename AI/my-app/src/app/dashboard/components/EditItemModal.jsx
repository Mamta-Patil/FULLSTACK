'use client';
import { useState } from 'react';

export default function EditItemModal({ item, setItems, items }) {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: item.name,
    stock: item.stock,
    reorderPoint: item.reorderPoint,
  });
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`/api/inventory`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: item._id,
          name: formData.name,
          stock: parseInt(formData.stock),
          reorderPoint: parseInt(formData.reorderPoint),
        }),
      });
      if (res.ok) {
        setItems(
          items.map((i) =>
            i._id === item._id
              ? { ...i, name: formData.name, stock: parseInt(formData.stock), reorderPoint: parseInt(formData.reorderPoint) }
              : i
          )
        );
        setIsOpen(false);
        setError(null);
      } else {
        const { error } = await res.json();
        setError(error || 'Failed to update item');
      }
    } catch (error) {
      setError('Error updating item: ' + error.message);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-4 py-1.5 rounded-lg hover:from-yellow-600 hover:to-orange-600 transition-all duration-200 font-medium shadow-sm"
      >
        Edit
      </button>
      {isOpen && (
        <div className="modal-overlay fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 transition-opacity duration-300">
          <div className="modal-content bg-white rounded-2xl p-8 shadow-2xl max-w-md w-full transform transition-all duration-300 scale-95 animate-modal-in">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Edit Item</h3>
            {error && (
              <div className="bg-red-100 text-red-700 p-3 rounded-lg mb-4 animate-fade-in">{error}</div>
            )}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Product Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all duration-200"
                  required
                  placeholder="Enter product name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Stock</label>
                <input
                  type="number"
                  value={formData.stock}
                  onChange={(e) => setFormData({ ...formData, stock: e.target.value })}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all duration-200"
                  required
                  min="0"
                  placeholder="Enter stock quantity"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Reorder Point</label>
                <input
                  type="number"
                  value={formData.reorderPoint}
                  onChange={(e) => setFormData({ ...formData, reorderPoint: e.target.value })}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all duration-200"
                  required
                  min="0"
                  placeholder="Enter reorder point"
                />
              </div>
              <div className="flex justify-end space-x-3 mt-6">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition-all duration-200 font-medium"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-4 py-2 rounded-lg hover:from-yellow-600 hover:to-orange-600 transition-all duration-200 font-medium shadow-md"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}