// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//       >
//         {children}
//       </body>
//     </html>
//   );
// }

// import "./globals.css";
// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body>{children}</body>
//     </html>
//   );
// }


import { Inter } from "next/font/google";
import "./globals.css";
// import Navbar from "../components/Navbar";
import { SessionProvider } from "next-auth/react";
import Navbar from "@/component/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Chatbot App",
  description: "A personalized chatbot with purchase history",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>
          <Navbar />
          <main className="min-h-screen bg-gray-100">{children}</main>
        </SessionProvider>
      </body>
    </html>
  );
} 