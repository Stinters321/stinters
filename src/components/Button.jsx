import React from 'react';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-lg whitespace-nowrap cursor-pointer";
  
  const variants = {
    primary: "bg-[#2B80ED] hover:bg-[#1e65c4] text-white px-5 py-2 shadow-[0_0_15px_rgba(37,99,235,0.3)] hover:-translate-y-1",
    dark: "bg-[#1C222C] hover:bg-[#1C283D] border border-slate-700/50 text-white px-6 py-3 hover:-translate-y-1",
    outline: "bg-transparent border border-slate-700 hover:border-slate-500 text-slate-200 px-5 py-2"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;