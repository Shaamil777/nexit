import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  children: React.ReactNode;
}

export function Button({ variant = "primary", className = "", children, ...props }: ButtonProps) {
  const baseStyles = "transition-all duration-300 font-semibold rounded-xl";
  let variantStyles = "";
  
  if (variant === "primary") {
    variantStyles = "bg-[#0CA7A5] text-white hover:bg-[#0a8c8b] shadow-sm";
  } else if (variant === "secondary") {
    variantStyles = "bg-white text-[#0CA7A5] shadow-[0_8px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.2)] hover:bg-gray-50 active:scale-95";
  } else if (variant === "outline") {
    variantStyles = "border-2 border-[#0CA7A5] text-[#0CA7A5] hover:bg-[#0CA7A5] hover:text-white";
  }

  return (
    <button className={`${baseStyles} ${variantStyles} ${className}`} {...props}>
      {children}
    </button>
  );
}
