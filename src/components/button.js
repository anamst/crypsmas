import * as React from "react";

const Button = ({ children, className = "", imageSrc, altText = "icon" }) => {
  return (
    <button
      type="button"
      className={`
        ${className}
        relative flex items-center overflow-hidden rounded-full
        text-red bg-white font-medium
        transition-all duration-300 ease-in-out hover:text-white group
      `}
    >
      
      {imageSrc && (
        <img
          src={imageSrc}
          alt={altText}
          className="absolute left-0 w-14 h-14 object-contain"
        />
      )}

     
      <span
        className="absolute inset-0 bg-red transition-transform duration-300 ease-in-out transform scale-x-0 group-hover:scale-x-100 z-0 origin-left"
      ></span>

      
      <span className="relative z-10 mx-auto py-3 text-md font-inter font-semibold">{children}</span>
    </button>
  );
};

export default Button;
