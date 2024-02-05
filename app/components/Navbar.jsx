"use client"

import Link from 'next/link';
import React, { useState } from 'react';
import NavLink from './NavLink';
import MenuOverlay from './MenuOverlay';

const Bars3Icon = () => (
    <svg className='h-5 w-5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="3" y1="12" x2="21" y2="12"></line>
      <line x1="3" y1="6" x2="21" y2="6"></line>
      <line x1="3" y1="18" x2="21" y2="18"></line>
    </svg>
  );
  
  
  const XmarkIcon = () => (
    <svg className='h-5 w-5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  );


const navLinks = [
{
    title: "About",
    path: "#about",
},
{
    title: "Projects",
    path: "#projects",
},
{
    title: "Contact",
    path: "#contact",
}
]


const Navbar = () => {

  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className='fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100'>
        <div className='flex container lg:py-6 flex-wrap items-center justify-between mx-auto px-4 py-2'> 
            <Link href={"/"} className='text-2xl md:text-5xl '> 
            </Link>
            <div className='mobile-menu block md:hidden'>
              {!navbarOpen ? (
                    <button onClick={() => setNavbarOpen(true)} className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'> 
                        <Bars3Icon className='h-5 w-5'/>
                    </button>
                ) : (
                    <button onClick={() => setNavbarOpen(false)} className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'> 
                        <XmarkIcon className='h-5 w-5'/>
                    </button>
                )
              }
            </div>
            <div className='menu hidden md:block md:w-auto' id="navbar">
                <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
                   {
                     navLinks.map((link, index) => (
                        <li key={index}>
                            <NavLink href={link.path} title={link.title}/>
                        </li>
                     ))}
                </ul>
            </div>
        </div>
        {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  )
}

export default Navbar;