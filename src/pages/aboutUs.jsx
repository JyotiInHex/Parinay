import React from 'react'
import { Link } from 'react-router-dom'

const aboutUs = () => {
  return (
    <>
      <div className='w-full h-auto p-5'>
        <figure className='p-6 mr-5 ml-5 mb-5 rounded-3xl bg-gradient-to-tr'>
          <h1 className='text-9xl text-gray-500 text-shadow-sm font-bold font-opensans relative'><sup className='text-base font-semibold underline'><Link to="/">(Home)</Link></sup>About Us</h1> 
        </figure>
        <div className='bg-white w-full h-full p-10 rounded-2xl text-lg text-zinc-700 font-lato font-medium'>
          <h6 className='px-5 text-justify'>Welcome to <strong>Parinay</strong>, where we unite hearts within the rich cultural tapestry of Assam. <strong>Parinay</strong> is Assam's premier dating app designed to connect hearts and build meaningful relationships. Rooted in the rich culture and traditions of Assam, <strong>Parinay</strong> goes beyond being just a dating platform; it's a space where singles can find love, companionship, and lasting bonds. At <strong>Parinay</strong>, we understand the unique nuances of Assamese heritage and values. Our platform is tailored to bring together like-minded individuals who share a common cultural background, making it easier to find someone who resonates with your lifestyle and beliefs.</h6>
          <br></br><h6 className='px-5 text-justify'>At <strong>Parinay</strong>, we're dedicated to fostering meaningful connections and lifelong partnerships within the Assamese community. We believe in the power of love and community. Our mission is to create a trusted and reliable platform where Assamese singles can connect, interact, and build lasting relationships. We understand the cultural values and traditions of Assam, and our platform is designed to cater specifically to the needs of Assamese individuals seeking love and companionship.</h6> {/* dynamic */}

          <div className='mt-8 mb-3 px-5'>
            <h5 className='text-2xl'>Why Choose Parinay.com?</h5>
            <div className='w-full h-auto py-5 drop-shadow-xl flex gap-5'>
              <div className='overflow-hidden group w-[25%] h-auto rounded-2xl bg-[#B2DFDB] p-5'>
                <i className='ri-earth-fill block text-4xl text-zinc-800 h-[80%] transition-all group-hover:h-[23%]'></i>
                <h5 className='relative flex justify-between items-center text-[1em] text-zinc-700 leading-6 font-opensans font-semibold border-b-2 border-transparent transition-all group-hover:border-zinc-700'><sup className='absolute -top-5 text-lg text-zinc-700 font-opensans font-bold'>01.</sup>Cultural Connection<span className='ri-arrow-right-up-line text-3xl font-normal transition-all group-hover:rotate-90'></span></h5>
                <p className='mb-[1.3em] text-base text-zinc-700 font-lato font-semibold w-full h-fit opacity-0 transition-all  group-hover:opacity-100'>We celebrate Assamese culture and create opportunities for you to meet others who appreciate and cherish it as much as you do.</p>
              </div>

              <div className='overflow-hidden group w-[25%] h-auto rounded-2xl bg-[#FFF9C4] p-5'>
                <i className='ri-lightbulb-fill block text-4xl text-zinc-800 h-[80%] transition-all group-hover:h-[23%]'></i>
                <h5 className='relative flex justify-between items-center text-[1em] text-zinc-700 leading-6 font-opensans font-semibold border-b-2 border-transparent transition-all group-hover:border-zinc-700'><sup className='absolute -top-5 text-lg text-zinc-700 font-opensans font-bold'>02.</sup>User-Friendly Interface <span className='ri-arrow-right-up-line text-3xl font-normal transition-all group-hover:rotate-90'></span></h5>
                <p className='mb-[1.3em] text-base text-zinc-700 font-lato font-semibold w-full h-fit opacity-0 transition-all  group-hover:opacity-100'>Our app is designed to be intuitive and easy to navigate, ensuring a seamless experience as you search for your perfect match.</p>
              </div>

              <div className='overflow-hidden group w-[25%] h-auto rounded-2xl bg-[#BBDEFB] p-5'>
                <i className='ri-user-follow-fill block text-4xl text-zinc-800 h-[80%] transition-all group-hover:h-[23%]'></i>
                <h5 className='relative flex justify-between items-center text-[1em] text-zinc-700 leading-6 font-opensans font-semibold border-b-2 border-transparent transition-all group-hover:border-zinc-700'><sup className='absolute -top-5 text-lg text-zinc-700 font-opensans font-bold'>03.</sup>Verified Profiles <span className='ri-arrow-right-up-line text-3xl font-normal transition-all group-hover:rotate-90'></span></h5>                
                <p className='mb-[1.3em] text-base text-zinc-700 font-lato font-semibold w-full h-fit opacity-0 transition-all  group-hover:opacity-100'>We prioritize your safety and peace of mind. All profiles are thoroughly verified to ensure genuine connections.</p>
              </div>

              <div className='overflow-hidden group w-[25%] h-auto rounded-2xl bg-[#C8E6C9] p-5'>
                <i className='ri-function-fill block text-4xl text-zinc-800 h-[80%] transition-all group-hover:h-[23%]'></i>
                <h5 className='relative flex justify-between items-center text-[1em] text-zinc-700 leading-6 font-opensans font-semibold border-b-2 border-transparent transition-all group-hover:border-zinc-700'><sup className='absolute -top-5 text-lg text-zinc-700 font-opensans font-bold'>04.</sup>Advanced Matching Algorithms <span className='ri-arrow-right-up-line text-3xl font-normal transition-all group-hover:rotate-90'></span></h5>                
                <p className='mb-[1.3em] text-base text-zinc-700 font-lato font-semibold w-full h-fit opacity-0 transition-all  group-hover:opacity-100'>Our smart algorithms consider your preferences, interests, and values to suggest the best potential matches, making your journey to finding love both efficient and enjoyable.</p>
              </div>

              <div className='overflow-hidden group w-[25%] h-auto rounded-2xl bg-[#FFE0B2] p-5'>
                <i className='ri-group-fill block text-4xl text-zinc-800 h-[80%] transition-all group-hover:h-[23%]'></i>
                <h5 className='relative flex justify-between items-center text-[1em] text-zinc-700 leading-6 font-opensans font-semibold border-b-2 border-transparent transition-all group-hover:border-zinc-700'><sup className='absolute -top-5 text-lg text-zinc-700 font-opensans font-bold'>05.</sup>Community Focused <span className='ri-arrow-right-up-line text-3xl font-normal transition-all group-hover:rotate-90'></span></h5>                
                <p className='mb-[1.3em] text-base text-zinc-700 font-lato font-semibold w-full h-fit opacity-0 transition-all  group-hover:opacity-100'>We foster a supportive community where users can share their experiences and celebrate their journey towards finding love.</p>
              </div>

            </div>
          </div> {/* dynamic */}

          <h6 className='px-5 text-justify'>Whether you are looking for a serious relationship or simply want to expand your social circle, <strong>Parinay</strong> is your go-to platform. Join us today and embark on a journey to find your perfect partner within the vibrant and diverse Assamese community.</h6>{/* dynamic */}

          <div className='flex justify-between items-center mt-10 px-20'>
            <p className='text-xl font-semibold text-right'>Parinay.com – Where Assamese Hearts Connect.</p>
            <button className='relative z-10 overflow-hidden group w-[25%] h-fit py-3 my-4 border-2 border-zinc-700 rounded-xl text-lg font-semibold flex justify-evenly items-center hover:text-slate-50 transition-all after:w-full after:h-full after:bg-zinc-900 after:absolute after:-bottom-16 after:left-0 after:z-[-1] after:rounded-[50%] after:transition-all hover:after:rounded-none hover:after:bottom-0'><Link to="/register">Join Parinay Today</Link> <i className="ri-arrow-right-up-line text-3xl font-normal transition-all group-hover:rotate-90"></i></button>
          </div>
        </div>
      </div>
    </>
  )
}

export default aboutUs