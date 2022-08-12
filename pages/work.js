import Image from "next/image";
import { Element } from "react-scroll";
import portfolio1 from "../public/portfolio1.jpg"
import portfolio2 from "../public/portfolio2.jpg"
import portfolio3 from "../public/portfolio3.png"
import portfolio4 from "../public/portfolio4.jpg"

export default function work() {
  return (
    <>
      <Element id="work" name="work">
        <div className='w-full my-20 h-auto flex flex-col justify-center items-center'>
          <p className='text-sm uppercase text-gray-400'>Portfolio</p>
          <h2 className='text-indigo-900 text-6xl font-bold text-center'>
            All Creative Works
          </h2>
          <div className="md:flex sm:flex-col md:flex-row justify-center items-center gap-10 md:mt-10">
            <div className="rounded w-80 h-60 shadow-xl relative md:mt-0 mt-3">
              <Image src={portfolio1} alt="Portfolio Perdi" layout="fill" objectFit="cover" className="p-2 rounded cursor-pointer" />
            </div>
            <div className="rounded w-80 h-60 shadow-xl relative md:mt-0 mt-3">
              <Image src={portfolio2} alt="Portfolio Perdi" layout="fill" objectFit="cover" className="p-2 rounded cursor-pointer" />
            </div>
            <div className="rounded w-80 h-60 shadow-xl relative md:mt-0 mt-3">
              <Image src={portfolio3} alt="Portfolio Perdi" layout="fill" objectFit="cover" className="p-2 rounded cursor-pointer" />
            </div>
          </div>
          <div className="md:flex sm:flex-col md:flex-row justify-center items-center md:gap-10 md:mt-10">
            <div className="rounded w-80 h-60 shadow-xl relative md:mt-0 mt-3">
              <Image src={portfolio4} alt="Portfolio Perdi" layout="fill" objectFit="cover" className="p-2 rounded cursor-pointer" />
            </div>
          </div>
        </div>
      </Element>
    </>
  )
}
