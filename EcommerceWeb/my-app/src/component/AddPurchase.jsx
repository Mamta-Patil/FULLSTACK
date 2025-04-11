"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";

export default function AddPurchase() {
  const [itemName, setItemName] = useState("");
  const [message, setMessage] = useState("");
  const { data: session } = useSession();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!session) {
      setMessage("Please log in to add purchases.");
      return;
    }

    try {
      const response = await fetch("/api/purchases", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ itemName }),
      });

      const data = await response.json();
      if (data.error) {
        throw new Error(data.error);
      }

      setMessage("Purchase added successfully!");
      setItemName("");
    } catch (error) {
      setMessage(error.message || "Failed to add purchase.");
    }
  };

  return (
    <div className="p-4">
      <h3 className="text-lg font-semibold mb-2">Add Purchase (Test)</h3>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          placeholder="Enter item name (e.g., Laptop)"
          className="p-2 border rounded flex-1"
        />
        <button
          type="submit"
          className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Add
        </button>
      </form>
      {message && <p className="mt-2 text-sm">{message}</p>}
    </div>
  );
}