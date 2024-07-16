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
            <span className='absolute top-0 left-0 z-[-1] w-full h-full backdrop-blur-sm rounded-md'></span>
            <h2 className="ml-5 text-4xl font-playfair font-extrabold text-shadow-3xl">Join Parinay</h2>
            <h3 className="ml-5 text-xl font-lato font-semibold mb-4 mt-2 text-shadow-2xl">Create your account</h3>
            <p className="ml-5 text-lg font-opensans font-medium">Fill in the details below to start your journey towards finding your perfect match. Join our community and explore the possibilities.</p>
          </div>
          <form className="w-full h-auto bg-slate-50 rounded-r-md overflow-hidden" method='POST'>
            <div className='relative w-full h-max transition-all p-7 text-zinc-700 overflow-hidden'>
                <div className={animation}>
                  <h2 className='flex justify-between items-end text-3xl font-playfair font-extrabold border-b-2 border-gray-600 pb-2'>Account Details
                    <i className='ri-arrow-right-s-line text-end font-medium '></i>
                  </h2>
                  {/* fieldset */}
                  <div className=''>
                    <label htmlFor=""></label>
                  </div>
                </div>      
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Register