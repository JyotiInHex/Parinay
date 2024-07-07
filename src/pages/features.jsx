import React from 'react'
import { Link } from 'react-router-dom'

const services = () => {
  return (
    <>
      <div className='w-full h-auto p-5'>
        <figure className='p-6 mr-5 ml-5 mb-5 rounded-3xl bg-gradient-to-tr'>
          <h1 className='text-9xl text-gray-500 text-shadow-sm font-bold font-opensans relative'><sup className='text-base font-semibold cursor-pointer underline'><Link to="/">(Home)</Link></sup>Features</h1> 
        </figure>
        <div className='bg-white w-full h-full p-10 rounded-2xl text-lg text-zinc-700 font-lato font-medium'>
          <h6 className='px-5 text-justify'>At <strong>Parinay</strong>, we flatter ourselves on offering a comprehensive set of features that enhance your online courting experience. Our platform is designed to make chancing your perfect Assamese match both pleasurable and effective. Then’s what you can anticipate from our point-rich app</h6>
          <div className='flex flex-wrap gap-5 px-5'>
            <div className='w-[20%] h-auto mt-4 p-4 rounded-xl border-2 bg-[#F0F8FF] border-[#4A90E2]'>
              <span className='text-base text-zinc-700 font-lato font-semibold'>(01)</span>
              <h5 className='text-xl text-zinc-700 font-lato font-semibold'>Advanced Search Pollutants</h5>
              <p className='text-lg text-zinc-700 font-opensans font-normal mt-5'>Narrow down your hunt with customizable pollutants including age, position, interests, and more. Find someone who impeccably matches your criteria.</p>
            </div>
            <div className='w-[20%] h-auto mt-4 p-4 rounded-xl border-2 bg-[#F5F5F5] border-[#E74C3C]'>
              <span className='text-base text-zinc-700 font-lato font-semibold'>(01)</span>
              <h5 className='text-xl text-zinc-700 font-lato font-semibold'>Advanced Search Pollutants</h5>
              <p className='text-lg text-zinc-700 font-opensans font-normal mt-5'>Narrow down your hunt with customizable pollutants including age, position, interests, and more. Find someone who impeccably matches your criteria.</p>
            </div>
            <div className='w-[20%] h-auto mt-4 p-4 rounded-xl border-2 bg-[#E0F7FA] border-[#42e3f8]'>
              <span className='text-base text-zinc-700 font-lato font-semibold'>(01)</span>
              <h5 className='text-xl text-zinc-700 font-lato font-semibold'>Advanced Search Pollutants</h5>
              <p className='text-lg text-zinc-700 font-opensans font-normal mt-5'>Narrow down your hunt with customizable pollutants including age, position, interests, and more. Find someone who impeccably matches your criteria.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default services