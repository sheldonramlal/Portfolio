import React from 'react'
import gsap from 'gsap'
import { useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode } from "swiper/modules";
import { Link } from 'react-router-dom';

import "swiper/css";
import "swiper/css/navigation";

import projects from '../data/projects';
import { useNavigate } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const Projects1 = () => {
  const navigate = useNavigate();

  let headingRef = useRef(null);
  let cardRef = useRef(null);
  

  useGSAP(() => {
  
  
    gsap.from(headingRef.current, {
        y:50,
        opacity:0,
        duration:2,
        ease:"power3.out",
        scrollTrigger:{
            trigger: headingRef.current,
            start: "top 95%",
        }
    })

    gsap.from(".project-card", {
      y:100,
      opacity:0,
      duration:1,
      ease:"power3.out",
      stagger:0.15,
      scrollTrigger:{
          trigger: ".project-card",
          start: "top 85%",
      }

    })
  }, [])

  return (
    <section id='work' className='my-20 md:my-32'>
        <div className='px-5 mb-16 md:px-16'>
            <h2 ref={headingRef} className='text-5xl font-medium tracking-tight text-white md:text-7xl font-switzer'>Projects</h2>
        </div>

        <div className="pl-5 overflow-hidden md:pl-0 md:ml-16">
            {/* Swiper */}
            <Swiper
              modules={[Navigation, FreeMode]}
              slidesPerView="auto"
              spaceBetween={24}
              // freeMode={true}
              grabCursor={true}
              navigation={{
                prevEl: ".swiper-prev",
                nextEl: ".swiper-next",
              }}
              className="!overflow-visible"
            >
              
              {projects.map((project) => (
                <SwiperSlide
                  key={project.id}
                  className="w-full md:!w-[300px] "
                >
                  <Link to={`/projects/${project.slug}`}>
                   <div className="project-card">
                      <div  className="h-[450px] pr-5 md:px-0 overflow-hidden ">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="object-cover w-full h-full "
                        />
                      </div>
                      <div className='flex justify-center py-5'>
                        <h3 className='font-normal tracking-wide text-white uppercase font-switzer'>
                          {project.title}
                        </h3>
                      </div>
                    </div>
                    </Link>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Navigation Buttons */}
            <div className="flex justify-end gap-4 px-5 mt-2 md:px-16">
              <button className="px-3 py-3 transition border rounded-full swiper-prev border-white/20 hover:bg-zinc-800 hover:text-black">
               <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.79889 24H41.7989" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M17.7988 36L5.79883 24L17.7988 12" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>
              </button>
              <button className="px-3 py-3 text-white transition border rounded-full swiper-next border-white/20 hover:bg-zinc-800 hover:text-black">
                <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M41.9999 24H5.99994" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M30 12L42 24L30 36" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>
              </button>
            </div>
    </div>
    </section>
  )
}

export default Projects1