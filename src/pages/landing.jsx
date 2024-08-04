import { useState } from "react";
import { Link } from "react-router-dom";
import background from "../assets/parinay-desktop-banner 3.webp";
import Profiles from "../components/dynamic/profiles";
import About from "../components/dynamic/about";
import Features from "../components/dynamic/features";
import BlogStories from "../components/dynamic/blogStories";
import GetStarted from "../components/dynamic/getStarted";
import * as fromData from "../data/formData";

const Landing = () => {
  const { Genders } = fromData;
  const [preferenceData, setPrefData] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [toggleDropdown, setToggleDropdown] = useState("");

  const handleChange = () => {};
  

  return (
    <>
      <div className="px-11 w-full h-auto flex flex-col mb-9">
        <div className="relative w-full h-auto overflow-hidden bg-transparent flex items-center justify-start rounded-3xl">
          <figure className="background w-full h-[95vh]">
            <img
              src={background}
              alt="background"
              className="w-full h-full object-cover pointer-events-none"
            ></img>
          </figure>
          <figcaption className="absolute z-10 p-11 w-full h-auto text-left pointer-events-none">
            <h1 className="text-8xl font-chaviera text-white capitalize text-shadow-2xl">
              Welcome to Parinay.com <br></br>{" "}
              <span className="text-6xl">
                Find your perfect match effortlessly.
              </span>
            </h1>
            <figcaption className="flex flex-col gap-3 text-shadow-5xl">
              <h2 className="flex items-center justify-end gap-2 text-right text-xl text-white font-merriweather">
                <span className="font-lato font-semibold underline rounded-full pointer-events-auto">
                  <Link>Join our</Link>
                </span>{" "}
                vibrant community and discover your perfect life partner.
              </h2>
              <h2 className="text-right text-xl text-slate-200 font-merriweather flex items-center justify-end gap-1">
                With thousands of profiles <Profiles /> to explore, you're
                destined to meet someone truly special.
              </h2>
            </figcaption>
          </figcaption>
        </div>
        <form className="w-[85%] h-40 bg-[#ffffffb7] self-center -translate-y-20 rounded-xl backdrop-blur-lg flex items-center gap-4 p-8 text-zinc-700">
          <fieldset className="flex gap-3 items-center">
            <h5 className="text-xl font-chaviera font-semibold text-shadow-md">
              I'm looking For a
            </h5>
            <label htmlFor="Looking For" className="relative">
              <input
                className="cursor-pointer outline-none border-2 border-gray-300 rounded-md px-3 py-1 bg-white text-lg font-playfair font-semibold transition-all focus:border-blue-500"
                type="text"
                name="lookingFor"
                id="Looking For"
                value={"Woman"}
                readOnly
                onClick={() => {
                  setIsDropdownOpen(!isDropdownOpen);
                  setToggleDropdown("lookingFor");
                }}
              />
              {!isDropdownOpen && (toggleDropdown === "lookingFor") &&
                <div className="absolute left-0 flex flex-col gap-2 border-2 border-gray-200 bg-zinc-600 w-full h-fit mt-1 py-2 rounded-md  transition-all">
                  {Genders.slice(0, 2).map((gender, index) => (
                    <label
                    key={index}
                    htmlFor={gender}
                    className="cursor-pointer bg-slate-50 px-3 py-1 text-lg font-playfair font-semibold"
                    >
                      <input type="radio" name="gender" id={gender} hidden />
                      {gender}
                    </label>
                  ))}
                </div>
              }
            </label>
          </fieldset>

          {/* <button type="button" className="relative overflow-hidden w-[50%] p-1 text-lg text-zinc-900 text-center font-lato font-semibold whitespace-nowrap border-2 border-zinc-900 bg-transparent rounded-full hover:text-slate-100 after:absolute after:left-[-6px] after:top-6 after:z-[-1] after:translate-y-[50%] after:rounded-[50%] after:bg-zinc-900 after:w-[10em] after:h-[2.5em] after:transition-all duration-1000 ease-in-out hover:after:top-[-25px] hover:after:rounded-none">Find My Match</button> */}
        </form>
        <Features />
        <About />
        <BlogStories />
      </div>
      <GetStarted />
    </>
  );
};

export default Landing;
