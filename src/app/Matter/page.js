'use client'
import React from 'react'
import Navbar from '../components/Navbar'
import '../styless/matter.css'




function page() {
  return (
    <div>
       <Navbar />
       <div className='sec1'>
            <h1>Why Should We Care?</h1>
       </div>
       <div className='sec2'>
            <h1>Will I be Hired?</h1>
            <h3>Historical hiring data used to train AI systems often reflects past discriminatory practices</h3>
            <h3>Video interviewing software may have difficulties accurately assessing facial expressions and speech patterns of minorities</h3>
            <h3>AI resume scanners may screen out candidates with "ethnic-sounding" names or non-traditional career paths</h3>
       </div>
       <div className='sec3'>
            <h1>However, AI can be helpful</h1>
            <h3>AI tools like Textio and Gender Decoder analyze job descriptions to flag biased language and suggest inclusive alternatives</h3>
            <h3>AI writing assistants like Grammarly Business can suggest more inclusive language alternatives</h3>
            <h3>Real-time captioning services that work across different dialects and speaking styles</h3>
       </div>
       <div className='sec4'>
            <h1>The Importance of the Algorithm</h1>
            <h3>Algorithms can rapidly scale existing biases to affect millions of people</h3>
            <h3>Feed into feedback loops that reinforce discriminatory patterns</h3>
            <h3>Influence public perception and representation</h3>
       </div>
    </div>
  )
}




export default page









