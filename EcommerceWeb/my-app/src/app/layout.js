// 'use client'
import AuthProvider from '@/lib/authprovider';
import './globals.css';
// import { SessionProvider } from 'next-auth/react';

export const metadata = {
  title: 'Chatbot App',
  description: 'A personalized chatbot with Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}