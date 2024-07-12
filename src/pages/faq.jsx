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
      </div>
    </>
  )
}

export default Faq