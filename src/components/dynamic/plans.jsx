import React from 'react'
import art1 from '../../assets/bg-3.jpg'

const Plans = () => {
  return (
    <>
        <div className='flex flex-wrap gap-5'>
            <div className='relative overflow-hidden z-10 bg-orange-200 w-1/4 p-12'>
                <figure className='absolute z-[-1]'>
                    <img src={art1} alt="arts" />
                </figure>
                <h3 className='my-2 text-2xl text-zinc-700 font-playfair font-semibold'>Foundation</h3>
                <h5 className='text-4xl text-zinc-700 font-opensans font-semibold'>Free</h5>
                <hr className='border-zinc-700 border-[1px] my-5'></hr>
                <h6 className='text-[1.5em] text-zinc-700 font-lato font-semibold'>Features</h6>
                <p className='text-lg text-zinc-700 font-lato font-medium'>Everything in our Free Plan -</p>
                <ul className='flex flex-col gap-y-1 my-2 text-xl text-zinc-800 font-lato'>
                    <li className='ri-checkbox-circle-fill'> Create Profile</li>
                    <li className='ri-checkbox-circle-fill'> Browse Matches</li>
                    <li className='ri-checkbox-circle-fill'> Send Interests</li>
                </ul>
                <button className='w-full h-auto border-2 border-zinc-700 rounded-lg py-1 text-lg text-zinc-700 font-lato font-semibold'>Get Started</button>
            </div>
        </div>
    </>
  )
}

export default Plans