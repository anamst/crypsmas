import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import { useWindowSize } from "../hooks/usewindowsize";
import Button from './button'
import btn from '../images/btn.png'

const Hero = ({ children }) => {
  const size = useWindowSize();
  const isMobile = size.width < 768;

  console.log("Window size:", size); 
  console.log("Is mobile:", isMobile); 

  return (
    <div
      style={{
        display: "grid",
        height: "100vh", 
        position: "relative",
        overflow: "hidden", 
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
          src="../images/bgsiva.png"
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
        <div className="container mx-auto w-full px-4 lg:px-16 xl:px-12 flex flex-col lg:flex-row-reverse justify-start items-center lg:justify-between lg:items-center"> 
            <div className="">
             <a href="https://sos-dsh.hr/" target="_blank"><StaticImage src="../images/hmblogo.png" placeholder="blurred" className="w-full lg:w-72 lg:h-72" /></a>   
            </div>
            <div className="flex flex-col justify-between items-start text-left pt-8">
                <h2 className="font-libre text-bordo uppercase italic text-md lg:text-lg">Dobrotvorna inicijativa</h2>
                <h1 className="font-libre text-black uppercase font-semibold text-lg lg:text-2xl lg:py-4">SOS DJEČJE SELO</h1>
                <p className="font-inter text-darkgrey text-sm pb-8 lg:pb-10 lg:text-md2 lg:w-2/3 italic">Pozivamo Vas da podržite UBIK humanitarnu akciju namijenjenu sanaciji klizišta u SOS Zajednici mladih Zagreb!</p>
                <Button imageSrc={btn} containerClass="items-start">DONIRAJ KRIPTO</Button>
                <p className="font-inter text-darkgrey text-sm lg:text-md pt-2 lg:pt-4 pb-16">Ili uplatom na IBAN: HR0324020061100858697 <br></br> Opis plaćanja: Donacija za humanitarnu akciju</p>
            </div>
            
        </div>       
      </div>
    </div>
  );
}
export default Hero;