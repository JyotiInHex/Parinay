import React from 'react'

const Plans = () => {
  return (
    <>
        <div className='priceCardsContainer flex flex-auto justify-center gap-5'>
            <div id='priceCard' className='relative overflow-hidden z-10 w-[25%] px-11 py-5 flex flex-col rounded-2xl bg-cyan-200 border-4 border-white'>
                <figure className='priceBg-art one absolute top-0 left-0 z-[-1] w-full h-full opacity-10 mix-blend-multiply translate-x-20'></figure>
                <h3 className='my-2 text-2xl text-zinc-700 font-playfair font-semibold'>Essentials</h3>
                <h5 className='text-4xl text-zinc-700 font-opensans font-medium'>Free</h5>
                <hr className='border-zinc-700 border-[1px] my-5'></hr>
                <h6 className='text-[1.55em] text-zinc-700 font-lato font-semibold'>Features</h6>
                <p className='text-lg text-zinc-700 font-lato font-semibold'>Everything in our Free Plan -</p>
                <ul className='flex flex-col gap-y-1 my-2 mb-5 text-xl text-zinc-800'>
                    <li className='ri-check-double-fill'>&nbsp;<span className='font-lato font-semibold'>Create Profile.</span></li>
                    <li className='ri-check-double-fill'>&nbsp;<span className='font-lato font-semibold'>Browse Matches.</span></li>
                    <li className='ri-check-double-fill'>&nbsp;<span className='font-lato font-semibold'>Send Interests.</span></li>
                    <li className='ri-check-double-fill'>&nbsp;<span className='font-lato font-semibold'>View Profiles.</span></li>
                    <li className='ri-check-double-fill'>&nbsp;<span className='font-lato font-semibold'>Limited Messaging (Max 10).</span></li>
                </ul>
                <button className='relative z-10 overflow-hidden group w-full h-fit py-1 my-4 border-2 border-zinc-700 rounded-md text-xl text-zinc-700 font-semibold flex justify-center items-center gap-1 hover:text-slate-50 transition-all after:w-full after:h-full after:bg-zinc-700 after:absolute after:-bottom-16 after:left-0 after:z-[-1] after:rounded-[50%] after:transition-all hover:after:rounded-none hover:after:bottom-0'>Get Started</button>
            </div>
            <div id='priceCard' className='relative overflow-hidden z-10 w-[25%] px-11 py-5 flex flex-col rounded-2xl bg-gray-200 border-4 border-white'>
                <figure className='priceBg-art two absolute top-0 left-0 z-[-1] w-full h-full opacity-10 mix-blend-multiply translate-x-20'></figure>
                <h3 className='my-2 text-2xl text-zinc-700 font-playfair font-semibold'>Silver Synergy</h3>
                <h5 className='text-4xl text-zinc-700 font-opensans font-medium'>₹499/Month</h5>
                <hr className='border-zinc-700 border-[1px] my-5'></hr>
                <h6 className='text-[1.55em] text-zinc-700 font-lato font-semibold'>Features</h6>
                <p className='text-lg text-zinc-700 font-lato font-semibold'>Everything in Essentials Plan -</p>
                <ul className='flex flex-col gap-y-1 my-2 mb-5 text-xl text-zinc-800'>
                    <li className='ri-check-double-fill'>&nbsp;<span className='font-lato font-semibold'>All Basic Features.</span></li>
                    <li className='ri-check-double-fill'>&nbsp;<span className='font-lato font-semibold'>Basic Search.</span></li>
                    <li className='ri-check-double-fill'>&nbsp;<span className='font-lato font-semibold'>Match Suggestions.</span></li>
                    <li className='ri-check-double-fill'>&nbsp;<span className='font-lato font-semibold'>Limited Messaging (Max 20).</span></li>
                    <li className='ri-check-double-fill'>&nbsp;<span className='font-lato font-semibold'>View Detailed Profiles.</span></li>
                </ul>
                <button className='relative z-10 overflow-hidden group w-full h-fit py-1 my-4 border-2 border-zinc-700 rounded-md text-xl text-zinc-700 font-semibold flex justify-center items-center gap-1 hover:text-slate-50 transition-all after:w-full after:h-full after:bg-zinc-700 after:absolute after:-bottom-16 after:left-0 after:z-[-1] after:rounded-[50%] after:transition-all hover:after:rounded-none hover:after:bottom-0'>Get Started</button>
            </div>
            <div id='priceCard' className='relative overflow-hidden z-10 w-[25%] px-11 py-5 flex flex-col rounded-2xl bg-yellow-200 border-4 border-white'>
                <figure className='priceBg-art three whitespace-nowrap absolute top-0 left-0 z-[-1] w-full h-full opacity-10 mix-blend-multiply translate-x-20'></figure>
                <h3 className='my-2 text-2xl text-zinc-700 font-playfair font-semibold'>Golden Bond</h3>
                <h5 className='text-4xl text-zinc-700 font-opensans font-medium'>₹999/Month</h5>
                <hr className='border-zinc-700 border-[1px] my-5'></hr>
                <h6 className='text-[1.55em] text-zinc-700 font-lato font-semibold'>Features</h6>
                <p className='text-lg text-zinc-700 font-lato font-semibold'>Everything in Silver Plan -</p>
                <ul className='flex flex-col gap-y-1 my-2 mb-5 text-xl text-zinc-800'>
                    <li className='ri-check-double-fill'>&nbsp;<span className='font-lato font-semibold'>All Basic Features.</span></li>
                    <li className='ri-check-double-fill'>&nbsp;<span className='font-lato font-semibold'>Advanced Search.</span></li>
                    <li className='ri-check-double-fill'>&nbsp;<span className='font-lato font-semibold'>Pro MatchMaking.</span></li>
                    <li className='ri-check-double-fill'>&nbsp;<span className='font-lato font-semibold'>Unlimited Messaging (Chats only).</span></li>
                    <li className='ri-check-double-fill'>&nbsp;<span className='font-lato font-semibold'>View Detailed Profiles.</span></li>
                </ul>
                <button className='relative z-10 overflow-hidden group w-full h-fit py-1 my-4 border-2 border-zinc-700 rounded-md text-xl text-zinc-700 font-semibold flex justify-center items-center gap-1 hover:text-slate-50 transition-all after:w-full after:h-full after:bg-zinc-700 after:absolute after:-bottom-16 after:left-0 after:z-[-1] after:rounded-[50%] after:transition-all hover:after:rounded-none hover:after:bottom-0'>Get Started</button>
            </div>
            <div id='priceCard' className='relative overflow-hidden z-10 w-[25%] px-11 py-5 flex flex-col rounded-2xl bg-violet-200 border-4 border-white'>
                <figure className='priceBg-art four whitespace-nowrap absolute top-0 left-0 z-[-1] w-full h-full opacity-10 mix-blend-multiply translate-x-20'></figure>
                <h3 className='my-2 text-2xl text-zinc-700 font-playfair font-semibold'>Platinum Prestige</h3>
                <h5 className='text-4xl text-zinc-700 font-opensans font-medium'>₹1499/Month</h5>
                <hr className='border-zinc-700 border-[1px] my-5'></hr>
                <h6 className='text-[1.55em] text-zinc-700 font-lato font-semibold'>Features</h6>
                <p className='text-lg text-zinc-700 font-lato font-semibold'>Everything in Golden Plan -</p>
                <ul className='flex flex-col gap-y-1 my-2 mb-5 text-xl text-zinc-800'>
                    <li className='ri-check-double-fill'>&nbsp;<span className='font-lato font-semibold'>Access All Features.</span></li>
                    <li className='ri-check-double-fill'>&nbsp;<span className='font-lato font-semibold'>Profile Boosting.</span></li>
                    <li className='ri-check-double-fill'>&nbsp;<span className='font-lato font-semibold'>Privacy Control.</span></li>
                    <li className='ri-check-double-fill'>&nbsp;<span className='font-lato font-semibold'>Messaging + Calling.</span></li>
                </ul>
                <button className='relative z-10 overflow-hidden group w-full h-fit py-1 my-4 border-2 border-zinc-700 rounded-md text-xl text-zinc-700 font-semibold flex justify-center items-center gap-1 hover:text-slate-50 transition-all after:w-full after:h-full after:bg-zinc-700 after:absolute after:-bottom-16 after:left-0 after:z-[-1] after:rounded-[50%] after:transition-all hover:after:rounded-none hover:after:bottom-0'>Get Started</button>
            </div>
        </div>
    </>
  )
}

export default Plans