import React from 'react'
import { Link } from 'react-router-dom'
import Faqs from '../components/dynamic/faqs'

const Faq = () => {
  return (
    <>
      <div className='w-full h-auto p-5'>
        <figure className='p-6 mr-5 ml-5 mb-5 rounded-3xl bg-gradient-to-tr'>
          <h1 className='text-9xl text-gray-500 text-shadow-sm font-bold font-opensans relative'><sup className='text-base font-semibold underline'><Link to="/">(Home)</Link></sup>FAQ</h1>
        </figure>
        <div className='bg-white w-full h-full p-10 rounded-2xl'>
          <h4 className='text-lg px-5 text-zinc-700 font-lato font-medium'>Find answers to the most common questions about Parinay.com</h4>
          <Faqs/>
        </div>
        <div className='mt-10 text-zinc-700 flex-col flex items-center text-shadow-md'> 
          <h2 className='text-3xl font-opensans font-extrabold'>Need More Help?</h2>
          <h3 className='text-lg font-lato font-medium'>We're here to assist you with any questions or concerns you might have.</h3>
          <h5 className='text-lg font-lato font-medium'>If You didn't find the answer you were looking for, don't hesitate to reach out to our support team.</h5>
          <div className='flex flex-col gap-5 items-center mt-5 '>
            <h6 className='text-lg font-lato font-medium'>We're available 24/7 to help you with anything you need.</h6>
            <Link to="/contact"><button className='relative overflow-hidden z-10 border-2 group border-zinc-800 rounded-full w-fit min-w-[10em] px-6 py-2 text-xl text-left font-lato font-normal group'>Contact Us <span className='ri-arrow-right-down-line z-[-1] absolute top-0 right-0 rounded-full bg-zinc-800 border-2 border-white w-10 h-10 p-5 text-slate-100 flex items-center justify-center text-2xl transition-all group-hover:-rotate-90'></span></button></Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Faq