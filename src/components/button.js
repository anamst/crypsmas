import React from 'react';

const Button = ({ imageSrc, children, className }) => {
  const handlePayment = async () => {
    try {
      console.log('Starting PayCek payment request...');
      console.log('Button clicked');
      
      const functionUrl = '/.netlify/functions/paycek';
      console.log('Calling function:', functionUrl);
      
      const fetchResponse = await fetch(functionUrl, {
        method: 'GET',
        headers: {
          'Accept': 'application/json'
        }
      });
      
      console.log('Response status:', fetchResponse.status);
      
      // Log the raw response for debugging
      const rawText = await fetchResponse.text();
      console.log('Raw response:', rawText);
      
      // Try to parse the response
      let data;
      try {
        data = JSON.parse(rawText);
      } catch (parseError) {
        console.error('Failed to parse response:', parseError);
        throw new Error('Invalid response from server');
      }
      
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
      onClick={handlePayment}
      className={`relative flex items-center justify-center ${className}`}
    >
      <img src={imageSrc} alt="Button background" className="w-full" />
      <span className="absolute font-libre text-white text-sm lg:text-lg">
        {children}
      </span>
    </button>
  );
};

export default Button;