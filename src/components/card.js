import * as React from "react"

const Card = ({ className, children }) => (
    <div
    className={`py-12
      text-darkgrey text-tiny lg:text-md bg-grey shadow-lg rounded-2xl
       flex flex-col justify-around items-center
      ${className}`}
      
    >
      {children}
    </div>
  );
  
  export default Card;