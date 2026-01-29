import React from 'react'
import gsap from 'gsap'
import { useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
gsap.registerPlugin(ScrollTrigger);

const About = () => {

    const textRef = useRef(null);
    
     useGSAP(() => {
        gsap.fromTo(
        textRef.current,
        { "--reveal": "0%" },
        {
            "--reveal": "100%",
            ease: "none",
            scrollTrigger: {
            trigger: textRef.current,
            start: "top 90%",
            end: "top 45%",
            scrub: true,
            },
        }
        );
    }, []);

return(
    <>
    <section id='about' className='px-5 mt-20 md:mt-32  border-b border-[#2a2a2a] pb-20 md:pb-32 md:px-16'> 
        <div className='w-full mx-auto md:max-w-4xl '>
            <span ref={textRef} className='text-4xl md:text-6xl font-medium leading-[1.05] reveal-text tracking-tight font-switzer'>
As a designer and developer, I focus on creating clear, intuitive digital experiences that are visually refined, functional, and built with purpose.            </span>
        </div>
    </section>
    </>
)
}

export default About
    