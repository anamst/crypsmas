import React, { useState } from "react";
import Layout from "../components/layout"
import  Hero  from "../components/hero"
import { StaticImage } from "gatsby-plugin-image"
import Card from "../components/card"
import Button from "../components/button"
import btn from '../images/btn.png'
import ProgressBar from "../components/progressbar";
import bgsiva from '../images/bgsiva.png'
import bgppl from '../images/bgppl.png'



const IndexPage = () => {
  const target = 10000;
  const value = 0;

  return (
    <>
      <Layout>
        <Hero />
        <section className="w-full h-full relative bg-contain bg-center" style={{ backgroundImage: `url(${bgsiva})` }}>
          <div className="flex flex-col justify-around items-start pt-14 px-6 lg:px-20 xl:px-32">
            <h2 className="font-libre text-bordo uppercase italic text-md lg:text-lg lg:pt-20">Podržite inicijativu</h2>
            <p className="font-libre text-darkgrey text-sm pb-8 lg:pb-10 lg:text-md2 pt-4 lg:pt-8">Udruga za blockchain i kriptovalute organizira dobrotvnornu inicijativu darivanja s ciljem podupiranja djelovanja SOS Dječjeg sela Hrvatska.</p>
            <div className="flex flex-col justify-around items-center lg:flex-row lg:items-stretch lg:mt-10 lg:mb-20">
              <Card className="lg:w-1/3 my-6 lg:my-0 lg:h-full">  
                <StaticImage src="../images/hmblogo.png" placeholder="blurred" className="w-48" />
                <p className="pt-8 px-8">SOS Dječje selo Hrvatska skrbi za <strong>djecu bez odgovarajuće roditeljske skrbi.</strong></p>
                <p className="px-8 pb-8">U SOS Zajednicama mladih, mladi <strong>dobivaju smještaj,
                    savjetovanje</strong> i priliku da steknu <strong>ključne životne vještine.</strong></p>
              </Card>
              <Card className="lg:w-1/3 mb-14 lg:my-0 lg:h-full">
                <StaticImage src="../images/srce.png" placeholder="blurred"  />
                <p className="pt-8 px-8"><strong>Cilj</strong> akcije darivanja je prikupiti sredstva u svrhu sanacije klizišta u SOS Zajednici mladih Zagreb.</p>
                <p className="pb-8 px-8">Akcija traje <strong>do 31.12.2025.</strong>, a donirati možete u kriptovalutama ili direktnom uplatom na naš IBAN.</p>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full h-full bg-scroll relative bg-contain bg-center text-center" style={{ backgroundImage: `url(${bgppl})` }}>
         {/*   <StaticImage src="../images/mobilepplshake.png" placeholder="blurred" className="w-full md:hidden" imgClassName="md:hidden"  />
          <StaticImage src="../images/desktoppplshake.png" placeholder="blurred" className="w-full py-10 hidden md:block" imgClassName="hidden md:block" /> */}
          <div className="flex flex-col justify-around items-center pt-14 px-6 lg:px-20 xl:px-32 lg:py-20">
            <h2 className="font-libre text-bordo uppercase text-lg lg:text-2xl italic pt-8">cilj: 10000 EUR!</h2>
            <h2 className="font-libre text-bordo uppercase text-lg lg:text-2xl italic pt-8 hidden">cilj: 20000 EUR!</h2>
            <p className="font-libre text-darkgrey text-sm lg:text-md2 lg:w-1/2 py-8 lg:py-12">
              <strong>Pomozite nam</strong> da uljepšamo blagdane i ulazak u novu godinu našim najmlađim sugrađanima!
            </p>
            <Button imageSrc={btn} containerClass="items-center">DONIRAJ KRIPTO</Button>
            <p className="font-inter text-darkgrey text-sm lg:text-md pt-2 lg:pt-4 pb-16">Ili uplatom na IBAN: HR0324020061100858697 <br></br> Opis plaćanja: Donacija za humanitarnu akciju</p>
          </div>
        {/*   <StaticImage src="../images/mobilepplhappy.png" placeholder="blurred" className="w-full md:hidden lg:hidden xl:hidden" imgClassName="md:hidden" />
          <StaticImage src="../images/desktoppplhappy.png" placeholder="blurred" className="w-full py-10 hidden md:block" imgClassName="hidden md:block" /> */}
        </section>
        <section className="w-full h-full bg-scroll relative bg-cover bg-center text-center" style={{ backgroundImage: `url(${bgsiva})` }}>
          <div className="flex flex-col justify-around items-center pt-14 px-6 lg:px-20 xl:px-32 py-14 lg:py-20">
            <h2 className="font-libre text-bordo uppercase italic text-md lg:text-lg">Dosad je prikupljeno:</h2>
            <ProgressBar value={0} target={10000} className="mt-8" />
            <p className="font-inter text-tiny lg:text-sm italic pt-2 text-darkgrey font-light lg:pt-4">Akcija traje do 31.12.2025.</p>
          </div>
        </section>
      </Layout>
      
    </>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
