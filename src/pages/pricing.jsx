import React from 'react'
import { Link } from 'react-router-dom'
import Plans from '../components/dynamic/plans'
const prices = () => {
  return (
    <>
      <div className='w-full h-auto p-5'>
        <figure className='p-6 mr-5 ml-5 mb-5 rounded-3xl bg-gradient-to-tr'>
          <h1 className='text-9xl text-gray-500 text-shadow-sm font-bold font-opensans relative'><sup className='text-base font-semibold underline'><Link to="/">(Home)</Link></sup>Plans</h1> 
        </figure>
        <div className='bg-white w-full h-full p-10 rounded-2xl'>
          <h6 className='px-5 text-3xl text-zinc-700 font-merriweather font-semibold'>Choose Your Perfect Plan.</h6>
          <p className='px-5 text-lg text-zinc-700 font-lato font-medium'>Select the plan that best fits your needs and start connecting today.</p>
        </div>
        <div className='mt-5'><Plans/></div>
        <div className='mt-10 p-6'>
          <div>
            <h4 className='text-lg text-zinc-700 font-lato font-semibold'>FAQ</h4>
            <h3 className='text-5xl text-zinc-800 font-merriweather font-semibold'>Frequently asked questions.</h3>
          </div>
          <div className='grid grid-cols-2 gap-5 mt-5 text-zinc-900 font-lato'>
            <div className='w-full h-auto rounded-lg bg-white p-5 font-lato text-justify'>
              <h4 className='text-xl font-semibold'>Q: What payment methods do you accept?</h4>
            </div>
            <div className='w-full h-auto rounded-lg bg-white p-5 font-lato text-justify'>
              <h4 className='text-xl font-semibold'>Q: Can I upgrade or downgrade my plan?</h4>
            </div>
            <div className='w-full h-auto rounded-lg bg-white p-5 font-lato text-justify'>
              <h4 className='text-xl font-semibold'>Q: How dose the matchmaking algorithm work?</h4>
            </div>
            <div className='w-full h-auto rounded-lg bg-white p-5 font-lato text-justify'>
              <h4 className='text-xl font-semibold'>Q: Is there a money-back guarantee?</h4>
            </div>
          </div> {/* dynamic */}
        </div>
      </div>
    </>
  )
}

export default prices