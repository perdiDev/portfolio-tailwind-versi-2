import { Element } from "react-scroll";

export default function Contact() {
  return (
    <>
      <Element id="contact" name="contact">
        <div className="w-full my-20 h-auto flex flex-col justify-center items-center">
          <p className='text-sm uppercase text-gray-400'>Contact</p>
          <h2 className='text-indigo-900 text-6xl font-bold text-center'>
            Contact
          </h2>
          <div className="flex justify-center text-center md:w-1/2 w-full my-5">
            <input type="text" name="email address" id="email address" autoComplete="email" placeholder="xyz@gmail.com" className="mt-5 pb-1 pl-5 w-full rounded-bl-lg rounded-tl-lg text-blue-800 text-xl border-2 border-indigo-900 h-10" />
            <button className="mt-5 text-xl w-3/6 h-10 bg-indigo-900 text-white rounded-tr-lg rounded-br-lg hover:bg-black">Submit</button>
          </div>
        </div>
      </Element>
    </>
  )
}
