'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { loginUser } from '@/lib/api';

export default function LoginPage() {
  const [form, setForm] = useState({ identifier: '', password: '' });
  const [error, setError] = useState('');
  const router = useRouter();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try 
    {
      const res = await loginUser(form);
      localStorage.setItem('token', res.data.jwt);

      localStorage.setItem("user",JSON.stringify(res.data.user))
      alert("login scucceessfully")
      router.push('/dashboard');
    } 

    catch (err) 
    {
      setError(err.message || 'Login failed');
    }
 
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white shadow-md rounded-xl p-6 space-y-6">
        <h2 className="text-2xl font-bold text-center text-gray-800">Login</h2>

        <input
          name="identifier"
          onChange={handleChange}
          placeholder="Username or Email"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          name="password"
          type="password"
          onChange={handleChange}
          placeholder="Password"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleSubmit}
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Login
        </button>
        {error && <p className="text-red-600 text-center">{error}</p>}
      </div>
    </div>
  );
}
