'use client'
import React from 'react'
import Link from 'next/link'
const Navbar = () => {

    return (
    <div>
      <nav className='navbar'>
        <div className='brand-title'><Link href="/" style={{textDecoration:"none", color:"black"}}>E&E</Link></div>
        <div className='navbar-links'>
          <ul>
                <li><Link href='/History'>History</Link></li>
                <li><a href='/Revenue'>Big Tech</a></li>
                <li><a href='/Matter'>Why Care?</a></li>
            </ul>
        </div>
      </nav>
    </div>
    )
  
}

export default Navbar