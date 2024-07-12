import React from 'react'
import { Link } from 'react-router-dom'

const GetStarted = () => {
  return (
    <>
        <div className="relative mt-[5em] mb-7">
            <div className="w-full h-auto bg-[#FFF5E1] p-12 flex flex-col gap-6 justify-between">
                <div className='mb-5 text-xl text-zinc-400 font-opensans font-medium underline transition-all'>(04) Get Started </div>
                <h2 className="w-[75%] text-5xl text-left text-zinc-900 font-merriweather font-semibold leading-relaxed">Embark on your journey to find true love <i className="ri-chat-heart-fill text-[#E91E63]"></i> with Parinay.com. Creating your profile is quick and easy, allowing you to showcase your personality and preferences.</h2>
                <p className="w-[55%] self-end text-xl text-justify text-zinc-900 text-shadow-md font-lato font-medium">Discover a community of like-minded Assamese singles. Our user-friendly interface ensures a seamless experience as you navigate through profiles and features. Join Parinay.com today and take the first step towards finding <i className="ri-search-2-line text-[#FFC107] font-bold"></i> your perfect match.</p>
                <Link to="/register" className='self-end'><button className="relative z-10 overflow-hidden group border-2 border-[#FF6F61] w-fit h-fit px-8 py-3 rounded-full text-xl text-[#FF6F61] font-lato font-semibold after:transition-all after:absolute after:-bottom-14 after:z-[-1] after:left-0 after:w-full after:h-full after:rounded-[50%] after:bg-white hover:after:-bottom-0 hover:after:rounded-none">Begin Your Journey <i className="ri-arrow-right-line transition-all group-hover:ml-4"></i></button></Link>
            </div>
        </div>
    </>
  )
}

export default GetStarted