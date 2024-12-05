'use client'
import React from 'react'
import Navbar from '../components/Navbar'
import Timeline from '../components/Timeline'
import '../styless/history.css'
import Image from 'next/image'; // Add this import at the top of the file




function page() {
  return (
    <div>
        <Navbar/>
        <div className='sec1'>
            <h1>-History-</h1>
        </div>
        <div className='sec2'>
            <h1>Origins of the Tech Industry</h1>
            <div className='origins1'>
                <h3>The technology industry is relatively young; its origins can be traced to the 1904 invention of the two-element electron tube. </h3>
                <img src='/baby.png' alt=""/>
            </div>
           <div className='origins2'>
                <h3>Developments such as the transistor followed, as well as integrated circuits in the 1950s, and analog devices in 1960. Many of these inventions were a result of military research</h3>
                <img src='/transistor.jpg' alt=""/>
           </div>
           <div className='origins3'>
                <h3>The 1970s brought the invention of the integrated circuit board and the microprocessors that soon followed, made home and personal computers a possibility in subsequent years.</h3>
                <img src='/computer1.jpeg' alt=""/>
           </div>
            <div className='origins4'>
                <h3>However, until the internet was available to common consumers, computers were not very popular. In the 1990s, when the internet was available to all, there was an explosion in the use of personal computers. That explosion made household names out of entrepreneurs such as Bill Gates and Steve Jobs.</h3>
                <img src='steve.jpeg'/>
            </div>
            <div className='origins5'>
                <h3>The early part of 2000 saw a drastically reduced demand for computers, but in 2003 and 2004 the market experienced a turnaround as consumers sought multi-tasking computers that could handle a myriad of photo, video, and audio applications.</h3>
                <img src='/computer2.jpeg' alt=""/>
            </div>
            <div className='origins6'>
            <h3>  Since then the technology has spread to mobile phones and tablets that offer all the services of a normal stationary computer. Cloud computing has revolutionized data storage and as a result devices are continually getting smaller and more advanced.</h3>
               <img src='/cloud.jpeg' />
            </div>
        </div>
        <div className='sec3'>
        <Timeline />

        </div>
    </div>
  )
}




export default page









