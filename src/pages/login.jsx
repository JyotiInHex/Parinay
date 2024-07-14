import React from "react";
import logo from "../assets/logo.jpeg";

const Login = () => {
  return (
    <>
      <div className="relative w-full h-auto text-zinc-700">
        <i className="ri-close-line absolute -right-3 -top-5 text-xl  font-semibold cursor-pointer"></i>
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
        <div class="flex flex-row justify-between items-start gap-10">
            <div className="w-fit h-auto">
                <h2 class="text-4xl font-playfair font-extrabold mb-3">Welcome Back!</h2>
                <h3 class="text-xl font-lato font-semibold mb-4">Log in to your account</h3>
                <p class="text-lg font-opensans font-medium mb-6">Enter your email and password to access your profile and connect with potential matches.</p>
            </div>
            <form className="w-[130vh] bg-white p-7 rounded-lg drop-shadow-lg" action="/login" method="POST">
                <div class="mb-4 drop-shadow-md">
                    <label class="block text-lg font-lato font-semibold mb-1" for="email">Email</label>
                    <input class="outline-none border-2 border-zinc-200 rounded-xl w-full py-3 px-4 text-lg font-lato font-semibold text-zinc-800 leading-tight transition-all focus:border-blue-500" id="email" type="email" name="email" required/>
                </div>
                <div class="mb-6 drop-shadow-md">
                    <label class="block text-lg font-lato font-semibold mb-1" for="password">Password</label>
                    <input class="outline-none border-2 border-zinc-200 rounded-xl w-full py-3 px-4 text-lg font-lato font-semibold text-zinc-800 leading-tight transition-all focus:border-blue-500" id="password" type="password" name="password" required/>
                    <button className="w-full underline text-right text-base text-zinc-500 font-lato font-medium transition-all  hover:text-zinc-600">Forgot?</button>
                </div>
                <button class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">Sign In</button>
            </form>
        </div>

      </div>
    </>
  );
};

export default Login;
