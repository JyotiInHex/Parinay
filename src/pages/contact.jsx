import React from 'react'
import { Link } from 'react-router-dom'

const contact = () => {
  return (
    <>
      <div className="w-full h-auto p-5">
        <figure className="p-6 mr-5 ml-5 mb-5 rounded-3xl bg-gradient-to-tr">
          <h1 className="text-9xl text-gray-500 text-shadow-sm font-bold font-opensans relative">
            <sup className="text-base font-semibold underline">
              <Link to="/">(Home)</Link>
            </sup>
            Contact Us
          </h1>
        </figure>
        <div className="bg-white w-full h-full p-10 rounded-2xl text-lg text-zinc-700 font-lato font-medium">
          <h6 className="px-5 text-justify">If you have any questions, feel free to reach out to us. We're here to help!</h6>
        </div>
      </div>
    </>
  )
}

export default contact