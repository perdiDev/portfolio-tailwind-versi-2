import React from 'react'
import { TemplateIcon, ViewGridIcon } from '@heroicons/react/outline'
import { Element } from 'react-scroll'

export default function Service() {
  return (
    <>
      <Element id='service' name='service'>
        <div className='w-full my-40 h-auto flex flex-col justify-center items-center'>
          <p className='text-sm uppercase text-gray-400'>My Skills</p>
          <h1 className='text-indigo-900 text-6xl font-bold text-center'>My Expertise</h1>
          <div className='flex justify-items-start items-center mx-40 gap-10 mt-20'>
            <div className='flex flex-col justify-center items-center'>
              {/* First Block */}
              <div className='flex justify-center items-center cursor-pointer'>
                <TemplateIcon className="w-10 h-10 bg-yellow-400 text-gray-100 m-3 p-1 shadow-xl rounded-md" />
                <h2 className='text-xl text-indigo-600 font-semibold'>Web Developer</h2>
              </div>
              <p className='md:text-base text-gray-400 md:text-center sm:text-left sm:text-sm'>
                Make amazing website with new technology like Tailwind Css and NextJs. I have experience to make website portfolio, landing page, dashbord, and etc. 
              </p>
            </div>
            <div className='flex flex-col justify-center items-center'>
              {/* Second Block */}
              <div className='flex justify-center items-center cursor-pointer'>
                {/* <GiCardboardBox className="w-10 h-10 bg-yellow-400 text-gray-100 m-3 p-1 shadow-xl rounded-md" /> */}
                <ViewGridIcon className="w-10 h-10 bg-red-400 text-gray-100 m-3 p-1 shadow-xl rounded-md" />
                <h2 className='text-xl text-indigo-600 font-semibold'>Design Grafis</h2>
              </div>
              <p className='md:text-base text-gray-400 md:text-center sm:text-left sm:text-sm'>
                Design grafis always make me free. I have experience to make design banner, vektor, ig feed, etc.
              </p>
            </div>
          </div>
        </div>
      </Element>
    </>
  )
}
