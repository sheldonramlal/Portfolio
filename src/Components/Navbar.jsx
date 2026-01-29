import React from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react'




const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu =() => {
        setIsOpen(prev => !prev);
    }

    const menuRef = useRef(null)



    const navigate = useNavigate();

    const handleNav = (id) => {
        toggleMenu();
        navigate("/");

        setTimeout(() => {
            document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        }, 0);
    };


    
   const tl = useRef(null);

    useGSAP(() => {
    // set initial hidden state
    gsap.set(".menu-item", {
        y: 50,
        opacity: 0,
    });

    tl.current = gsap.timeline({ paused: true });

    tl.current.to(".menu-item", {
        y: 0,
        opacity: 1,
        stagger: 0.08,
        duration: 0.6,
        ease: "power3.out",
        delay: 0.2,
    });
    }, []); 

    useEffect(() => {
        if (!tl.current) return;

        isOpen ? tl.current.play() : tl.current.reverse();
        const handleClickOutside = (event) => {
        // If menu is open and click is outside the menu
         if (isOpen && menuRef.current && !menuRef.current.contains(event.target)) {
            setIsOpen(false);
         }
  };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);


   


  return (
    <>
        <div  className='absolute top-0  flex justify-end w-full text-white border-b border-[#2a2a2a] z-50 px-5 py-4 md:px-16'>
        {/* menu icon */}
            <div onClick={toggleMenu} className='cursor-pointer '>
                <svg width="30" height="30" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.94971 11.9497H39.9497" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7.94971 23.9497H39.9497" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7.94971 35.9497H39.9497" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
        </div>
        

            <div ref={menuRef} className={`fixed top-0 right-0 z-50 w-full md:w-1/3 h-screen bg-[#0f0f0f]  transition transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                
                <div className='flex flex-row px-5 h-16 items-center md:pr-16  justify-between border-b border-[#2a2a2a] ' >

                    <button className='flex items-center px-4 py-2 ml-5 space-x-2 tracking-wide text-white border font-switzer'>
                        <a href="mailto:sheldonramlal99@gmail.com">Lets Connect</a>
                        <svg width="20" height="20" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M41.9999 24H5.99994" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M30 12L42 24L30 36" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>

                    </button>

                    <div onClick={toggleMenu} className='flex justify-end cursor-pointer ' >
                        <svg width="30" height="30" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 8L40 40" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M8 40L40 8" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>

                </div>
                <nav className="flex justify-center w-full h-full text-white ">
                    <ul className='flex flex-col  px-10 w-full  h-3/4     font-switzer *:text-4xl *:md:text-5xl *:py-8 *:border-b *:border-dashed *:border-[#2a2a2a] '>
                        <li className="menu-item">
                             <button onClick={() => handleNav("home")}>Home</button>
                        </li>

                        <li className="menu-item">
                             <button onClick={() => handleNav("about")}>About</button>
                        </li>

                        <li className="menu-item">
                             <button onClick={() => handleNav("work")}>Work</button>
                        </li>

                        <li className="menu-item">
                             <button onClick={() => handleNav("contact")}>Contact</button>
                        </li>

                        <li className="menu-item">
                            <a href="https://github.com/sheldonramlal" target="_blank" rel="noopener noreferrer" onClick={toggleMenu}>Github</a>
                        </li>
                    </ul>

                </nav>
                </div>

    
        
    </>
        
  )
}

export default Navbar