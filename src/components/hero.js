import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import { useWindowSize } from "../hooks/usewindowsize";
import Button from './button'
import btn from '../images/btn.png'

const Hero = ({ children }) => {
  const size = useWindowSize();
  const isMobile = size.width < 768;

  console.log("Window size:", size); // Debugging
  console.log("Is mobile:", isMobile); // Debugging

  return (
    <div
      style={{
        display: "grid",
        height: "100vh", // Full viewport height
        position: "relative",
        overflow: "hidden", // Prevent overflow
      }}
    >
      {isMobile ? (
        <StaticImage
          style={{
            gridArea: "1/1",
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
          layout="fullWidth"
          alt="Mobile background"
          src="../images/bg-mobile.png"
          formats={["auto", "webp", "avif"]}
        />
      ) : (
        <StaticImage
          style={{
            gridArea: "1/1",
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
          layout="fullWidth"
          alt="Desktop background"
          src="../images/bglg.png"
          formats={["auto", "webp", "avif"]}
        />
      )}
      <div
        style={{
          gridArea: "1/1",
          position: "relative",
          placeItems: "top",
          display: "grid",
          paddingTop: "80px",
        }}
      >
        <div className="container mx-auto w-full px-4 lg:px-16 xl:px-12 flex flex-col lg:flex-row justify-around items-center lg:justify-between lg:items-center"> 
            <div className="flex flex-col justify-between items-start text-left">
                <h2 className="font-libre text-bordo uppercase italic text-md lg:text-lg">humanitarna akcija</h2>
                <h1 className="font-libre text-black uppercase font-semibold text-lg lg:text-2xl lg:py-4">merry crypsmas</h1>
                <p className="font-inter text-darkgrey text-sm pb-8 lg:pb-10 lg:text-md2 lg:w-2/3 italic">Pozivamo vas da podržite UBIK humanitarnu akciju namijenjenu pomaganju jednoj od društveno najugroženijih skupina!</p>
                <Button imageSrc={btn} className="w-full lg:w-1/2">DONIRAJ</Button>
            </div>
            <div className="bg-white shadow-2xl rounded-full py-12 lg:py-16 px-8">
                <StaticImage src="../images/hmblogo.png" className="w-24 lg:w-72" />
            </div>
            
        </div>       
      </div>
    </div>
  );
}
export default Hero;