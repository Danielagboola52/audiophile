// src/components/Button.js
export default function Button({ children, variant = "primary", className = "", ...props }) {
  const base = "px-8 py-3 font-bold text-sm uppercase tracking-wider transition-colors rounded";
  
  const variants = {
    primary: "bg-orange-500 text-white hover:bg-orange-400",
    secondary: "bg-black text-white hover:bg-gray-800",
    outline: "border border-current hover:bg-black hover:text-white"
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}