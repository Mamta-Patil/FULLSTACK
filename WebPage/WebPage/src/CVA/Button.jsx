"use client";

import { cva } from "class-variance-authority";
import clsx from "clsx";

// Define button variants using CVA
const buttonVariants = cva(
  "inline-flex items-center justify-center  font-bold  ",
  {
    variants: {
      variant: {
        // primary: "bg-red-400 rounded-md text-white hover:bg-pink-400 font-bold ",
        primary:"px-2 py-4 bg-gradient-to-r from-red-500 via-red-500 to-orange-500 hover:bg-gradient-to-r hover:from-orange-600 hover:via-red-500 hover:to-red-500 h-12 mt-6 text-white text-lg flex transition-duration: 0ms;",
        hero: "border border-white text-white rounded-sm  hover:bg-theme hover:text-white hover:border-theme ",
        secondary: "bg-theme   text-white rounded-[4px] hover:bg-white hover:text-theme border border-theme ",
        header: "bg-theme  font-medium   text-white rounded-[4px] ",
        reverse: "text-theme  font-bold border rounded-[4px] border-theme   hover:bg-theme hover:text-white ", 
      },

      disableHoverOnGroup: {
        true: "group-hover:hover:bg-transparent group-hover:hover:text-inherit", // Stops hover effect
        false: "",
      },
      
      size: {
        sm: "px-3 py-1 lg:py-3  text-sm",
        md: "px-6 py-2 text-sm",
        lg: "px-8 py-3 text-base ",
        

        //header
        hd: "px-4 py-1.5 text-sm",

        //about 

        at: "px-4 py-1 text-xs",

        //hero
        hr: "px-6 py-2 text-sm",

        //contact
        ct: " w-full px-6 py-3  text-md",

        //career
        cr: " w-[250px] py-3 text-base",

        //case study
        cs: "w-[245px] py-3 text-md",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      disableHoverOnGroup: false,

    },

    
  }
);

// Button component
export default function Button({ variant, size, className,   disableHoverOnGroup = false,
  children, ...props }) {
  return (
    <button
      className={clsx(buttonVariants({ variant, size  , disableHoverOnGroup}), className)}
      {...props}
    >
      {children}
    </button>
  );
}