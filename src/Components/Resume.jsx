import React from 'react'
import pdf from '../SheldonRamlal_Resume.pdf'

const Resume = () => {
  return (
    <div className='font-inter text-gray h-[calc(100vh-80px)] flex justify-center'>
        <div className='w-3/4  flex flex-col '>

            <div className='flex justify-center items-center h-32'>
              <h1 className='text-gray text-5xl font-bold'>Resume</h1>
            </div>

            <div>
                <iframe
                  title="PDF Viewer"
                  src={pdf}
                  width="100%"
                  height="500px"
                 
                ></iframe>
              </div>

            </div>

            </div>
  )
}

export default Resume