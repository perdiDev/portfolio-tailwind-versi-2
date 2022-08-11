import Image from "next/image";
import portfolio from "../public/portfolio.JPG"

export default function work() {
  return (
    <div className='w-full my-20 h-auto flex flex-col justify-center items-center'>
      <p className='text-sm uppercase text-gray-400'>Portfolio</p>
      <h2 className='text-indigo-900 text-6xl font-bold text-center'>
        All Creative Works
      </h2>
      <div className="md:flex sm:flex-col md:flex-row justify-center items-center gap-10 md:mt-10">
        <div className="rounded w-80 h-60 shadow-xl relative md:mt-0 mt-3">
          <Image src={portfolio} alt="Portfolio Perdi" layout="fill" objectFit="cover" className="p-2 rounded cursor-pointer" />
        </div>
        <div className="rounded w-80 h-60 shadow-xl relative md:mt-0 mt-3">
          <Image src={portfolio} alt="Portfolio Perdi" layout="fill" objectFit="cover" className="p-2 rounded cursor-pointer" />
        </div>
        <div className="rounded w-80 h-60 shadow-xl relative md:mt-0 mt-3">
          <Image src={portfolio} alt="Portfolio Perdi" layout="fill" objectFit="cover" className="p-2 rounded cursor-pointer" />
        </div>
      </div>
      <div className="md:flex sm:flex-col md:flex-row justify-center items-center md:gap-10 md:mt-10">
        <div className="rounded w-80 h-60 shadow-xl relative md:mt-0 mt-3">
          <Image src={portfolio} alt="Portfolio Perdi" layout="fill" objectFit="cover" className="p-2 rounded cursor-pointer" />
        </div>
        <div className="rounded w-80 h-60 shadow-xl relative md:mt-0 mt-3">
          <Image src={portfolio} alt="Portfolio Perdi" layout="fill" objectFit="cover" className="p-2 rounded cursor-pointer" />
        </div>
        <div className="rounded w-80 h-60 shadow-xl relative md:mt-0 mt-3">
          <Image src={portfolio} alt="Portfolio Perdi" layout="fill" objectFit="cover" className="p-2 rounded cursor-pointer" />
        </div>
      </div>
    </div>
  )
}
