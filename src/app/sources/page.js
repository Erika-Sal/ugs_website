'use client'
import React from 'react'
import Navbar from '../components/Navbar'
import '../styless/sources.css'
import Image from 'next/image'; // Add this import at the top of the file



function page() {
  return (
    <div>
        <Navbar />
        <div className='sourcess'>
         <Image src='/sources.png'/>
        </div>
       
    </div>
  )
}

export default page