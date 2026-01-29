import React from 'react'
import gsap from 'gsap'
import { useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, ScrambleTextPlugin);


const Contact = () => {
    const container = useRef(null);
    
    useGSAP(() => {
        const tl = gsap.timeline({
             scrollTrigger: {
                trigger: container.current,
                start: "top 99%",
                once: true,
            },
        })

        gsap.from(".heading", {
            y:50,
            opacity:0,
            duration:2,
            ease:"power3.out",
            scrollTrigger:{
                trigger:".heading",
                start: "top 95%",
            }
        
        })
        

        tl.to(".email", {
          duration: 3,
          scrambleText: {
            text: "sheldonramlal99@gmail.com",
            chars: "10",
            revealDelay:1,
            speed: 1,
          },
        })
          .to(
          ".number",
          {
            duration: 3,
            scrambleText: {
              text: "1(868) 380-4527",
              chars: "10",
              revealDelay:0,
              speed: 1,
            },
          },
          "-=0.4"
        );

    },[]);

  return (
    <section id='contact'  className='px-5 mt-20 text-white md:mt-32 md:px-16 font-switzer h-[40vh] space-y-10 '>
        <h2 className='text-5xl font-medium tracking-tight md:text-7xl heading'>Get in touch</h2>

        <div ref={container} className='pt-10 flex flex-col items-end space-y-4 text-2xl md:text-6xl font-medium leading-[1.05] uppercase tracking-tight'>
            <a className='email' href="mailto:sheldonramlal99@gmail.com"> 1011010010101010101101010</a>
            <a className='number' href="tel:1(868) 380-4527"> 1010110100101</a>
        </div>
    </section>
  )
}

export default Contact