import React, { useState } from 'react'
import registerBg from '../assets/registration-2.webp'

const Register = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    step1: '',
    step2: '',
    step3: '',
    step4: '',
    step5: '',
    step6: '',
    step7: '',
  });
  const [animation, setAnimation] = useState(0);
  const handleNext = () =>{
    setAnimation('animate-slide-left')
    setStep(step + 1);
  }
  const handlePrev = () =>{
    setAnimation('animate-slide-right')
    setStep(step - 1);
  }

  
  return (
    <>
      <div className="relative w-full h-auto p-5">
        <div className="p-10 w-full h-auto rounded-xl flex">
          <div className='relative z-10 w-[60%] min-h-[95vh] flex flex-col justify-end text-slate-50 p-10'>
            <figure className='absolute top-0 left-0 z-[-1] w-full h-full overflow-hidden rounded-l-md'>
              <img src={registerBg} alt="registerBg" className='w-full h-full object-cover pointer-events-none' />
            </figure>
            <span className='absolute bottom-0 left-0 z-[-1] w-full h-[35vh] backdrop-blur-[2px] rounded-md'></span>
            <h2 className="ml-5 text-4xl font-playfair font-extrabold text-shadow-3xl">Join Parinay</h2>
            <h3 className="ml-5 text-xl font-lato font-semibold mb-4 mt-2 text-shadow-2xl">Create your account</h3>
            <p className="ml-5 text-lg font-opensans font-medium">Fill in the details below to start your journey towards finding your perfect match. Join our community and explore the possibilities.</p>
          </div>
          <form className="w-full h-auto bg-slate-50 rounded-r-md" method='POST'>
            <div className='relative w-full h-fit transition-all p-7 text-zinc-700'>
                <div className={animation}>
                  <h2 className='flex justify-between items-end text-3xl font-playfair font-extrabold border-b-2 border-gray-600 pb-2'>Profile Information
                    <i className='ri-arrow-right-s-line text-end font-medium '></i>
                  </h2>

                  <fieldset className='flex flex-col mt-5'>
                    <div className='flex flex-wrap items-center gap-3 mt-3 mb-4'>
                      <h3 className='text-xl font-lato font-semibold'>Profile For:</h3>
                      <div className='w-fit h-fit flex items-center justify-between gap-2 border-2 border-blue-500 bg-blue-100 rounded-full px-5 py-1'>
                        <input type="radio" name="profileFor" id="self" className='w-fit h-5'/>
                        <label className='w-fit h-fit rounded-full text-lg font-lato font-semibold cursor-pointer' htmlFor="self">
                          Self
                        </label>
                      </div>
                      <div className='w-fit h-fit flex items-center justify-between gap-2 border-2 border-blue-500 bg-blue-100 rounded-full px-5 py-1'>
                        <input type="radio" name="profileFor" id="son" className='w-fit h-5'/>
                        <label className='w-fit h-fit rounded-full text-lg font-lato font-semibold cursor-pointer' htmlFor="son">
                          Son
                        </label>
                      </div>
                      <div className='w-fit h-fit flex items-center justify-between gap-2 border-2 border-blue-500 bg-blue-100 rounded-full px-5 py-1'>
                        <input type="radio" name="profileFor" id="daughter" className='w-fit h-5'/>
                        <label className='w-fit h-fit rounded-full text-lg font-lato font-semibold cursor-pointer' htmlFor="daughter">
                          Daughter
                        </label>
                      </div>
                      <div className='w-fit h-fit flex items-center justify-between gap-2 border-2 border-blue-500 bg-blue-100 rounded-full px-5 py-1'>
                        <input type="radio" name="profileFor" id="brother" className='w-fit h-5'/>
                        <label className='w-fit h-fit rounded-full text-lg font-lato font-semibold cursor-pointer' htmlFor="brother">
                          Brother
                        </label>
                      </div>
                      <div className='w-fit h-fit flex items-center justify-between gap-2 border-2 border-blue-500 bg-blue-100 rounded-full px-5 py-1'>
                        <input type="radio" name="profileFor" id="sister" className='w-fit h-5'/>
                        <label className='w-fit h-fit rounded-full text-lg font-lato font-semibold cursor-pointer' htmlFor="sister">
                          Sister
                        </label>
                      </div>
                      <div className='w-fit h-fit flex items-center justify-between gap-2 border-2 border-blue-500 bg-blue-100 rounded-full px-5 py-1'>
                        <input type="radio" name="profileFor" id="friend" className='w-fit h-5'/>
                        <label className='w-fit h-fit rounded-full text-lg font-lato font-semibold cursor-pointer' htmlFor="friend">
                          Friend
                        </label>
                      </div>
                      <div className='w-fit h-fit flex items-center justify-between gap-2 border-2 border-blue-500 bg-blue-100 rounded-full px-5 py-1'>
                        <input type="radio" name="profileFor" id="relative" className='w-fit h-5'/>
                        <label className='w-fit h-fit rounded-full text-lg font-lato font-semibold cursor-pointer' htmlFor="relative">
                          Relative
                        </label>
                      </div>
                    </div>

                    <label className='flex flex-col gap-3 mb-4' htmlFor="First_name">
                      <h3 className='text-xl font-lato font-semibold'>First Name:</h3>
                      <input className="outline-none border-2 border-zinc-200 rounded-xl w-full py-3 px-4 text-lg font-lato font-semibold text-zinc-800 leading-tight transition-all focus:border-blue-500" id="First_name" type="text" name="fName" required/>
                    </label>
                    
                    <label className='flex flex-col gap-3 mb-4' htmlFor="Last_name">
                      <h3 className='text-xl font-lato font-semibold'>Last Name:</h3>
                      <input className="outline-none border-2 border-zinc-200 rounded-xl w-full py-3 px-4 text-lg font-lato font-semibold text-zinc-800 leading-tight transition-all focus:border-blue-500" id="Last_name" type="text" name="lName" required/>
                    </label>
                    
                    <div className='flex flex-wrap items-center gap-3 mt-3 mb-4'>
                      <h3 className='text-xl font-lato font-semibold'>Gender:</h3>
                      <div className='w-fit h-fit flex items-center justify-between gap-2 border-2 border-blue-500 bg-blue-100 rounded-full px-5 py-1'>
                        <input type="radio" name="gender" id="man" className='w-fit h-5'/>
                        <label className='w-fit h-fit rounded-full text-lg font-lato font-semibold cursor-pointer' htmlFor="man">
                          Man
                        </label>
                      </div>
                      <div className='w-fit h-fit flex items-center justify-between gap-2 border-2 border-blue-500 bg-blue-100 rounded-full px-5 py-1'>
                        <input type="radio" name="gender" id="woman" className='w-fit h-5'/>
                        <label className='w-fit h-fit rounded-full text-lg font-lato font-semibold cursor-pointer' htmlFor="woman">
                          Woman
                        </label>
                      </div>
                      <div className='w-fit h-fit flex items-center justify-between gap-2 border-2 border-blue-500 bg-blue-100 rounded-full px-5 py-1'>
                        <input type="radio" name="gender" id="other" className='w-fit h-5'/>
                        <label className='w-fit h-fit rounded-full text-lg font-lato font-semibold cursor-pointer' htmlFor="other">
                          Other
                        </label>
                      </div>
                    </div>

                    <label className='flex flex-col gap-3 mb-4' htmlFor="Religion">
                      <h3 className='text-xl font-lato font-semibold'>Religion:</h3>
                      <div className="relative outline-none border-2 border-zinc-200 rounded-xl w-full py-3 px-4 text-lg font-lato font-semibold text-zinc-800 leading-tight transition-all focus:border-blue-500">
                        <h6>Assamese</h6>
                        <div className='absolute top-14 left-0 z-10 p-7 w-1/2 h-auto flex flex-col gap-3 bg-white rounded-md opacity-0 invisible'>
                          <h4>Hinduism</h4>
                          <h4>Islam</h4>
                          <h4>Christianity</h4>
                          <h4>Buddhism</h4>
                          <h4>Sikhism</h4>
                          <h4>Jainism</h4>
                        </div>
                      </div>
                    </label>
                    <label className='flex flex-col gap-3 mb-4' htmlFor="Religion">
                      <h3 className='text-xl font-lato font-semibold'>Religion:</h3>
                      <div className="relative outline-none border-2 border-zinc-200 rounded-xl w-full py-3 px-4 text-lg font-lato font-semibold text-zinc-800 leading-tight transition-all focus:border-blue-500">
                        <h6>Assamese</h6>
                        <div className='absolute top-14 left-0 z-10 p-7 w-1/2 h-auto flex flex-col gap-3 bg-white rounded-md opacity-0 invisible'>
                          <h4>Hinduism</h4>
                          <h4>Islam</h4>
                          <h4>Christianity</h4>
                          <h4>Buddhism</h4>
                          <h4>Sikhism</h4>
                          <h4>Jainism</h4>
                        </div>
                      </div>
                    </label>
                  </fieldset>
                </div>      
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Register