import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import map from '../assets/Map.png';

const Contact = () => {
  return (
    <>
      <div className="w-full h-auto p-5 relative">
        <figure className="p-6 mr-5 ml-5 mb-5 rounded-3xl bg-gradient-to-tr">
          <h1 className="text-9xl text-gray-500 text-shadow-sm font-bold font-opensans relative">
            <sup className="text-base font-semibold underline">
              <Link to="/">(Home)</Link>
            </sup>
            Contact Us
          </h1>
        </figure>
        <div className="bg-white w-full h-full px-24 py-10 rounded-2xl text-lg text-zinc-700 font-lato font-medium">
          <h6 className="px-5 text-left">If you have any questions, feel free to reach out to us. We're here to help!</h6>
          <div className='relative z-10 px-5 mt-5 flex flex-wrap'>
            <div className='w-1/2 flex flex-col'>
              <div className='mt-7 p-3 w-full h-auto bg-slate-50 rounded-md'>
                <h5 className='text-xl font-semibold text-orange-500'><i className='ri-phone-line font-normal'></i> Phone</h5>
                <p>General Inquiries: +1234567890</p>
                <p>Customer Support: +1987654321</p>
              </div>
              <div className='mt-7 p-3 w-full h-auto bg-slate-50 rounded-md'>
                <h5 className='text-xl font-semibold text-orange-500'><i className='ri-mail-line font-normal'></i> Email</h5>
                <p>General Inquiries: Info@parinay.com</p>
                <p>Customer Support: Support@parinay.com</p>
              </div>
              <div className='mt-7 p-3 w-full h-auto bg-slate-50 rounded-md'>
                <h5 className='text-xl font-semibold text-orange-500'><i className='ri-map-pin-2-line font-normal'></i> Address</h5>
                <p className='text-lg text-zinc-700 font-lato font-medium'>120 No Main Street, Guwahati, Assam, 781001, India</p>
              </div>
              <div className='mt-7 p-3 w-full h-auto bg-slate-50 rounded-md'>
                <h5 className='text-xl font-semibold text-orange-500'><i className='ri-time-line font-normal'></i> Office Hours</h5>
                <p className='text-lg text-zinc-700 font-lato font-medium'>Monday - Friday: 09:00 AM - 06:00 PM (Local Time)</p>
              </div>
            </div> {/* dynamic */}
            <div className='w-1/2 h-auto relative top-7'>
              <form action="" method="post" className='ml-10 p-10 rounded-md drop-shadow-md bg-zinc-700 text-slate-50 w-auto h-auto flex flex-col items-end'>
                <h3 className='text-2xl w-full font-merriweather font-semibold mb-5'>Send a Message</h3>
                <div className='mb-5 w-full font-semibold'>
                  <label className='flex gap-3 items-center' htmlFor="name">
                    <h6 className='w-36 whitespace-nowrap'>Name</h6>
                    <input className='outline-none text-zinc-700 bg-white border-2 border-gray-200 rounded-lg font-medium w-full px-3 py-1' type="text" name="name" id="name" placeholder='your name'/>
                  </label>
                </div>
                <div className='mb-5 w-full font-semibold'>
                  <label className='flex gap-3 items-center' htmlFor="email">
                    <h6 className='w-36 whitespace-nowrap'>Email</h6>
                    <input className='outline-none text-zinc-700 bg-white border-2 border-gray-200 rounded-lg font-medium w-full px-3 py-1' type="text" name="email" id="email" placeholder='your email'/>
                  </label>
                </div>
                <div className='mb-5 w-full font-semibold'>
                  <label className='flex gap-3 items-center' htmlFor="email">
                    <h6 className='w-36 whitespace-nowrap'>Message</h6>
                    <textarea className='resize-none text-zinc-700 outline-none bg-white border-2 border-gray-200 rounded-lg font-medium w-full px-3 py-1' name="" id="" cols="30" rows="4" placeholder='your message'></textarea>
                  </label>
                </div>
                <button type="button" className="relative z-10 overflow-hidden w-28 border-2 border-slate-100 rounded-md py-1 text-center font-semibold hover:text-zinc-700 after:absolute after:left-[-6px] after:top-6 after:z-[-1] after:translate-y-[50%] after:rounded-[50%] after:bg-slate-50 after:w-[6.6em] after:h-[2.5em] after:transition-all duration-1000 ease-in-out hover:after:top-[-25px] hover:after:rounded-none"><i className='ri-arrow-right-line'></i> Send</button>
              </form>
            </div>
          </div>
          <figure className='grayscale w-full h-[25em] -translate-y-12 overflow-hidden rounded-xl'>
            <img src={map} alt="map" className='w-full h-fit object-cover' />
          </figure>
          <h6 className="px-5 text-left">For immediate assistance, contact our customer support via the website or through the contact details provided above.</h6>
        </div>
        <div className='mt-10 p-6'>
          <div>
            <h4 className='text-lg text-zinc-700 font-lato font-semibold'>FAQ</h4>
            <h3 className='text-5xl text-zinc-800 font-merriweather font-semibold'>Frequently asked questions.</h3>
          </div>
          <div className='grid grid-cols-2 gap-5 mt-5 text-zinc-900 font-lato'>
            <div className='w-full h-auto rounded-lg bg-white p-5 font-lato text-justify'>
              <h4 className='text-xl font-semibold'>Q: How can I contact customer support?</h4>
              <p className='text-lg mt-3 font-medium'>A: You can reach our customer support team via phone at <strong>+1987654321</strong> or email us at support@parinay.com. Our team is available Monday to Friday, from 9:00 AM to 6:00 PM.</p>
            </div>
            <div className='w-full h-auto rounded-lg bg-white p-5 font-lato text-justify'>
              <h4 className='text-xl font-semibold'>Q: What information should I provide when contacting support?</h4>
              <p className='text-lg mt-3 font-medium'>A: Please provide your full name, contact details, and a detailed description of your issue or inquiry. This helps us assist you more efficiently.</p>
            </div>
            <div className='w-full h-auto rounded-lg bg-white p-5 font-lato text-justify'>
              <h4 className='text-xl font-semibold'>Q: Where is your office located?</h4>
              <p className='text-lg mt-3 font-medium'>A: Our office is located at 120 No Main Street, Guwahati, Assam, 781001, India. You can visit us during our office hours for any in-person inquiries.</p>
            </div>
            <div className='w-full h-auto rounded-lg bg-white p-5 font-lato text-justify'>
              <h4 className='text-xl font-semibold'>Q: What are your office hours?</h4>
              <p className='text-lg mt-3 font-medium'>A: Our office hours are Monday to Friday, from 9:00 AM to 6:00 PM (Local Time). We are closed on weekends and public holidays.</p>
            </div>
          </div> {/* dynamic */}
        </div>
      </div>
    </>
  )
}

export default Contact