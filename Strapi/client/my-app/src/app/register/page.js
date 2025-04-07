'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { registerUser } from '@/lib/api'; // your API function

export default function RegisterPage() {
  const [form, setForm] = useState({ username: '', email: '', password: '' });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await registerUser(form);
      const username = res?.user?.username || res?.data?.user?.username || 'User';
      setMessage(`User ${username} registered successfully!`);
      setError('');
      // Optionally redirect
      // router.push('/login');
    } catch (err) {
      setError(err.message || 'Something went wrong');
      setMessage('');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white shadow-md rounded-xl p-6 space-y-6">
        <h2 className="text-2xl font-bold text-center text-gray-800">Register</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="username"
            placeholder="Username"
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Register
          </button>
        </form>

        {message && <p className="text-green-600 text-center">{message}</p>}
        {error && <p className="text-red-600 text-center">{error}</p>}
      </div>
    </div>
  );
}


// 'use client';
// import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { useRouter } from 'next/navigation';
// import { registerUser } from '@/lib/api';

// export default function RegisterPage() {
//   const [form, setForm] = useState({ username: '', email: '', password: '' });
//   const [message, setMessage] = useState('');
//   const [error, setError] = useState('');
//   const dispatch = useDispatch();
//   const router = useRouter();

//   const handleChange = (e) => {
//     setForm({ ...form,   [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await registerUser(form);
//       const username = res?.user?.username || res?.data?.user?.username || 'User';
//       setMessage(`User ${username} registered successfully!`);
//       setError('');
//       // Optionally redirect or dispatch auth here
//       // router.push('/blogs');
//     } catch (err) {
//       setError(err.message || 'Something went wrong');
//       setMessage('');
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
//       <div className="w-full max-w-md bg-white shadow-md rounded-xl p-6 space-y-6">
//         <h2 className="text-2xl font-bold text-center text-gray-800">Register</h2>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input
//             name="username"
//             placeholder="Username"
//             onChange={handleChange}
//             className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           <input
//             name="email"
//             placeholder="Email"
//             onChange={handleChange}
//             className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           <input
//             name="password"
//             type="password"
//             placeholder="Password"
//             onChange={handleChange}
//             className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
//           >
//             Register
//           </button>
//         </form>

//         {message && <p className="text-green-600 text-center">{message}</p>}
//         {error && <p className="text-red-600 text-center">{error}</p>}
//       </div>
//     </div>
//   );
// }





// 'use client';

// import { registerUser } from '@/lib/api';
// import React, { useState } from 'react';
// // import { registerUser } from '@/lib/strapi';

// const Register = () => 
// {
//   const [formData, setFormData] = useState({ username: '', email: '', password: '' });
//   const [error, setError] = useState('');
//   const [message, setMessage] = useState('');

//   const handleChange = (e) => 
//   {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => 
//   {
//     e.preventDefault();
//     try 
//     {
//       const res = await registerUser(formData);
//       const username = res?.user?.username || res?.data?.user?.username || 'User';
//       setMessage(`User ${username} registered successfully!`);
//       setError('');
//     } 
//     catch (err) 
//     {
//       setError(err.message || 'Something went wrong');
//       setMessage('');
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
//       <div className="w-full max-w-md bg-white shadow-md rounded-lg p-8">
//         <h1 className="text-2xl font-bold mb-6 text-center text-teal-600">Register</h1>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
//             <input type="text" name="username" placeholder="Enter your username" onChange={handleChange} autoComplete="username" required className="w-full text-black px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500" />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
//             <input type="email" name="email" placeholder="Enter your email" onChange={handleChange} autoComplete="email" required className="w-full text-black px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500" />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
//             <input type="password" name="password" placeholder="Enter your password" onChange={handleChange} autoComplete="current-password" required className="w-full text-black px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500" />
//           </div>
//           <button type="submit" className="w-full bg-teal-600 text-white py-2 rounded-md hover:bg-teal-700 transition duration-200">Register</button>
//         </form>
//         {message && <p className="text-green-600 text-sm mt-4 text-center">{message}</p>}
//         {error && <p className="text-red-500 text-sm mt-4 text-center">{error}</p>}
//       </div>
//     </div>
//   );
// };

// export default Register;