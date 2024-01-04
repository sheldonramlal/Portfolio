import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Slideshow = () => {

    const settings = {
        dots: true,
        infinite: true, 
        speed:500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500
    }

    const data = [ 
        {
            name: "HTML",
            img: "/html.png"
        },
        {
            name: "JavaScript",
            img: "/js.jpg"
        },
    
    ]



  return (
   <Slider {...settings} className=' flex justify-center items-center w-56 h-56'>
        <div className='w-full h-36'>
            <img src='/html-5.png'  className='bg-contain h-36 w-36 m-auto'/>
            
        </div>
        <div className='w-full h-36'>
            <img src='/social.png'  className='bg-contain h-36 w-36 m-auto'/>
            
        </div>

        <div className='w-full h-full'>
            <img src='/js.jpg' className='bg-contain h-36 w-36 m-auto '/>
            
        </div>
        <div className='w-full h-full'>
            <img src='/react.png' className='bg-contain h-36 w-36 m-auto '/>
            
        </div>
        <div className='w-full h-full'>
            <img src='/tailwind.png' className='bg-contain h-36 w-36 m-auto '/>
            
        </div>
        <div className='w-full h-full'>
            <img src='/node.png' className='bg-contain h-36 w-36 m-auto '/>
            
        </div>


   </Slider>
  )
}



export default Slideshow