import { StaticImage } from "gatsby-plugin-image";
import React, { useState, useEffect } from "react";

const Header = ({ children }) => {
  const [isScrolled, setScrolled] = useState(false);

  // Update `isScrolled` based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) { // Adjust threshold as needed
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); 
  }, []);

  return (
    <header
      className={`w-full fixed top-0 z-10 transition-colors duration-300 ${
        isScrolled ? "bg-grey shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="py-2 px-6 lg:px-20 xl:px-32 lg:py-4 flex items-center">
        <StaticImage src="../images/ubiklogo.png" className="w-36 lg:w-64" alt="Logo" />
        {children}
      </div>
    </header>
  );
};

export default Header;
