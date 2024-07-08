import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const contact = () => {
  const OpenFeedback = () => {
    console.log('Ok');
  };

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
        <div className="bg-white w-full h-full px-32 py-10 rounded-2xl text-lg text-zinc-700 font-lato font-medium">
          <h6 className="px-5 text-center">If you have any questions, feel free to reach out to us. We're here to help!</h6>
          <div className='flex gap-5 mt-5'>
            <div className='w-full h-auto bg-slate-100 rounded-lg p-5'>
              <h4 className='text-2xl text-blue-600 font-opensans font-semibold'>Phone</h4>
              <p className='text-lg text-zinc-700 font-lato font-medium'>General Inquiries: +1234567890</p>
              <p className='text-lg text-zinc-700 font-lato font-medium'>Customer Support: +1987654321</p>
            </div>
            <div className='w-full h-auto bg-slate-100 rounded-lg p-5'>
              <h4 className='text-2xl text-blue-600 font-opensans font-semibold'>Email</h4>
              <p className='text-lg text-zinc-700 font-lato font-medium'>General Inquiries: info@parinay.com</p>
              <p className='text-lg text-zinc-700 font-lato font-medium'>Customer Support: support@parinay.com</p>
            </div>
            <div className='w-full h-auto bg-slate-100 rounded-lg p-5'>
              <h4 className='text-2xl text-blue-600 font-opensans font-semibold'>Address</h4>
              <p className='text-lg text-zinc-700 font-lato font-medium'>120 No Main Street, Guwahati, Assam, 781001, India</p>
            </div>
          </div>
          <div className='text-center'>
            <h6 className='my-5'><strong className='text-xl'>Feedback:</strong><br></br>Have feedback or a suggestion? Fill out our <span className='underline cursor-pointer text-blue-700 font-semibold' onClick={OpenFeedback}>Feedback Form</span>.</h6>
            <h6 className='my-5'><strong className='text-xl'>Customer Support:</strong><br></br>For immediate assistance, contact our customer support via website or through the contact details provided above.</h6>
            <h6 className='my-5'><strong className='text-xl'>Office Hours:</strong><br></br>Monday - Friday: 9:00 AM - 6:00 PM (Local Time)</h6>
          </div>
        </div>
      </div>
    </>
  )
}

export default contact