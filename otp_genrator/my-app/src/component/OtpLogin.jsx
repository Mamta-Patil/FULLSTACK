// 'use client'
// import { auth } from '@/lib/firebase'
// import { PhoneAuthProvider, RecaptchaVerifier, signInWithCredential, signInWithPhoneNumber } from 'firebase/auth'
// import React, { useState } from 'react'
// import { useRouter } from 'next/navigation'

// const OtpLogin = () => {
//     const [phoneNumber, setPhoneNumber] = useState('')
//     const [otp, setOtp] = useState('')
//     const [verificationId, setVerificationId] = useState(null)
//     const router = useRouter();

//     const setupRecaptcha = () => {
//         if (!window.recaptchaVerifier) {
//             window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
//                 size: 'invisible',
//                 callback: () => {
//                     console.log('Recaptcha solved');
//                 }
//             });
//         }
//     };

//     const handleSendOtp = async () => {
//         if (!phoneNumber.startsWith('+')) {
//             alert('Please include country code, e.g. +91xxxxxxxxxx');
//             return;
//         }

//         setupRecaptcha();
//         const appVerifier = window.recaptchaVerifier;

//         try {
//             const confirmationResult = await signInWithPhoneNumber(auth, phoneNumber, appVerifier);
//             setVerificationId(confirmationResult.verificationId);
//             console.log('OTP sent successfully');
//         } catch (error) {
//             console.log('handle send', error);
//         }
//     };

//     const VerifyOtp = async () => {
//         if (!verificationId || !otp) {
//             alert('Please enter the OTP and ensure it’s sent.');
//             return;
//         }

//         const credential = PhoneAuthProvider.credential(verificationId, otp);
//         try {
//             await signInWithCredential(auth, credential);
//             alert('OTP verified successfully');
//             router.push('/dashboard');  
//         } catch (error) {
//             console.log(error);
//             alert('OTP verification failed. Please try again.');
//         }
//     }

//     return (
//      <div className="flex flex-col gap-4 p-6 max-w-md mx-auto bg-gray-800 rounded-2xl shadow-lg mt-40">
//     <label className="text-gray-200">Phone Number</label>
//     <input 
//         type="tel" 
//         placeholder="e.g. +91xxxxxxxxxx" 
//         value={phoneNumber} 
//         onChange={(e) => setPhoneNumber(e.target.value)} 
//         className="p-3 rounded-lg border border-gray-600 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
//     />

//     <button 
//         onClick={handleSendOtp} 
//         className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition"
//     >
//         Send OTP
//     </button>

//     <label className="text-gray-200">OTP</label>
//     <input 
//         type="text" 
//         placeholder="Enter OTP" 
//         value={otp} 
//         onChange={(e) => setOtp(e.target.value)} 
//         className="p-3 rounded-lg border border-gray-600 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
//     />

//     <button 
//         onClick={VerifyOtp} 
//         className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition"
//     >
//         Verify OTP
//     </button>

//     <div id="recaptcha-container" className="mt-4"></div>
// </div>

//     )
// }

// export default OtpLogin;
"use client";
import { auth } from "@/lib/firebase";
import { PhoneAuthProvider, RecaptchaVerifier, signInWithCredential, signInWithPhoneNumber } from "firebase/auth";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const OtpLogin = () => {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [otp, setOtp] = useState("");
    const [verificationId, setVerificationId] = useState(null);
    const router = useRouter();

    const setupRecaptcha = () => {
        if (!window.recaptchaVerifier) {
            window.recaptchaVerifier = new RecaptchaVerifier(auth, "recaptcha-container", {
                size: "invisible",
                callback: () => {
                    console.log("Recaptcha solved");
                },
            });
        }
    };

    const handleSendOtp = async () => {
        if (!phoneNumber.startsWith("+")) {
            alert("Please include country code, e.g. +91xxxxxxxxxx");
            return;
        }

        setupRecaptcha();
        const appVerifier = window.recaptchaVerifier;

        try {
            const confirmationResult = await signInWithPhoneNumber(auth, phoneNumber, appVerifier);
            setVerificationId(confirmationResult.verificationId);
            console.log("OTP sent successfully");
        } catch (error) {
            console.log("handle send", error);
        }
    };

    const VerifyOtp = async () => {
        if (!verificationId || !otp) {
            alert("Please enter the OTP and ensure it’s sent.");
            return;
        }

        const credential = PhoneAuthProvider.credential(verificationId, otp);
        try {
            await signInWithCredential(auth, credential);
            alert("OTP verified successfully");
            router.push("/dashboard");
        } catch (error) {
            console.log(error);
            alert("OTP verification failed. Please try again.");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-700">
            <div className="w-full max-w-sm p-8 bg-white rounded-2xl shadow-xl">
                <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">Phone OTP Login</h1>

                <div className="space-y-4">
                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                            Phone Number
                        </label>
                        <input
                            id="phone"
                            type="tel"
                            placeholder="e.g. +91xxxxxxxxxx"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            className="w-full p-3 rounded-lg border border-gray-300 bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                        />
                    </div>

                    <button
                        onClick={handleSendOtp}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Send OTP
                    </button>

                    <div>
                        <label htmlFor="otp" className="block text-sm font-medium text-gray-700 mb-1">
                            OTP
                        </label>
                        <input
                            id="otp"
                            type="text"
                            placeholder="Enter OTP"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                            className="w-full p-3 rounded-lg border border-gray-300 bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                        />
                    </div>

                    <button
                        onClick={VerifyOtp}
                        className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition focus:outline-none focus:ring-2 focus:ring-green-500"
                    >
                        Verify OTP
                    </button>
                </div>

                <div id="recaptcha-container" className="mt-4"></div>
            </div>
        </div>
    );
};

export default OtpLogin;