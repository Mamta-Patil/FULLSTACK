"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Chatbot App
        </Link>
        <div className="flex items-center gap-4">
          {session ? (
            <>
              <span>Hello, {session.user.email}</span>
              <Link href="/purchases" className="text-blue-300 hover:underline">
                Add Purchase
              </Link>
              <button
                onClick={() => signOut({ callbackUrl: "/auth/login" })}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Sign Out
              </button>
            </>
          ) : (
            <>
              <Link href="/auth/login" className="text-blue-300 hover:underline">
                Log In
              </Link>
              <Link
                href="/auth/signup"
                className="text-blue-300 hover:underline"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}