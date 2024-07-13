import React from 'react'
import logo from '../assets/logo.jpeg';
const Login = () => {
  return (
    <>
        <div>
            <figure className='w-auto h-auto flex flex-col items-center justify-center mb-6'>
                <img className='rounded-full w-[12%] h-[12%] object-cover' src={logo} alt="logo" />
                <caption className='text-lg text-zinc-700 font-lato font-semibold'>Parinay.com</caption>
            </figure>
            <h2 className='w-full h-auto mb-5 flex justify-between items-center text-3xl text-zinc-700 font-opensans font-extrabold whitespace-break-spaces'>Welcome Back <span className='p-2 border-2 border-blue-600 bg-slate-50 drop-shadow-lg rounded-full -rotate-45'>🖐</span></h2>
            <form className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                        type="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Password</label>
                    <input
                        type="password"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
                >
                Login
                </button>
            </form>
        </div>
    </>
  )
}

export default Login