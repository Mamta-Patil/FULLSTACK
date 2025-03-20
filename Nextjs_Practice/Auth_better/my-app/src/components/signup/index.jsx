"use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";

// export default function SignUp() {
//   const [userData, setUserData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     password: "",
//     passwordConfirmation: "",
//     image: null,
//     imagePreview: null,
//     imageBase64: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const router = useRouter();

//   // Update form field values
//   const updateField = (field, value) => {
//     setUserData((prev) => ({ ...prev, [field]: value }));
//   };

//   // Handle image upload and preview
//   const handleImageChange = (file) => {
//     if (!file) return;

//     const reader = new FileReader();
//     reader.onloadend = (event) => {
//       setUserData((prev) => ({
//         ...prev,
//         image: file,
//         imagePreview: event.target.result,
//         imageBase64: event.target.result,
//       }));
//     };

//     reader.readAsDataURL(file);
//   };

//   return (
//     <div>
//       <h1>Sign Up</h1>
//       <input
//         type="text"
//         placeholder="First Name"
//         value={userData.firstName}
//         onChange={(e) => updateField("firstName", e.target.value)}
//       />
//       <input
//         type="text"
//         placeholder="Last Name"
//         value={userData.lastName}
//         onChange={(e) => updateField("lastName", e.target.value)}
//       />
//       <input
//         type="email"
//         placeholder="Email"
//         value={userData.email}
//         onChange={(e) => updateField("email", e.target.value)}
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={userData.password}
//         onChange={(e) => updateField("password", e.target.value)}
//       />
//       <input
//         type="password"
//         placeholder="Confirm Password"
//         value={userData.passwordConfirmation}
//         onChange={(e) => updateField("passwordConfirmation", e.target.value)}
//       />
//       <input
//         type="file"
//         accept="image/*"
//         onChange={(e) => handleImageChange(e.target.files?.[0] || null)}
//       />
//       {userData.imagePreview && <img src={userData.imagePreview} alt="Preview" width="100" />}
//       <button
//         onClick={() => {
//           setLoading(true);
//           // Fake signup logic (replace with API call)
//           setTimeout(() => {
//             setLoading(false);
//             router.push("/signin"); // Redirect after signup
//           }, 2000);
//         }}
//         disabled={loading}
//       >
//         {loading ? "Signing up..." : "Sign Up"} 
//       </button>
//     </div>
//   );
// }"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2 } from "lucide-react";

export default function SignUp() {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordConfirmation: "",
    image: null,
    imagePreview: null,
    imageBase64: "",
  });

  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // Update form field values
  const updateField = (field, value) => {
    setUserData((prev) => ({ ...prev, [field]: value }));
  };

  // Handle image upload and preview
  const handleImageChange = (file) => {
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = (event) => {
      setUserData((prev) => ({
        ...prev,
        image: file,
        imagePreview: event.target.result,
        imageBase64: event.target.result,
      }));
    };

    reader.readAsDataURL(file);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 dark:bg-gray-900 px-4">
      <Card className="w-full max-w-md p-6 rounded-xl shadow-lg bg-white dark:bg-gray-800">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl text-gray-900 dark:text-white">
            Create Account
          </CardTitle>
        </CardHeader>

        <CardContent>
          <div className="grid gap-4">
            {/* First Name */}
            <div>
              <Label htmlFor="firstName">First Name</Label>
              <Input
                id="firstName"
                type="text"
                placeholder="John"
                value={userData.firstName}
                onChange={(e) => updateField("firstName", e.target.value)}
              />
            </div>

            {/* Last Name */}
            <div>
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                id="lastName"
                type="text"
                placeholder="Doe"
                value={userData.lastName}
                onChange={(e) => updateField("lastName", e.target.value)}
              />
            </div>

            {/* Email */}
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="johndoe@example.com"
                value={userData.email}
                onChange={(e) => updateField("email", e.target.value)}
              />
            </div>

            {/* Password */}
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="********"
                value={userData.password}
                onChange={(e) => updateField("password", e.target.value)}
              />
            </div>

            {/* Confirm Password */}
            <div>
              <Label htmlFor="passwordConfirmation">Confirm Password</Label>
              <Input
                id="passwordConfirmation"
                type="password"
                placeholder="********"
                value={userData.passwordConfirmation}
                onChange={(e) => updateField("passwordConfirmation", e.target.value)}
              />
            </div>

            {/* Image Upload */}
            <div className="grid gap-2">
              <Label htmlFor="image">Profile Picture</Label>
              <Input
                id="image"
                type="file"
                accept="image/*"
                onChange={(e) => handleImageChange(e.target.files?.[0] || null)}
              />
              {userData.imagePreview && (
                <img
                  src={userData.imagePreview}
                  alt="Profile Preview"
                  className="w-20 h-20 rounded-full border border-gray-300 dark:border-gray-600 mx-auto mt-2"
                />
              )}
            </div>

            {/* Sign Up Button */}
            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-medium py-2 rounded-lg transition-all duration-200"
              disabled={loading}
              onClick={() => {
                setLoading(true);
                // Fake signup logic (replace with API call)
                setTimeout(() => {
                  setLoading(false);
                  router.push("/signin"); // Redirect after signup
                }, 2000);
              }}
            >
              {loading ? <Loader2 size={16} className="animate-spin" /> : "Sign Up"}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
