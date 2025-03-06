

// import React, { useEffect, useState } from "react";
// import { FaSun, FaMoon } from "react-icons/fa";

// const Dark = () => {
//   const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

//   useEffect(() => {
    
//     localStorage.setItem("theme", theme);
//   }, [theme]);

//   const toggleTheme = () => {
//     setTheme(theme === "dark" ? "light" : "dark");
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
//       <div className="text-center text-gray-900 dark:text-gray-100">
//         <h1 className="text-3xl font-bold mb-4">
//           {theme === "dark" ? "Hello Dark Mode" : "Hello Light Mode"}
//         </h1>
//         <button
//           onClick={toggleTheme}
//           className="p-5 text-center rounded-full bg-gray-300 dark:bg-gray-600 transition-colors duration-300"
//         >
//           {theme === "dark" ? <FaSun size={24} /> : <FaMoon size={24} />}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Dark;