'use client'
import React from 'react'
import Navbar from '../components/Navbar'
import FlipCard from '../components/FlipCard'

import '../styless/matter.css'

function page() {
  return (
    <div>
       <Navbar />
       <div className='sec1'>
            <h1>Why Should We Care?</h1>
       </div>
       <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
    </div>
       <div className='sec2'>
            <h1>Will I be Hired?</h1>
            <div className='cards'>
            <FlipCard 
        frontImage="/robot.png" 
        frontText="What percentage of employers use AI tools in the hiring process?"
        backText="According to Gartner Research, 78% of employers now use AI tools in their hiring process" 
      />
      <FlipCard 
        frontImage="/robot.png"
        frontText="What percentage of companies regularly test their AI systems for bias?"
        backText="A Harvard Business Review study found that only 32% of companies regularly test their AI systems for bias" 
      />
            </div>
          
       </div>
       <div className='sec3'>
            <h1>However, AI can be helpful</h1>
            <div className='sec3-1'>
               <img src='/textio.png' />
               <h3>AI tools like Textio and Gender Decoder analyze job descriptions to flag biased language and suggest inclusive alternatives</h3>
            </div>
            <div className='sec3-2'>
                <h3>AI writing assistants like Grammarly Business can suggest more inclusive language alternatives</h3>
               <img src='/grammarly.jpeg' />
            </div>
            <div className='sec3-3'>
               <img src='/otter.jpg'/>
               <h3>Real-time captioning services that work across different dialects and speaking styles</h3>
            </div>
       </div>
       <div className='sec4'>
            <h1>The Importance of the Algorithm</h1>
            <div className='cards'>
            <FlipCard 
               frontImage="/robot.png"
               frontText="Scaling Biases"
               backText="Algorithms can amplify biases at an unprecedented scale, impacting millions. For instance, biased hiring systems may unfairly filter out qualified candidates based on factors like gender, ethnicity, or background." 
               />
               <FlipCard 
                    frontImage="/robot.png"
                    frontText="Feedback Loops"
                    backText="ALgorithms often reinforce existing discriminatory patterns through feedback loops." 
               />
               <FlipCard 
                    frontImage="/robot.png"
                    frontText="Sharing Public Perception"
                    backText="Algorithms control what people see, shaping public perception and representation. Misrepresentation or exclusion of marginalized groups perpetuates harmful stereotypes and inequities." 
               />
            </div>
     
       </div>
       <div className='sec5'>
          <h1>So What?</h1>
          <h3>The way we design and use AI has far-reaching consequences. From hiring practices to public perception, algorithms shape the opportunities we receive, the narratives we consume, and the biases we unknowingly reinforce.</h3>
          <h3>By understanding the potential pitfalls of AI and advocating for more transparent, equitable systems, we can ensure these tools empower rather than exclude. It is up to individuals, companies, and policymakers to hold AI accountable and prioritize fairness in its design and application.</h3>
       </div>
    </div>
  )
}




export default page









