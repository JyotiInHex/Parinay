import {Link } from "react-router-dom";
import background from '../assets/parinay-desktop-banner 3.webp';
import Profiles from "../components/dynamic/profiles";
import About from "../components/dynamic/about";
import Features from "../components/static/features";
import BlogStories from "../components/dynamic/blogStories";
import GetStarted from "../components/dynamic/getStarted";

const Landing = () => {
  return (
    <div className="cursor-default">
      <div className='px-11 w-full h-auto flex flex-col mb-9'>
        <div className='relative w-full h-auto overflow-hidden bg-transparent flex items-center justify-start rounded-3xl'>
            <figure className='background w-full h-[95vh]'>
              <img src={background} alt='background' className='w-full h-full object-cover pointer-events-none'></img>
            </figure>
            <figcaption className='absolute z-10 p-11 w-full h-auto text-left pointer-events-none'>
              <h1 className='text-8xl font-chaviera text-white capitalize text-shadow-2xl'>Welcome to Parinay.com <br></br> <span className="text-6xl">Find your perfect match effortlessly.</span></h1>
              <figcaption className="flex flex-col gap-3 text-shadow-5xl">
                <h2 className='flex items-center justify-end gap-2 text-right text-xl text-white font-merriweather'><span className='font-lato bg-[#4CAF50] border-2 border-white px-4 py-2 rounded-full pointer-events-auto'><Link>Join our</Link></span> vibrant community and discover your perfect life partner.</h2>
                <h2 className='text-right text-xl text-slate-200 font-merriweather flex items-center justify-end gap-1'>With thousands of profiles <Profiles/> to explore, you're destined to meet someone truly special.</h2>
              </figcaption>
            </figcaption>
        </div>
        <form className="w-[85%] h-40 bg-[#ffffffb7] self-center -translate-y-20 rounded-xl backdrop-blur-lg flex items-center gap-4 p-8 ">
            <label htmlFor="looking" className="w-full flex gap-2 items-center">
              <span className="text-lg whitespace-nowrap text-zinc-900 font-semibold font-lato tracking-wide">I'm looking For a</span>
              <select className="px-3 py-2 w-full outline-none rounded-lg text-base text-zinc-800 font-lato font-semibold" id="looking">
                <option value="">Woman</option>
                <option value="">Man</option>
              </select>
            </label>
            <label htmlFor="aged" className="w-full flex gap-2 items-center">
              <span className="text-lg whitespace-nowrap text-zinc-900 font-semibold font-lato tracking-wide">aged</span>
              <select className="px-3 py-2 w-full outline-none rounded-lg text-base text-zinc-800 font-lato font-semibold" id="aged">
                <option value="21">21</option>
                <option value="22">22</option>
                <option selected value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
                <option value="26">26</option>
                <option value="27">27</option>
                <option value="28">28</option>
                <option value="29">29</option>
                <option value="30">30</option>
              </select>
              <span className="text-lg whitespace-nowrap text-zinc-900 font-semibold font-lato tracking-wide">to</span>
              <select className="px-3 py-2 w-full outline-none rounded-lg text-base text-zinc-800 font-lato font-semibold" >
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
                <option selected value="26">26</option>
                <option value="27">27</option>
                <option value="28">28</option>
                <option value="29">29</option>
                <option value="30">30</option>
              </select>
            </label>
            <label htmlFor="religion" className="w-full flex gap-2 items-center">
              <span className="text-lg whitespace-nowrap text-zinc-900 font-semibold font-lato tracking-wide">of religion</span>
              <select id="religion" className="px-3 py-2 w-full outline-none rounded-lg text-base text-zinc-800 font-lato font-semibold">
                <option value="">Select</option>
                <option value="">Hindu</option>
                <option value="">Muslim</option>
                <option value="">Christian</option>
                <option value="">Sikh</option>
                <option value="">Parsi</option>
                <option value="">Jain</option>
                <option value="">Buddhist</option>
                <option value="">Jewish</option>
                <option value="">No Religion</option>
                <option value="">Spiritual</option>
                <option value="">Others</option>
              </select>
            </label>
            <button type="button" className="relative overflow-hidden w-[50%] p-1 text-lg text-zinc-900 text-center font-lato font-semibold whitespace-nowrap border-2 border-zinc-900 bg-transparent rounded-full hover:text-slate-100 after:absolute after:left-[-6px] after:top-6 after:z-[-1] after:translate-y-[50%] after:rounded-[50%] after:bg-zinc-900 after:w-[10em] after:h-[2.5em] after:transition-all duration-1000 ease-in-out hover:after:top-[-25px] hover:after:rounded-none">Find My Match</button>
        </form>
        <Features/>
        <About/>
        <BlogStories/>
      </div>
      <GetStarted/>
    </div>
  )
}

export default Landing;