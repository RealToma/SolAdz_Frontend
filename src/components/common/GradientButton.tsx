import React from "react";

interface GradientButtonProps {
  text?: string;
  onClick?: () => void;
  className?: string;
}

export const GradientButton: React.FC<GradientButtonProps> = ({
  text = "Get Your Invitation Link",
  onClick,
  className = ""
}) => {
  return (
    <button
      onClick={onClick}
      className={`
        py-4 px-[30px] sm:px-[45px] md:px-[85px] rounded-[7px]
        bg-custom-gradient
        text-white text-base md:text-xl font-bold uppercase tracking-wide 
        transition-transform hover:scale-105 
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
        ${className}
      `}
      style={{
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        textShadow: "1px 1px 2px rgba(0, 0, 0, 0.1)"
      }}
    >
      {text}
    </button>
  );
};
