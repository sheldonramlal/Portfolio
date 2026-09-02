const projects = [
  {
    id: 1, 
    slug: "Spotify-wrapped",
    title: "Spotify Wrapped", 
    image: "/spotify.png",
    url:"https://spotify-analytics-i3yt.vercel.app/",
    techStack: ["React", "FastAPI", "TailwindCSS"], 
    description: "A clone of Spotify Wrapped built using React and FastAPI. It fetches data from the Spotify API and displays the user's top artists, top tracks, and recently played tracks. It also has a feature to view the user's top artists and tracks for different time ranges (last 4 weeks, last 6 months, and all time)." 
  },
  {
    id: 2, 
    slug: "blogging-website",
    title: "Blogging website", 
    image: "/blog.png",
    url:"https://next-blog-red-rho.vercel.app/",
    techStack: ["NextJS", "PostgreSQL", "TailwindCSS"], 
    description: "A fullstack blogging platform built using NextJS and PostgreSQL, featuring the ability to create an account, write blogs and view others blog posts. Used tailwindCSS for responsive design and user-friendly interface." 
  },
  { 
    id: 3, 
    slug: "weather-app",
    title: "Weather App",
    image: "/wa.png", 
    url:"https://weather-app-sr-react.netlify.app/",
    techStack: ["React", "TailwindCSS", "OpenWeatherMap API"],
    description: "A Weather app created using React and tailwind. It fetches data about the current and hourly weather and the air quality index from the Openweathermap API. It also has a search function to find out the weather of any location as well as the user's location using their geolocation data. Using tailwind, it also has a dynamic background which changes after sunrise and sunset."
  },
  { 
    id: 4, 
    slug: "celestial-essence",
    title: "Celestial Essence", 
    image: "/ce_new.png", 
    url:"https://celestial-essence.com/",
    techStack: ["Wordpress", "Woocommerce"],
    description:"A modern E-commerce website for hand crafted scented candles, using Wordpress and Woocommerce" 
  },
  {
    id: 5, 
    slug: "youtube-mp3-downloader",
    title: "YouTube mp3 downloader", 
    image: "/mp3.png", 
    techStack: ["Python"],
    description: "A command line application built using Python that converts and downloads YouTube videos to mp3 format." 
  },
  { 
    id: 6, 
    slug: "iss-tracker",
    title: "ISS Tracker", 
    image: "/iss.png", 
    url:"https://sheldonramlal.github.io/isstracker/",
    techStack: ["HTML", "JavaScript"],
    description: "A simple HTML and JavaScript app that fetches the real time coordinates of the international space station and plots in on a map. It also shows the speed at which it is currently travelling."
  },
  { 
    id: 7, 
    slug: "where-we-eating",
    title: "Where we eating", 
    image: "/wwe.png", 
    url:"https://where-we-eating.vercel.app/",
    techStack: ["React", "TailwindCSS"],
    description: "A frontend app built using React which randomly shows restaurants across Trinidad. Users can also view restaurant's menu or order online if available. The restaurant's rating, distance from the user, if it is costly, and a handful of reviews are all included to help guide them where to eat. There is also the option to toggle 'Restaurants near me' for restaurants nearby."
  },
];

export default projects;