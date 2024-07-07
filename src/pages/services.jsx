import React from 'react'
import { Link } from 'react-router-dom'

const services = () => {
  return (
    <>
      <div className='w-full h-auto p-5'>
        <figure className='p-6 mr-5 ml-5 mb-5 rounded-3xl bg-gradient-to-tr'>
          <h1 className='text-9xl text-gray-700 text-shadow-sm font-bold font-opensans relative'><sup className='text-base font-semibold cursor-pointer underline'><Link to="/">(Home)</Link></sup>Services</h1> 
        </figure>
        <h6>At Parinay.com, we flatter ourselves on offering a comprehensive set of features that enhance your online courting experience. Our platform is designed to make chancing your perfect Assamese match both pleasurable and effective. Then’s what you can anticipate from our point-rich app -</h6>
      </div>
    </>
  )
}

export default services