import Image from "next/image"
import { Element } from "react-scroll"
import heroImage from "../public/hero.JPG"

export default function HomePage() {
  return (
    <>
      <Element id="home" name="home">
        <div className="flex justify-between text-center md:mx-20 md:pt-32 pt-28">
          <div className="w-3/4 h-96 shadow-xl rounded-full relative px-10 hidden md:block">
              <Image src={heroImage} layout="fill" objectFit="cover" className="rounded-full cursor-pointer hidden md:block" />
          </div>
          <div className="flex flex-col md:ml-20 mx-10 mt-10">
              <h1 className="font-bold text-7xl text-left mb-5">
                  Hello, I am <span className="text-indigo-900">Perdi</span>
              </h1>
              <p className="text-left font-normal mb-5 flex-wrap">
                  I just want see your smile with my website. As expert in web development, I beginning to learn programing in 2020 when I'm still 16 year's old, with first programing language is Python. I always developed my knowledge with new technology. I love to learn new everyday.
              </p>
              <p className="text-left font-normal mb-5 flex-wrap">
                  Now, I'm study in Departments of Informatic <span className="font-bold text-red-900">Hasanuddin University (UNHAS)</span>.
              </p>
              <a href="#" className="font-semibold text-white md:mt-10 mt-5 pt-5 bg-indigo-900 rounded-md w-60 h-16 text-lg hover:bg-black">
                  See my Portfolio !
              </a>
          </div>
        </div>
      </Element>
    </>
  )
}
