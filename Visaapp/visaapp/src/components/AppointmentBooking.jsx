"use client"
import { useState } from 'react';

export default function AppointmentBooking({ setMessages, language }) {
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');

  const bookAppointment = () => {
    // Mock booking logic
    setMessages((prev) => [
      ...prev,
      { text: `Appointment booked for ${date} at ${location}`, sender: 'bot' },
    ]);
  };

  return (
    <div className="p-4 bg-purple-100 rounded-lg">
      <h2 className="text-lg font-semibold mb-2">Appointment Booking</h2>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="w-full p-2 mb-2 border rounded-lg"
      />
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Location"
        className="w-full p-2 mb-2 border rounded-lg"
      />
      <button
        onClick={bookAppointment}
        className="w-full p-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
      >
        Book Appointment
      </button>
    </div>
  );
}