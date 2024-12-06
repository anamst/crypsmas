import * as React from "react";

const Button = ({ children, className = "", imageSrc, altText = "icon" }) => {
  const handlePayment = async () => {
    //  try {
    //  const result = await fetch("/api/paycek");
    //  const { url } = await result.json();
    //  window.location.href = url;
    //  } catch (error) {
    //   console.error('Payment initialization failed:', error);
    //  }
    try {
      console.log('Starting PayCek payment request...');
      console.log('Button clicked');
      
      const functionUrl = '/.netlify/functions/paycek';
      console.log('Calling function:', functionUrl);
      
      const fetchResponse = await fetch(functionUrl);
      console.log('Response status:', fetchResponse.status);
      
      if (!fetchResponse.ok) {
        throw new Error(`HTTP error! status: ${fetchResponse.status}`);
      }
      
      const data = await fetchResponse.json();
      console.log('Data received:', data);
      
      if (data.error) {
        throw new Error(`API Error: ${data.error}`);
      }
      
      if (!data.url) {
        throw new Error('No payment URL in response');
      }
      
      console.log('Redirecting to:', data.url);
      window.location.href = data.url;
      
    } catch (error) {
      console.error('Payment initialization failed:', error);
      console.error('Error details:', {
        message: error.message,
        stack: error.stack
      });
    }
  };

  return (
    <button
      type="button"
      onClick={handlePayment}
      className={`
        ${className}
        relative flex items-center overflow-hidden rounded-full
        text-red bg-white font-medium shadow-xl
        transition-all duration-300 ease-in-out hover:text-white group
      `}>
      {" "}
      {imageSrc && (
        <img
          src={imageSrc}
          alt={altText}
          className="absolute left-0 w-14 h-14 object-contain"
        />
      )}{" "}
      <span className="absolute inset-0 bg-red transition-transform duration-300 ease-in-out transform scale-x-0 group-hover:scale-x-100 z-0 origin-left">
        {" "}
      </span>{" "}
      <span className="relative z-10 mx-auto py-3 text-md font-inter font-semibold">
        {" "}
        {children}{" "}
      </span>{" "}
    </button>
  );
};

export default Button;
