'use client'
import React from 'react'
import Navbar from '../components/Navbar'
import '../styless/sources.css'


function page() {
  return (
    <div>
        <Navbar />
        <div className='sourcess'>
         <img src='/sources.png'/>
        </div>
       
    </div>
  )
}

export default page