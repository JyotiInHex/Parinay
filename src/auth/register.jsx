import React, { useState } from 'react'

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

  return (
    <>
      <div className="relative w-full h-auto text-zinc-700 p-10">
        <div className="p-10 w-full h-auto bg-slate-50 rounded-xl">
            <h2 className="text-4xl font-playfair font-extrabold">Join Parinay</h2>
            <h3 className="text-xl font-lato font-semibold mb-4">Create your account</h3>
            <p className="text-lg font-opensans font-medium">Fill in the details below to start your journey towards finding your perfect match. Join our community and explore the possibilities.</p>
        </div>
        <form className="w-full h-auto p-7 mt-4 bg-slate-50 rounded-lg drop-shadow-lg overflow-hidden" method='POST'>
              <div className='relative w-full h-max min-h-[55vh] transition-all'>
                {step === 1 && (
                  <div className='grid grid-cols-2 gap-5 w-full min-w-full'>
                    <div className='col-start-1 col-end-3 flex items-center justify-between'>
                      <h3 className='space-y-4 text-xl text-zinc-700 font-semibold font-merriweather'>Account Details</h3>
                      <span className='ri-arrow-right-s-line cursor-pointer text-2xl text-zinc-700 font-medium' onClick={() => setStep(step + 1)}></span>
                    </div>

                    <div className="drop-shadow-md">
                        <label className="block text-lg font-lato font-semibold mb-1" for="name">Full Name</label>
                        <input className="outline-none border-2 border-zinc-200 rounded-xl w-full py-3 px-4 text-lg font-lato font-semibold text-zinc-800 leading-tight transition-all focus:border-blue-500" id="name" type="text" name="name" required/>
                    </div>
                    <div className="drop-shadow-md">
                        <label className="block text-lg font-lato font-semibold mb-1" for="email">Email</label>
                        <input className="outline-none border-2 border-zinc-200 rounded-xl w-full py-3 px-4 text-lg font-lato font-semibold text-zinc-800 leading-tight transition-all focus:border-blue-500" id="email" type="email" name="email" required/>
                    </div>
                    <div className="drop-shadow-md">
                      <label className="block text-lg font-lato font-semibold mb-1" for="password">Password</label>
                      <input className="outline-none border-2 border-zinc-200 rounded-xl w-full py-3 px-4 text-lg font-lato font-semibold text-zinc-800 leading-tight transition-all focus:border-blue-500" id="password" type="password" name="password" required/>
                    </div>
                    <div className="drop-shadow-md">
                      <label className="block text-lg font-lato font-semibold mb-1" for="conPassword">Confirm Password</label>
                      <input className="outline-none border-2 border-zinc-200 rounded-xl w-full py-3 px-4 text-lg font-lato font-semibold text-zinc-800 leading-tight transition-all focus:border-blue-500" id="conPassword" type="password" name="conPassword" required/>
                    </div>
                  </div>
                )}
                {step === 2 && (
                  <div className='grid grid-cols-2 gap-5 w-full min-w-full '>
                    <div className='col-start-1 col-end-3 flex items-center justify-between'>
                      <span className='ri-arrow-left-s-line cursor-pointer text-2xl text-zinc-700 font-medium' onClick={() => setStep(step - 1)}></span>
                      <h3 className='space-y-4 text-xl text-zinc-700 font-semibold font-merriweather'>Profile Information</h3>
                      <span className='ri-arrow-right-s-line cursor-pointer text-2xl text-zinc-700 font-medium' onClick={() => setStep(step + 1)}></span>
                    </div>
                    
                    <div className="drop-shadow-md">
                      <label className="block text-lg font-lato font-semibold mb-1" for="gender">Gender</label>
                      <select name="gender" id="gender" className="outline-none border-2 border-zinc-200 rounded-xl w-full py-3 px-4 text-lg font-lato font-semibold text-zinc-800 leading-tight transition-all focus:border-blue-500">
                        <option value="null" selected disabled hidden>Select</option>
                        <option value="women">Women</option>
                        <option value="men">Men</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div className="drop-shadow-md">
                      <label className="block text-lg font-lato font-semibold mb-1" for="maritalStatus">Marital Status</label>
                      <select name="maritalStatus" id="maritalStatus" className="outline-none border-2 border-zinc-200 rounded-xl w-full py-3 px-4 text-lg font-lato font-semibold text-zinc-800 leading-tight transition-all focus:border-blue-500">
                        <option value="null" selected disabled hidden>Select</option>
                        <option value="never married">Never Married</option>
                        <option value="divorced">Divorced</option>
                        <option value="widowed">Widowed</option>
                        <option value="separated">Separated</option>
                      </select>
                    </div>
                    <div className="drop-shadow-md">
                      <label className="block text-lg font-lato font-semibold mb-1" for="dob">Date of Birth</label>
                      <input className="outline-none border-2 border-zinc-200 rounded-xl w-full py-3 px-4 text-lg font-lato font-semibold text-zinc-800 leading-tight transition-all focus:border-blue-500" id="dob" type="date" name="dob" required/>
                    </div>
                    <div className="drop-shadow-md">
                      <label className="block text-lg font-lato font-semibold mb-1" for="phone">Phone Number</label>
                      <input className="outline-none border-2 border-zinc-200 rounded-xl w-full py-3 px-4 text-lg font-lato font-semibold text-zinc-800 leading-tight transition-all focus:border-blue-500" id="phone" type="tel" name="phone" required/>
                    </div>
                  </div>
                )}
                {step === 3 && (
                <div className='grid grid-cols-2 gap-5 w-full min-w-full'>
                  <div className='col-start-1 col-end-3 flex items-center justify-between'>
                    <span className='ri-arrow-left-s-line cursor-pointer text-2xl text-zinc-700 font-medium' onClick={() => setStep(step - 1)}></span>
                    <h3 className='space-y-4 text-xl text-zinc-700 font-semibold font-merriweather'>Location</h3>
                  </div>

                  <div className="drop-shadow-md">
                    <label className="block text-lg font-lato font-semibold mb-1" for="country">Country</label>
                    <input className="outline-none border-2 border-zinc-200 rounded-xl w-full py-3 px-4 text-lg font-lato font-semibold text-zinc-800 leading-tight transition-all focus:border-blue-500" id="country" type="text" name="country" value="India" readOnly />
                  </div>
                  <div className="drop-shadow-md">
                    <label className="block text-lg font-lato font-semibold mb-1" for="state">State</label>
                    <input className="outline-none border-2 border-zinc-200 rounded-xl w-full py-3 px-4 text-lg font-lato font-semibold text-zinc-800 leading-tight transition-all focus:border-blue-500" id="state" type="text" name="state" value="Assam" readOnly />
                  </div>
                  <div className="drop-shadow-md">
                    <label className="block text-lg font-lato font-semibold mb-1" for="city">City</label>
                    <input className="outline-none border-2 border-zinc-200 rounded-xl w-full py-3 px-4 text-lg font-lato font-semibold text-zinc-800 leading-tight transition-all focus:border-blue-500" id="city" type="text" name="city" required />
                  </div>
                </div>
                )}
              </div>
                {/* <h5 className="mt-3 w-full text-center text-base font-lato font-medium">already have an account? <button type="button" className="font-semibold text-blue-500 transition-all hover:text-blue-700 underline">Sign In</button></h5> */}
            </form>
      </div>
    </>
  )
}

export default Register