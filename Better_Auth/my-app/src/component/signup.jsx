// // "use client";
// // import { registerUser } from "@/redux/authThunk";
// // import { useState } from "react";
// // import { useDispatch } from "react-redux";
// // import LoginPage from "./login";
// // // import { registerUser } from "@/redux/thunks/authThunk";

// // export default function SignupPage() {
// //   const dispatch = useDispatch();
// //   const [form, setForm] = useState({ email: "", password: "" });

// //   const handleChange = (e) => {
// //     setForm({ ...form, [e.target.name]: e.target.value });
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     dispatch(registerUser(form));
// //   };

// //   return (
// //     <div>
// //       <h1>Signup</h1>
// //       <form onSubmit={handleSubmit}>
// //         <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
// //         <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
// //         <button type="submit">Signup</button>
// //       </form>
// //       <LoginPage />
// //     </div>
// //   );
// // }
// "use client";
// import { registerUser } from "@/redux/authThunk";
// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import LoginPage from "./login";

// export default function SignupPage() {
//   const dispatch = useDispatch();
//   const [form, setForm] = useState({ email: "", password: "" });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(registerUser(form));

//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md">
//         <h1 className="text-2xl font-semibold text-center text-gray-700 mb-6">Signup</h1>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <input
//               type="email"
//               name="email"
//               placeholder="Email"
//               onChange={handleChange}
//               required
//               className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//           <div>
//             <input
//               type="password"
//               name="password"
//               placeholder="Password"
//               onChange={handleChange}
//               required
//               className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
//           >
//             Signup
//           </button>
//         </form>
//         {/* <p className="mt-4 text-sm text-center text-gray-600">
//           Already have an account?{" "}
//           <a href="/auth/login" className="text-blue-600 hover:underline">
//             Login
//           </a>
//         </p> */}
//         <LoginPage />
//       </div>

//     </div>
//   );
// }
"use client";
import { registerUser } from "@/redux/authThunk";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { loading, error } = useSelector((state) => state.auth);
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await dispatch(registerUser(form));
    
    if (registerUser.fulfilled.match(response)) {
      alert("Signup successful! Redirecting to login...");
      router.push("/auth/login"); // Navigate to login page after signup
    } else {
      alert(`Error: ${response.payload}`);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md">
        <h1 className="text-2xl font-semibold text-center text-gray-700 mb-6">Signup</h1>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
            disabled={loading}
          >
            {loading ? "Signing up..." : "Signup"}
          </button>
        </form>
        <p className="mt-4 text-sm text-center text-gray-600">
          Already have an account?{" "}
          <a href="/auth/login" className="text-blue-600 hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
