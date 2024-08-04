import React from "react";
import logo from "../assets/logo.jpeg";
import { Link } from "react-router-dom";

const Login = ({onForgotClick, onCloseClick}) => {
  return (
    <>
      <div className="relative w-full h-auto text-zinc-700">
        <i className="ri-close-line absolute -right-3 top-6 text-xl font-semibold cursor-pointer" onClick={onCloseClick}></i>
        <figure className="w-auto h-auto flex flex-col items-center justify-center mb-6">
          <img
            className="relative rounded-full w-[5.5%] h-auto object-cover pointer-events-none"
            src={logo}
            alt="logo"
          />
          <h3 className="text-lg font-lato font-semibold">
            Parinay.com
          </h3>
        </figure>
        <div className="flex flex-row justify-between items-start gap-10">
            <div className="w-fit h-auto">
                <h2 className="text-4xl font-playfair font-extrabold mb-3">Welcome Back !</h2>
                <h3 className="text-xl font-lato font-semibold mb-4">Log in to your account</h3>
                <p className="text-lg font-opensans font-medium mb-6">Enter your email and password to access your profile and connect with potential matches.</p>
            </div>
            <form className="w-[125vh] bg-white p-7 rounded-lg drop-shadow-lg" method="POST">
                <div className="mb-4 drop-shadow-md">
                    <label className="block text-lg font-lato font-semibold mb-1" htmlFor="email">Email</label>
                    <input className="outline-none border-2 border-zinc-200 rounded-xl w-full py-3 px-4 text-base font-lato font-semibold text-zinc-800 leading-tight transition-all focus:border-blue-500" id="email" type="email" name="email" required/>
                </div>
                <div className="mb-6 drop-shadow-md">
                    <label className="block text-lg font-lato font-semibold mb-1" htmlFor="password">Password</label>
                    <input className="outline-none border-2 border-zinc-200 rounded-xl w-full py-3 px-4 text-base font-lato font-semibold text-zinc-800 leading-tight transition-all focus:border-blue-500" id="password" type="password" name="password" required autoComplete="off"/>
                    <button className="w-full underline text-right text-base text-zinc-500 font-lato font-medium transition-all  hover:text-zinc-600" type="button" onClick={onForgotClick}>Forgot?</button>
                </div>
                <button className="w-full bg-blue-500 transition-all hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg" type="submit">Sign In</button>
                <h5 className="mt-3 text-center text-base font-lato font-medium">Don’t have an account? <Link to="/register"><button type="button" className="font-semibold text-blue-500 transition-all hover:text-blue-700 underline" onClick={onCloseClick}>Register</button></Link></h5>
            </form>
        </div>
      </div>
    </>
  );
};

export default Login;
