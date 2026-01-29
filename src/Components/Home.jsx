import React, { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { SplitText } from 'gsap/SplitText'
import About from './About'
import Projects1 from './Projects1'
import Contact from './Contact'

// import Slideshow from './Slideshow'
const Home = () => {
    gsap.registerPlugin(SplitText);

//    document.fonts.ready.then(() => {
//     const split = new SplitText(".titles", { type: "chars" });
//    });

    const marqueeRef = useRef(null);
    const containerRef = useRef(null);
    const mm = gsap.matchMedia();

     useGSAP(() => {
       
      const split = new SplitText(".titles", { type: "chars" });
        gsap.from(split.chars, {
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: "expo.out",
            stagger: 0.05,
           
        })

        const el = marqueeRef.current;
        gsap.set(el, {
             xPercent: 0,
             willChange: "transform",
            });
        
      

        const setupMarquee = (duration) => {

            gsap.killTweensOf(el);
            gsap.set(el, { x: 0, willChange: "transform" });

            gsap.to(el, {
                xPercent: -50,
                duration,
                ease: "linear",
                repeat: -1,
            });
        };

        mm.add("(max-width: 768px)", () => {
            setupMarquee(20); // 🔥 faster on mobile
        });

        mm.add("(min-width: 769px)", () => {
            setupMarquee(25); // slower on desktop
        });

        return () => {
        split.revert();
    };
       
      }, { scope: containerRef });

    
  
  
  return (
   <main className=''>

    {/* hero */}
    <section id='home' className=''  ref={containerRef}>
        <div className="w-full h-[100dvh] bg-[url('/hero-bg-statue.webp')]  bg-center bg-no-repeat bg-cover">

            <div className="flex flex-col w-full h-full overflow-hidden ">
                {/* Marquee */}
                <div ref={marqueeRef} className="flex items-end p-0 m-0 w-max whitespace-nowrap mix-blend-difference font-switzer h-3/5 will-change-transform">
                    <span className="font-semibold text-[120px] lg:text-[280px] text-white p-0 m-0 leading-none tracking-tight" >
                     Sheldon Ramlal —
                    </span>
                    <span className=" font-semibold text-[120px] lg:text-[280px] text-white p-0 m-0 leading-none tracking-tight">
                     Sheldon Ramlal —
                    </span>
                    
                </div>
                
                <div className="w-full px-5 md:px-16 h-2/5">
                        <div className="flex flex-col justify-end h-full pb-10 text-4xl font-medium text-white md:text-6xl md:justify-center md:pb-0 font-switzer mix-blend-difference">
                        {/* titles */}
                            <div className="py-2 overflow-hidden titles">
                                Designer
                            </div>

                            <div className="py-2 overflow-hidden titles">
                                Developer
                            </div>

                        </div>                    
                </div>

            </div>      
        </div>
    </section>
    <About />
    <Projects1 />
    <Contact />

   </main>
  )
}

export default Home