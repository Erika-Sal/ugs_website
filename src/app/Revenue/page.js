'use client'
import Image from "next/image";
import '../styless/Revenue.css'
import Navbar from '../components/Navbar';
import Image from 'next/image'; // Add this import at the top of the file

export default function page() {
    return (
      <>
      <Navbar/>
      <div className="sec1">
      <h1>-Big Tech-</h1>
    </div>
      <div className="TopCompanies">
        <h1>-Top Big Tech Companies Based on Annual Revenue-</h1>
      </div>
 
      <div className="Images">
      <Image
          src="https://wallpapers.com/images/hd/microsoft-logo-modern-design-yog3vbpgtu79aasj.png"
          style={{ width: '100px', height: 'auto' }}/>
      <Image
          src="https://logodownload.org/wp-content/uploads/2013/12/apple-logo-5.png"
          style={{ width: '100px', height: 'auto' }}/>
      <Image
          src="https://download.logo.wine/logo/Oracle_Corporation/Oracle_Corporation-Logo.wine.png"
          style={{ width: '150px', height: 'auto' }}/>


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


      <div className="text2">
        <h1>Microsoft</h1>
        <h1>Apple</h1>
        <h1>Oracle</h1>
      </div>


      <div className="pieChart">
      <Image
        src="https://i.ibb.co/87ZZzrF/microsoft-Finish.png"
        style={{ width: '250px', height: 'auto' }}/>
      <Image
        src="https://i.ibb.co/L6rCT13/apple-Finish.png"
        style={{ width: '250px', height: 'auto' }}/>
      <Image
        src="https://i.ibb.co/82LH5dz/oracle-Finish.png"
        style={{ width: '250px', height: 'auto' }}/>  
      </div>
     </>
     
    );
  }

