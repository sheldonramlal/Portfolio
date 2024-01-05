import React from 'react'

const Skills = () => {

  const data = [ 
    {
        name: "HTML",
        img: "/html-5.png"
    },
    {
        name: "CSS",
        img: "/social.png"
    },
    {
      name: "JavaScript",
      img: "/js.jpg"
    },
    {
      name: "React",
      img: "/react.png"
    },
    {
      name: "TailwindCSS",
      img: "/tailwind.png"
    },
    {
      name: "Node Js",
      img: "/node.png"
    },
    {
      name: "WordPress",
      img: '/wordpress.png'
    }

]
  return (
    <div className='font-inter text-gray h-[calc(100vh-80px)] flex justify-center'>
        <div className='w-3/4  flex flex-col '>

            <div className='flex justify-center items-center h-32'>
              <h1 className='text-gray text-5xl font-bold'>Skills</h1>
            </div>


            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-4 '>
              {data.map((d) => (
                <div className='w-full rounded-xl  relative   border-2 hover:border-white hover:shadow-lg hover:brightness-150 border-neutral-800 '>
                  <div className='w-full h-16 flex justify-between items-center overflow-hidden relative '>
                    <p className='z-50 p-4 font-medium'>{d.name}</p>
                    <img src={d.img} className='object-cover w-1/2 h-full rounded-xl' />
                  </div>

                  <div className='absolute inset-0 bg-gradient-to-r from-black from-50% to-transparent to-99% rounded-xl z-10'></div>
                </div>
              ))}
            </div>

        </div>

    </div>
  )
}

export default Skills