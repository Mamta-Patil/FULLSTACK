import { createContext, useEffect, useState } from "react";

export const themeContext=createContext()
export function ThemeContextProviderFunction({children}){
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

      return(
        <>
        <themeContext.Provider value={{ darkMode, setDarkMode }} >
            {children}
        </themeContext.Provider>
        </>
      )

}