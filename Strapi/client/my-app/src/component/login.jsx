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
  const GITHUB_AUTH_URL = "http://localhost:1337/api/connect/github?redirect=http://localhost:3000/connect/github/redirect";

  const GOOGLE_AUTH_URL = "http://localhost:1337/api/connect/google?redirect=http://localhost:3000/connect/google/redirect";

  const handleGitHubLogin = async() => {
    window.location.href = GITHUB_AUTH_URL;
    };

  const handleGoogleLogin=async()=>{
    window.location.href = GOOGLE_AUTH_URL;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try 
    {
      const res = await loginUser(form);
      console.log("response",res)
      localStorage.setItem("userinfo",res.data)
      localStorage.setItem('token', res.data.jwt);
      router.push('/blog');
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
        <button
          onClick={handleGitHubLogin}
          className="w-full bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-900 transition"
        >
          Sign in with GitHub
        </button>
        <button
          onClick={handleGoogleLogin}
          className="w-full bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-900 transition"
        >
          Sign in Google
        </button>

        {error && <p className="text-red-600 text-center">{error}</p>}
      </div>
    </div>
  );
}
