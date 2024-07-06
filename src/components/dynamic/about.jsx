import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className='w-full h-auto mt-[5em] mb-7 bg-[#E91E63] p-10 rounded-3xl'>
        <div className='text-xl text-[#ffffffc2] font-opensans font-medium underline transition-all'>(02) About</div>
        <div className='grid grid-cols-2 gap-32 h-full'>
          <div className='self-end w-full h-fit text-lg text-white text-justify font-lato font-normal tracking-wide'>Rooted in the rich culture and traditions of Assam, Parinay.com is more than just a dating platform; it's a space where singles can find love, companionship, and lasting bonds. At Parinay.com, we understand the unique nuances of Assamese heritage and values. Our platform is tailored to bring together like-minded individuals who <Link>(....)</Link> </div>
          <div className='flex flex-col gap-12 items-start'>
            <h1 className='w-ful h-auto text-3xl text-white font-merriweather font-normal'>Welcome to <strong>Parinay.com</strong>, Assam's premier dating app designed to connect <strong>hearts</strong> and build meaningful <strong>relationships</strong>.</h1>
            <button className='relative overflow-hidden z-10 border-2 group border-white rounded-full w-fit min-w-[10em] px-6 py-2 text-xl text-slate-50 text-left font-lato font-normal group'><Link>Learn More <span className='ri-arrow-right-up-line z-[-1] absolute top-0 right-0 translate-x-[0%] translate-y-[0%] w-1 h-1 bg-slate-50 border-2 border-[#E91E63] p-[1.23rem] rounded-full text-[#E91E63] flex items-center justify-center text-2xl transition-all group-hover:rotate-90'></span></Link></button>
          </div>
        </div>
    </div>
  )
}

export default About