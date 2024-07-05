import React from 'react';
import stories from '../../assets/8.jpg';

const blogStories = () => {
  return (
    <div className='mt-[5em]'>
      <div className='mb-5 text-xl text-zinc-400 font-opensans font-medium underline transition-all'>(03) Our Blog's and Stories </div>
      <div className='relative p-12 w-full max-w-full h-auto bg-slate-50 rounded-3xl mb-5'>
        <h2 className='text-5xl text-zinc-900 font-semibold font-merriweather leading-normal'>Love Chronicles, Stories, Tips, and Insights form Our Dating Site Blog</h2>
        <div className='flex flex-row gap-4 mt-9'>
          <div className='blog max-w-[25%] h-fit flex flex-col justify-between gap-7 bg-slate-200 p-7 rounded-3xl'>
            <h3 className='text-3xl text-zinc-900 font-playfair font-bold'>Mistake to Avoid in Online Dating</h3>
            <p className='text-lg text-zinc-900 font-lato font-normal'>Uncover the common pitfalls, from profile faux pas to messaging mishaps, discover the dos and don'ts of digital dating etiquette.</p>
          </div>

          <div className='blog max-w-[25%] h-fit flex flex-col justify-between gap-7 bg-zinc-900 p-7 rounded-3xl'>
            <h3 className='text-3xl text-slate-200 font-playfair font-bold'>How Dating Apps are Redefining Modern Romance</h3>
            <p className='text-lg text-slate-200 font-lato font-normal'>Experts insights into navigating the digital dating landscape.</p>
          </div>

          <div className='stores group relative overflow-hidden w-full h-fit flex flex-col gap -7 bg-slate-200 rounded-3xl'>
            <figure className='top-0 left-0 w-full h-[50vh] max-h-[50vh] pointer-events-none'>
              <img className='w-full h-full object-cover' src={stories} alt="storie" />
            </figure>          
            <figcaption className='absolute p-5 bottom-0'>
              <p className='text-lg text-justify text-white font-lato font-medium text-shadow-4xl mb-3'>"We met through this website and it was love at first sight. Thank you for bringing us together."</p>
              <h5 className='text-base text-white font-lato font-medium text-shadow-2xl'>-Amit & Priya</h5>
            </figcaption>
            <dir className='absolute right-5 bottom-0 flex flex-row gap-3 opacity-0 transition-all group-hover:opacity-100'>
              <button className='border-2 border-slate-200 bg-slate-200 rounded-3xl text-lg font-bold text-zinc-900 w-12'><i className='ri-arrow-left-line'></i></button>
              <button className='border-2 border-slate-200 bg-slate-200 rounded-3xl text-lg font-bold text-zinc-900 w-12'><i className='ri-arrow-right-line'></i></button>
            </dir>
          </div>
        </div>
      </div>
    </div>
  )
}

export default blogStories