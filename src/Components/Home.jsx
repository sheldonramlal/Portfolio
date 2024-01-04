import React from 'react'
import Slideshow from './Slideshow'
const Home = () => {
  return (
    <div className='font-inter text-gray h-[calc(100vh-80px)] flex justify-center'>
        <div className='w-3/4  flex flex-col lg:flex-row'>
            
            <div className='w-full h-full lg:w-2/3 flex flex-col justify-center items-center lg:items-start'> 
                <h2 className='text-2xl  pb-4 text-center font-thin'>Sheldon Ramlal</h2>
                <p className='text-center  animate-text bg-gradient-to-r from-teal-500  via-purple-500 to-orange-500 bg-clip-text text-transparent text-5xl font-black'>Junior Developer</p>
            </div>

            <div className='w-full h-full lg:w-1/3  flex justify-center items-start lg:items-center '>
                <Slideshow />
            </div>

        </div>
    </div>
  )
}

export default Home