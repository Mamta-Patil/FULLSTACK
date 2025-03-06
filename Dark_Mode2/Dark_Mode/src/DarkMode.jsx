// "use client"
import { useEffect, useState } from "react";

export default function DarkMode() {
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark" || 
    (!localStorage.getItem("theme") && window.matchMedia("(prefers-color-scheme: dark)").matches)
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (

    <>
    <button 
      onClick={() => setDarkMode(!darkMode)} 
      className="p-2 bg-gray-400 dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg"
    >
      {darkMode ? "🌙 Dark" : "☀️ Light"}
    </button>

   <div className="min-h-screen bg-pink-400 text-black dark:bg-blue-950 dark:text-white">
       <h1>
        roman reings 
        </h1>
   </div>

    </>

  );
}
