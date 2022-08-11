import React from 'react'
import { ViewGridIcon } from '@heroicons/react/outline'

export default function Service() {
  return (
    <>
        <div className='w-full my-40 h-auto flex flex-col justify-center items-center'>
          <p className='text-sm uppercase text-gray-400'>My Skills</p>
          <h1 className='text-indigo-900 text-6xl font-bold text-center'>My Expertise</h1>
          <div className='flex justify-items-start items-center mx-40 gap-10 mt-20'>
            <div className='flex flex-col justify-center items-center'>
              {/* First Block */}
              <div className='flex justify-center items-center cursor-pointer'>
                {/* <GiCardboardBox className="w-10 h-10 bg-yellow-400 text-gray-100 m-3 p-1 shadow-xl rounded-md" /> */}
                <ViewGridIcon className="w-10 h-10 bg-yellow-400 text-gray-100 m-3 p-1 shadow-xl rounded-md" />
                <h2 className='text-xl text-indigo-600 font-semibold'>Strategy & Direction</h2>
              </div>
              <p className='md:text-base text-gray-400 md:text-center sm:text-left sm:text-sm'>
                Kami menyediakan produk yang baik Kami menyediakan produk yang baik Kami menyediakan produk yang baik Kami menyediakan produk yang baik
              </p>
            </div>
            <div className='flex flex-col justify-center items-center'>
              {/* Second Block */}
              <div className='flex justify-center items-center cursor-pointer'>
                {/* <GiCardboardBox className="w-10 h-10 bg-yellow-400 text-gray-100 m-3 p-1 shadow-xl rounded-md" /> */}
                <ViewGridIcon className="w-10 h-10 bg-red-400 text-gray-100 m-3 p-1 shadow-xl rounded-md" />
                <h2 className='text-xl text-indigo-600 font-semibold'>Branding & Logo</h2>
              </div>
              <p className='md:text-base text-gray-400 md:text-center sm:text-left sm:text-sm'>
                Kami menyediakan produk yang baik Kami menyediakan produk yang baik Kami menyediakan produk yang baik Kami menyediakan produk yang baik
              </p>
            </div>
          </div>
          <div className='flex justify-items-start items-center mx-40 gap-10 mt-20'>
            <div className='flex flex-col justify-center items-center'>
              {/* First Block */}
              <div className='flex justify-center items-center cursor-pointer'>
                {/* <GiCardboardBox className="w-10 h-10 bg-yellow-400 text-gray-100 m-3 p-1 shadow-xl rounded-md" /> */}
                <ViewGridIcon className="w-10 h-10 bg-blue-400 text-gray-100 m-3 p-1 shadow-xl rounded-md" />
                <h2 className='text-xl text-indigo-600 font-semibold'>Strategy & Direction</h2>
              </div>
              <p className='md:text-base text-gray-400 md:text-center sm:text-left sm:text-sm'>
                Kami menyediakan produk yang baik Kami menyediakan produk yang baik Kami menyediakan produk yang baik Kami menyediakan produk yang baik
              </p>
            </div>
            <div className='flex flex-col justify-center items-center'>
              {/* Second Block */}
              <div className='flex justify-center items-center cursor-pointer'>
                {/* <GiCardboardBox className="w-10 h-10 bg-yellow-400 text-gray-100 m-3 p-1 shadow-xl rounded-md" /> */}
                <ViewGridIcon className="w-10 h-10 bg-teal-400 text-gray-100 m-3 p-1 shadow-xl rounded-md" />
                <h2 className='text-xl text-indigo-600 font-semibold'>Branding & Logo</h2>
              </div>
              <p className='md:text-base text-gray-400 md:text-center sm:text-left sm:text-sm'>
                Kami menyediakan produk yang baik Kami menyediakan produk yang baik Kami menyediakan produk yang baik Kami menyediakan produk yang baik
              </p>
            </div>
          </div>
        </div>
    </>
  )
}
