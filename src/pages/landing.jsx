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
  const { Genders, Religions} = fromData;
  const preferences = {
    lookingFor: "",
    ageFrom: "",
    ageTo: "",
    religion: "",
  };
  const ages = Array.from({ length: 51 }, (_, i) => 20 + i);
  const [preferenceData, setPrefData] = useState(preferences);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [toggleDropdown, setToggleDropdown] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPrefData({ ...preferenceData, [name]: value });
    setIsDropdownOpen(false);
    setToggleDropdown("");
  };

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
            <h5 className="whitespace-nowrap text-xl font-chaviera font-semibold text-shadow-md">
              I'm looking For a
            </h5>
            <label htmlFor="Looking For" className="relative">
              <input
                className="w-full cursor-pointer outline-none border-2 border-gray-300 rounded-xl px-3 py-1 bg-white text-lg font-playfair font-semibold transition-all focus:border-blue-500"
                type="text"
                name="lookingFor"
                id="Looking For"
                value={
                  preferenceData.lookingFor
                    ? preferenceData.lookingFor
                    : "Select"
                }
                readOnly
                onClick={() => {
                  setIsDropdownOpen(!isDropdownOpen);
                  setToggleDropdown("lookingFor");
                }}
              />
              {!isDropdownOpen && toggleDropdown === "lookingFor" && (
                <div className="absolute left-0 flex flex-col gap-2 border-2 border-gray-200 bg-slate-50 w-full h-fit mt-1 py-2 rounded-xl  transition-all">
                  {Genders.slice(0, 2).map((gender, index) => (
                    <label
                      key={index}
                      htmlFor={gender}
                      className={`${
                        preferenceData.lookingFor === gender && "bg-slate-200"
                      } cursor-pointer px-3 py-1 text-lg font-playfair font-semibold`}
                    >
                      <input
                        id={gender}
                        type="radio"
                        name="lookingFor"
                        value={gender}
                        hidden
                        onChange={handleChange}
                      />
                      {gender}
                    </label>
                  ))}
                </div>
              )}
            </label>
          </fieldset>

          <fieldset className="flex gap-3 items-center">
            <h5 className="whitespace-nowrap text-xl font-chaviera font-semibold text-shadow-md">
              Aged
            </h5>
            <label htmlFor="Age From" className="relative">
              <input
                className="w-full cursor-pointer outline-none border-2 border-gray-300 rounded-xl px-3 py-1 bg-white text-lg font-playfair font-semibold transition-all focus:border-blue-500"
                type="text"
                name="ageFrom"
                id="Age From"
                value={preferenceData.ageFrom ? preferenceData.ageFrom : "20"}
                readOnly
                onClick={() => {
                  setIsDropdownOpen(!isDropdownOpen);
                  setToggleDropdown("ageFrom");
                }}
              />
              {!isDropdownOpen && toggleDropdown === "ageFrom" && (
                <div
                  id="dropDownBox"
                  className="absolute left-0 w-full h-auto min-h-96 max-h-96 overflow-auto flex flex-col gap-2 border-2 border-gray-200 bg-slate-50 mt-1 py-2 rounded-xl  transition-all"
                >
                  {ages.map((fromAge, index) => (
                    <label
                      key={index}
                      htmlFor={fromAge}
                      className={`${
                        preferenceData.ageFrom === `${fromAge}` &&
                        "bg-slate-200"
                      } cursor-pointer px-3 py-1 text-lg font-playfair font-semibold`}
                    >
                      <input
                        id={fromAge}
                        type="radio"
                        name="ageFrom"
                        value={fromAge}
                        hidden
                        onChange={handleChange}
                      />
                      {fromAge}
                    </label>
                  ))}
                </div>
              )}
            </label>
          </fieldset>

          <fieldset className="flex gap-3 items-center">
            <h5 className="whitespace-nowrap text-xl font-chaviera font-semibold text-shadow-md">
              To
            </h5>
            <label htmlFor="Age To" className="relative">
              <input
                className="w-full cursor-pointer outline-none border-2 border-gray-300 rounded-xl px-3 py-1 bg-white text-lg font-playfair font-semibold transition-all focus:border-blue-500"
                type="text"
                name="ageTo"
                id="Age To"
                value={preferenceData.ageTo ? preferenceData.ageTo : "26"}
                readOnly
                onClick={() => {
                  setIsDropdownOpen(!isDropdownOpen);
                  setToggleDropdown("ageTo");
                }}
              />
              {!isDropdownOpen && toggleDropdown === "ageTo" && (
                <div
                  id="dropDownBox"
                  className="absolute left-0 w-full h-auto min-h-96 max-h-96 overflow-auto flex flex-col gap-2 border-2 border-gray-200 bg-slate-50 mt-1 py-2 rounded-xl  transition-all"
                >
                  {ages.map((toAge, index) => (
                    <label
                      key={index}
                      htmlFor={toAge}
                      className={`${
                        preferenceData.ageTo === `${toAge}` && "bg-slate-200"
                      } cursor-pointer px-3 py-1 text-lg font-playfair font-semibold`}
                    >
                      <input
                        id={toAge}
                        type="radio"
                        name="ageTo"
                        value={toAge}
                        hidden
                        onChange={handleChange}
                      />
                      {toAge}
                    </label>
                  ))}
                </div>
              )}
            </label>
          </fieldset>

          <fieldset className="flex gap-3 items-center">
            <h5 className="whitespace-nowrap text-xl font-chaviera font-semibold text-shadow-md">
              Religion
            </h5>
            <label htmlFor="Religion" className="relative">
              <input
                className="w-full cursor-pointer outline-none border-2 border-gray-300 rounded-xl px-3 py-1 bg-white text-lg font-playfair font-semibold transition-all focus:border-blue-500"
                type="text"
                name="religion"
                id="Religion"
                value={
                  preferenceData.religion ? preferenceData.religion : "Select"
                }
                readOnly
                onClick={() => {
                  setIsDropdownOpen(!isDropdownOpen);
                  setToggleDropdown("religion");
                }}
              />
              {!isDropdownOpen && toggleDropdown === "religion" && (
                <div
                  id="dropDownBox"
                  className="absolute left-0 w-full h-fit max-h-96 overflow-auto flex flex-col gap-2 border-2 border-gray-200 bg-slate-50 mt-1 py-2 rounded-xl  transition-all"
                >
                  {Religions.map((religion, index) => (
                    <label
                      key={index}
                      htmlFor={religion}
                      className={`${
                        preferenceData.religion === `${religion}` && "bg-slate-200"
                      } cursor-pointer px-3 py-1 text-lg font-playfair font-semibold`}
                    >
                      <input
                        id={religion}
                        type="radio"
                        name="religion"
                        value={religion}
                        hidden
                        onChange={handleChange}
                      />
                      {religion}
                    </label>
                  ))}
                </div>
              )}
            </label>
          </fieldset>

          <button type="button" className="buttonEffect-1 z-10 outline-none w-1/4 h-auto py-1 border-2 border-zinc-700 rounded-full text-lg font-opensans font-semibold whitespace-nowrap hover:text-slate-50">Find Matches</button>
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
