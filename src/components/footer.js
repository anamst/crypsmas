import * as React from 'react'
import { StaticImage } from "gatsby-plugin-image"

const Footer = () => {
    return ( 
        <main className='font-tekst'>
            <div className='w-screen py-2 lg:py-4 bg-grey px-6 lg:px-20 xl:px-32 flex flex-row justify-between items-center'>
                <div className='flex flex-row justify-around items-start'>
                    <StaticImage src="../images/ubiklogo.png" width={100} />
                </div>
                <div className='flex flex-row  justify-between items-center'>
                    <a href="https://www.linkedin.com/company/ubik-udruga-za-blockchain-i-kriptovalute/" target="_blank" className='w-8 lg:w-10'>
                        <StaticImage src='../images/linkedin.png' width={80} height={80} />
                    </a>
                    <a href="https://www.instagram.com/udruga_ubik/" target="_blank" className='w-8 mx-4 lg:w-10 lg:mx-6'>
                        <StaticImage src='../images/instagram.png' width={80} height={80} />
                    </a>
                    <a href="https://x.com/UbiKhr" target="_blank" className='w-8 lg:w-10'>
                        <StaticImage src='../images/twitter.png' width={80} height={80} />
                    </a>
                </div>
                
            </div>
        </main>
    )
}

export default Footer