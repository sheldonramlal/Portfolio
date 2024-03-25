import React from 'react'

const Projects = () => {

  const data = [
    {
      name : "ReadIT",
      github: "https://github.com/sheldonramlal/watchlist-frontend",
      website: "https://watchlist-frontend-7nd5.onrender.com/",
      description: "Developed a dynamic full-stack website using React, Node.js, Express, and MongoDB, enabling users to explore a diverse range of books by category, search for specific titles, and conveniently purchase them. Implemented user authentication for personalized features, allowing users to sign up and curate their reading lists seamlessly.",
      icons: ['/js.jpg','/react.png', '/tailwind.png', '/node.png', 'express.png'],
    },
    {
      name : "Lift Logix",
      github: "https://github.com/sheldonramlal/liftlogix-frontend",
      website: "https://liftlogix.onrender.com",
      description: "A fullstack workout tracking app created using React, Node, Express and MongoDB. It allows for users to log in or register an account to use the app. Users can log their workouts, delete them or simply view all of their past workouts. Users can also view their dashboard which includes data about all their workouts such as total reps and weight lifted, and their favorite workout",
      icons: ['/js.jpg','/react.png', '/tailwind.png', '/node.png', 'express.png'],
    },
    {
      name : "ISS tracker",
      github: "https://github.com/sheldonramlal/isstracker",
      website: "https://sheldonramlal.github.io/isstracker/",
      description: "A simple HTML and JavaScript app that fetches the real time coordinates of the international space station and plots in on a map. It also shows the speed at which it is currently travelling. ",
      icons: ['/html-5.png', '/js.jpg'],
    },
    {
      name : "Weather app",
      github: "https://github.com/sheldonramlal/weather-app",
      website: "https://weather-app-sr-react.netlify.app/",
      description: "A Weather app created using React and tailwind. It fetches data about the current and hourly weather and the air quality index from the Openweathermap API. It also has a search function to find out the weather of any location as well as the user's location using their geolocation data. Using tailwind, it also has a dynamic background which changes after sunrise and sunset.",
      icons: ['/js.jpg','/react.png', '/tailwind.png' ],
    },
    {
      name : "Where we eating",
      github: "https://github.com/sheldonramlal/WhereWeEating",
      website: "https://where-we-eating.vercel.app",
      description: "A frontend app built using React which randomly shows restaurants across Trinidad. Users can also view restaurant's menu or order online if available. The restaurant's rating, distance from the user, if it is costly, and a handful of reviews are all included to help guide them where to eat. There is also the option to toggle 'Restaurants near me' for restaurants nearby.",
      icons: ['/js.jpg','/react.png', '/tailwind.png'],
    },
    {
      name : "Celestial Essence",
      website: "https://celestial-essence.com",
      description: "A modern E-commerce website for hand crafted scented candles, using Wordpress and Woocommerce",
      icons : ['/wordpress.png']
    }
  ]

  return (
    <div className='font-inter text-gray  flex justify-center'>
    <div className='w-3/4  flex flex-col '>

        <div className='flex justify-center items-center h-32'>
          <h1 className='text-gray text-5xl font-bold'>Projects</h1>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-4 '>
              {data.map((d) => (
                <div className='border border-neutral-800 rounded-xl h-98 p-5'>

                    <div className='flex justify-between border-b border-neutral-800 pb-3'>
                      <h1 className='text-xl lg:text-2xl font-medium'>{d.name}</h1>

                      <div className='flex h-6 '>

                        {
                          d.github && (
                        <div className='mx-2 rounded-md border-2 border-neutral-800 '>
                          <a href={d.github} target='_blank'>
                            <img src='/github.png' className='w-6 h-6 bg-white rounded-md '/>
                          </a>
                        </div>
                          )
                        }    

                        <div className='border-2 border-neutral-800 rounded-md'>
                          <a href={d.website} target='_blank'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                            </svg>
                          </a>
                        </div>

                      </div>

                    </div>

                    <div className='h-72 w-full flex flex-col justify-end  '>
                      <div className='py-2 h-full overflow-y-scroll no-scrollbar'>
                        <p className='md:text-sm'>{d.description}</p>
                      </div>

                      <div className='h-8 w-full border-t border-neutral-800 flex pt-2.5'>
                        {d.icons.map((i) => (
                          <div className='rounded-md h-8 w-8  border border-neutral-800 mx-2 flex items-center justify-center'>
                            <img className='w-6 h-6' src={i} />
                          </div>
                        ))}
                      </div>
                   </div>
                </div>
              ))}
            </div>

        </div>

        </div>
  )
}

export default Projects