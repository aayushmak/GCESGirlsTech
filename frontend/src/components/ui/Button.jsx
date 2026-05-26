import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const Button = ({ children, className, variant = 'primary', size = 'md', ...props }) => {
  const baseStyles = "inline-flex items-center justify-center transition-all duration-300 font-medium active:scale-95";

  const variants = {
    primary: "bg-secondary text-white hover:bg-secondary/90 shadow-md",
    secondary: "bg-primary text-white hover:bg-primary/90",
    accent: "bg-accent text-white hover:brightness-110 shadow-lg",
    outline: "border-2 border-secondary text-secondary hover:bg-secondary hover:text-white",
    ghost: "text-primary hover:bg-primary/10"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm rounded-lg",
    md: "px-6 py-3 text-base rounded-xl",
    lg: "px-10 py-4 text-lg rounded-2xl",
    xl: "px-14 py-5 text-xl rounded-2xl font-semibold"
  };

  return (
    <button
      className={twMerge(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
