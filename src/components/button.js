import * as React from "react";

const Button = ({ children, className = "", imageSrc, altText = "icon", containerClass = "" }) => {
  const [amount, setAmount] = React.useState('');

  const handlePayment = async () => {
    try {
      console.log('Starting PayCek payment request...');
      
      const functionUrl = `/.netlify/functions/paycek?amount=${amount}`;
      console.log('Calling function:', functionUrl);
      
      const fetchResponse = await fetch(functionUrl, {
        method: 'GET',
        headers: {
          'Accept': 'application/json'
        }
      });
      
      console.log('Response status:', fetchResponse.status);
      
      const rawText = await fetchResponse.text();
      console.log('Raw response:', rawText);
      
      let data;
      try {
        data = JSON.parse(rawText);
      } catch (parseError) {
        console.error('Failed to parse response:', rawText);
        throw new Error('Invalid response from server');
      }
      
      if (data.error) {
        throw new Error(`API Error: ${data.error}`);
      }
      
      if (!data.url) {
        throw new Error('No payment URL in response');
      }
      
      console.log('PayCek URL:', data.url);
      window.location.href = data.url;
      
    } catch (error) {
      console.error('Payment initialization failed:', error);
      console.error('Error details:', {
        message: error.message,
        stack: error.stack
      });
      alert('Payment initialization failed. Please try again.');
    }
  };

  const handleAmountChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, '');
    setAmount(value);
  };

  return (
    <div className={`flex flex-col w-full ${containerClass}`}>
      <div className="w-full lg:w-1/2">
        <input
          type="text"
          value={amount}
          onChange={handleAmountChange}
          placeholder="Upisite iznos donacije u EUR"
          className="px-4 py-3 rounded-full text-center focus:outline-none focus:ring-2 focus:ring-red focus:border-transparent shadow-lg w-full"
        />
        <button
          type="button"
          onClick={handlePayment}
          className={`
            ${className}
            relative flex items-center overflow-hidden rounded-full
            text-red bg-white font-medium shadow-xl mt-4 w-full
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
          <span className="absolute inset-0 bg-red transition-transform duration-300 ease-in-out transform scale-x-0 group-hover:scale-x-100 z-0 origin-left" />
          <span className="relative z-10 mx-auto py-3 text-md font-inter font-semibold">
            {children}
          </span>
        </button>
      </div>
    </div>
  );
};

export default Button;