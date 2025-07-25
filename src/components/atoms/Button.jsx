import React, { forwardRef } from "react";
import { cn } from "@/utils/cn";

const Button = forwardRef(({ 
  className, 
  variant = "primary", 
  size = "md", 
  children, 
  ...props 
}, ref) => {
  const baseClasses = "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  
const variants = {
    primary: "gradient-bg text-white hover:shadow-lg hover:scale-105 focus:ring-primary-500 shadow-md",
    secondary: "bg-white text-gray-900 border border-gray-300 hover:bg-gray-50 hover:shadow-md focus:ring-primary-500",
    outline: "border-2 border-primary-500 text-primary-600 hover:bg-primary-50 hover:shadow-md focus:ring-primary-500",
    ghost: "text-primary-600 hover:bg-primary-50 hover:text-primary-700 focus:ring-primary-500",
    success: "success-bg text-white hover:shadow-xl hover:scale-105 focus:ring-success-500 shadow-lg font-semibold"
  };
  
  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-sm", 
    lg: "px-6 py-3 text-base",
    xl: "px-8 py-4 text-lg",
    xxl: "px-12 py-6 text-xl"
  };
  
  return (
    <button
      className={cn(baseClasses, variants[variant], sizes[size], className)}
      ref={ref}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = "Button";

export default Button;