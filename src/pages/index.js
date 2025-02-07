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
            <h2 className="font-libre text-bordo uppercase italic text-md lg:text-lg lg:pt-20">podržite akciju</h2>
            <p className="font-libre text-darkgrey text-sm pb-8 lg:pb-10 lg:text-md2 pt-4 lg:pt-8">Povodom božićnih blagdana i kraja godine, <strong>Udruga za blockchain i kriptovalute</strong> organizira akciju darivanja s ciljem podupiranja djelovanja <strong>Hrvatske mreže za beskućnike</strong> (HMB).</p>
            <div className="flex flex-col justify-around items-center lg:flex-row lg:items-stretch lg:mt-10 lg:mb-20">
              <Card className="lg:w-1/3 my-6 lg:my-0 lg:h-full">  
              <div className="bg-white shadow-2xl rounded-full py-12 lg:py-14 px-8 lg:px-10">
                <StaticImage src="../images/hmblogo.png" placeholder="blurred" className="w-24" />
            </div>
                <p className="pt-8 px-8"><strong>Hrvatska mreža za beskućnike</strong> je neprofitna organizacija koja od 2013. godine pomaže društveno isključenim skupinama, poput beskućnica/ka i građana na rubu siromaštva, pružajući <strong>podršku i pomoć</strong> inicijativama koje se bave problematikom beskućništva, <strong>podizanjem svijesti</strong> i <strong>informiranosti javnosti</strong> te <strong>destigmatizacijom</strong> beskućništva.</p>
              </Card>
              <Card className="lg:w-1/3 mb-14 lg:my-0 lg:h-full">
                <StaticImage src="../images/srce.png" placeholder="blurred"  />
                <p className="pt-4 px-8"><strong>Cilj</strong> ovogodišnje akcije darivanja je prikupiti iznos od <span className="strong text-red">10.000 eura</span> u svrhu podržavanja rada Hrvatske mreže za beskućnike. Akcija traje <strong>od 11.12. do 31.12.2024</strong> i donirati možete u <strong>kriptovalutama</strong> ili direktnom uplatom na naš IBAN.</p>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full h-full bg-scroll relative bg-contain bg-center text-center" style={{ backgroundImage: `url(${bgppl})` }}>
         {/*   <StaticImage src="../images/mobilepplshake.png" placeholder="blurred" className="w-full md:hidden" imgClassName="md:hidden"  />
          <StaticImage src="../images/desktoppplshake.png" placeholder="blurred" className="w-full py-10 hidden md:block" imgClassName="hidden md:block" /> */}
          <div className="flex flex-col justify-around items-center pt-14 px-6 lg:px-20 xl:px-32 lg:py-20">
            <h2 className="font-libre text-bordo uppercase text-lg lg:text-2xl italic pt-8 line-through">cilj: 10000 EUR!</h2>
            <h2 className="font-libre text-bordo uppercase text-lg lg:text-2xl italic pt-8">cilj: 20000 EUR!</h2>
            <p className="font-libre text-darkgrey text-sm lg:text-md2 lg:w-1/2 py-8 lg:py-12">
              <strong>Pomozite nam</strong> da uljepšamo blagdane i ulazak u novu godinu našim nevidljivim sugrađanima!
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
            <ProgressBar value={14663} target={20000} className="mt-8" />
            <p className="font-inter text-tiny lg:text-sm italic pt-2 text-darkgrey font-light lg:pt-4">Akcija traje do 31.12.2024.</p>
          </div>
        </section>
      </Layout>
      
    </>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
