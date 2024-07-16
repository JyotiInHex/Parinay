import React from 'react'
import logo from "../assets/logo.jpeg";
import { Link } from 'react-router-dom';

const ForgotPass = ({onLoginClick, onCloseClick}) => {
  return (
    <>
        <div className="relative w-full h-auto text-zinc-700">
            <i className="ri-close-line absolute -right-3 top-6 text-xl  font-semibold cursor-pointer" onClick={onCloseClick}></i>
            <figure className="w-auto h-auto flex flex-col items-center justify-center mb-6">
            <img
                className="relative rounded-full w-[5.5%] h-auto object-cover pointer-events-none"
                src={logo}
                alt="logo"
            />
            <caption className="text-lg font-lato font-semibold">
                Parinay.com
            </caption>
            </figure>
            <div className="flex flex-row justify-between items-start gap-10">
                <div className="w-fit h-auto">
                    <h2 className="text-4xl font-playfair font-extrabold mb-3">Forgot Your Password?</h2>
                    <h3 className="text-xl font-lato font-semibold mb-4">Reset it now</h3>
                    <p className="text-lg font-opensans font-medium mb-6">No worries, we will send you an email to reset your password and get you back on track.</p>
                </div>
                <form className="relative w-[125vh] bg-white p-7 rounded-lg drop-shadow-lg" method="POST">
                    <span className='absolute top-4 left-0 text-lg text-zinc-700 font-semibold cursor-pointer' onClick={onLoginClick}>
                        <i className='ri-arrow-left-s-line'></i>Back
                    </span>
                    <div className="mb-4 mt-5 drop-shadow-md">
                        <label className="block text-lg font-lato font-semibold mb-1" for="email">Email</label>
                        <input className="outline-none border-2 border-zinc-200 rounded-xl w-full py-3 px-4 text-base font-lato font-semibold text-zinc-800 leading-tight transition-all focus:border-blue-500" id="email" type="email" name="email" required/>
                    </div>
                    <button className="w-full bg-blue-500 transition-all hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg" type="submit">Send Reset Link</button>
                    <h5 className="mt-3 text-center text-base font-lato font-medium">Don’t have an account? <Link to="/register"><button type="button" className="font-semibold text-blue-500 transition-all hover:text-blue-700 underline">Register</button></Link></h5>
                </form>
            </div>

        </div>
    </>
  )
}

export default ForgotPass