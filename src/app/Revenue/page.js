'use client'
import Image from "next/image";
import '../styless/Revenue.css'
import CompanySelector from '../components/CompanySelector'
import Navbar from '../components/Navbar';

export default function page() {
    return (
      <>
      <Navbar/>
      <div className="sec1">
      <h1>-Big Tech-</h1>
    </div>
    <div className="sec2">
   <div className="TopCompanies">
        <h1>-Top Big Tech Companies Based on Annual Revenue-</h1>
      </div>
      <div className="sec2">
<div className="Images">
      <img
          src="/microsoft.png"
          style={{ width: '100px', height: 'auto' }} alt=""/>
      <img
          src="/apple.png"
          style={{ width: '100px', height: 'auto' } } alt=""/>
      <img
          src="/oracle.png"
          style={{ width: '150px', height: 'auto' }} alt=""/>


      </div>


      <div className="text1">
        <h1>Microsoft</h1>
        <h1>Apple</h1>
        <h1>Oracle</h1>
      </div>


      <div className="Rev">
        <h1>(3.8 Trillion)</h1>
        <h1>(2.2 Trillion)</h1>
        <h1>(320 Billion)</h1>
      </div>


      <div className="demIndustry">
        <h1>-Demographics of Minorities in Each Company-</h1>
      </div>


      <CompanySelector />
      </div>
    </div>
   
 
      
     </>
     
    );
  }

