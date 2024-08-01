import React, { useContext } from "react";
import { MyContext } from "../auth/register";
import {
  MaritalStatus,
  Diets,
  Heights,
  Hobbies,
  MostLikes,
  Pets,
} from "../data/formData";

const Step_3 = () => {
  const {
    formData,
    handleChange,
    handlePrev,
    handleNext,
    errors,
    isDropdownOpen,
    toggleDropdown,
    setIsDropdownOpen,
    setToggleDropdown,
  } = useContext(MyContext);

  return (
    <>
      <h2 className="flex justify-between items-end text-3xl font-playfair font-extrabold border-b-2 border-gray-600 pb-2">
        <i className="ri-arrow-left-s-line text-end font-medium"></i>
        Personal Details
        <i className="ri-arrow-right-s-line text-end font-medium"></i>
      </h2>
      <div className="relative flex flex-col mt-5 w-full h-auto">
        {/*  Marital Status */}
        <label
          className="relative flex flex-col gap-3 mb-4"
          htmlFor="Marital Status"
        >
          <h3 className="text-xl font-lato font-semibold">Marital Status:</h3>
          {errors.marital && <p className="error">{errors.marital}</p>}
          <div className="relative">
            <input
              className="outline-none border-2 border-zinc-200 rounded-xl w-full py-3 px-4 text-lg font-lato font-semibold text-zinc-800 leading-tight cursor-pointer transition-all focus:border-blue-500"
              type="text"
              name="marital"
              id="Marital Status"
              value={formData.marital}
              readOnly
              onClick={() => {
                setIsDropdownOpen(!isDropdownOpen);
                setToggleDropdown("maritalStatus");
              }}
            />
            {!isDropdownOpen && toggleDropdown === "maritalStatus" && (
              <div
                className="absolute flex flex-col gap-2 w-full h-fit max-h-[350px] mt-1 bg-white border-2 border-zinc-200 overflow-x-hidden overflow-y-auto rounded-xl z-10"
                id="dropDownBox"
              >
                {MaritalStatus.map((status, index) => (
                  <label
                    key={index}
                    className={`${
                      formData.marital === status.toLowerCase() &&
                      "bg-blue-500 text-slate-50"
                    } py-2 px-4 text-lg font-lato font-semibold cursor-pointer transition-all hover:text-zinc-700 hover:bg-gray-100 `}
                    htmlFor={status.toLowerCase()}
                  >
                    <input
                      type="radio"
                      name="marital"
                      id={status.toLowerCase()}
                      className="w-fit h-5 hidden"
                      value={status.toLowerCase()}
                      onChange={handleChange}
                    />
                    {status}
                  </label>
                ))}
              </div>
            )}
          </div>
        </label>

        {/*  Diet */}
        <label className="relative flex flex-col gap-3 mb-4" htmlFor="Diet">
          <h3 className="text-xl font-lato font-semibold">Diet:</h3>
          {errors.diet && <p className="error">{errors.diet}</p>}
          <div className="relative">
            <input
              className="outline-none border-2 border-zinc-200 rounded-xl w-full py-3 px-4 text-lg font-lato font-semibold text-zinc-800 leading-tight cursor-pointer transition-all focus:border-blue-500"
              type="text"
              name="diet"
              id="Diet"
              value={formData.diet}
              readOnly
              onClick={() => {
                setIsDropdownOpen(!isDropdownOpen);
                setToggleDropdown("diet");
              }}
            />
            {!isDropdownOpen && toggleDropdown === "diet" && (
              <div
                className="absolute flex flex-col gap-2 w-full h-fit max-h-[350px] mt-1 bg-white border-2 border-zinc-200 overflow-x-hidden overflow-y-auto rounded-xl z-10"
                id="dropDownBox"
              >
                {Diets.map((diet, index) => (
                  <label
                    key={index}
                    className={`${
                      formData.diet === diet.toLowerCase() &&
                      "bg-blue-500 text-slate-50"
                    } py-2 px-4 text-lg font-lato font-semibold cursor-pointer transition-all hover:text-zinc-700 hover:bg-gray-100 `}
                    htmlFor={diet.toLowerCase()}
                  >
                    <input
                      type="radio"
                      name="diet"
                      id={diet.toLowerCase()}
                      className="w-fit h-5 hidden"
                      value={diet.toLowerCase()}
                      onChange={handleChange}
                    />
                    {diet}
                  </label>
                ))}
              </div>
            )}
          </div>
        </label>

        {/*  Height */}
        <label className="relative flex flex-col gap-3 mb-4" htmlFor="Height">
          <h3 className="text-xl font-lato font-semibold">Height:</h3>
          {errors.height && <p className="error">{errors.height}</p>}
          <div className="relative">
            <input
              className="outline-none border-2 border-zinc-200 rounded-xl w-full py-3 px-4 text-lg font-lato font-semibold text-zinc-800 leading-tight cursor-pointer transition-all focus:border-blue-500"
              type="text"
              name="height"
              id="Height"
              value={formData.height}
              readOnly
              onClick={() => {
                setIsDropdownOpen(!isDropdownOpen);
                setToggleDropdown("height");
              }}
            />
            {!isDropdownOpen && toggleDropdown === "height" && (
              <div
                className="absolute flex flex-col gap-2 w-full h-fit max-h-[350px] mt-1 bg-white border-2 border-zinc-200 overflow-x-hidden overflow-y-auto rounded-xl z-10"
                id="dropDownBox"
              >
                {Heights.map((height, index) => (
                  <label
                    key={index}
                    className={`${
                      formData.height === height.toLowerCase() &&
                      "bg-blue-500 text-slate-50"
                    } py-2 px-10 text-lg font-lato font-semibold cursor-pointer transition-all hover:text-zinc-700 hover:bg-gray-100 `}
                    htmlFor={height.toLowerCase()}
                  >
                    <input
                      type="radio"
                      name="height"
                      id={height.toLowerCase()}
                      className="w-fit h-5 hidden"
                      value={height.toLowerCase()}
                      onChange={handleChange}
                    />
                    {height}
                  </label>
                ))}
              </div>
            )}
          </div>
        </label>

        {/*  Hobbies */}
        <label className="relative flex flex-col gap-3 mb-4" htmlFor="Hobbies">
          <h3 className="text-xl font-lato font-semibold">Hobby:</h3>
          {errors.hobbies && <p className="error">{errors.hobbies}</p>}
          <div className="relative">
            <input
              className="outline-none border-2 border-zinc-200 rounded-xl w-full py-3 px-4 text-lg font-lato font-semibold text-zinc-800 leading-tight cursor-pointer transition-all focus:border-blue-500"
              type="text"
              name="hobbies"
              id="Hobbies"
              value={formData.hobbies}
              readOnly
              onClick={() => {
                setIsDropdownOpen(!isDropdownOpen);
                setToggleDropdown("hobbies");
              }}
            />
            {!isDropdownOpen && toggleDropdown === "hobbies" && (
              <div
                className="absolute flex flex-col gap-2 w-full h-fit max-h-[350px] mt-1 bg-white border-2 border-zinc-200 overflow-x-hidden overflow-y-auto rounded-xl z-10"
                id="dropDownBox"
              >
                {Hobbies.map((hobby, index) => (
                  <label
                    key={index}
                    className={`${
                      formData.hobbies === hobby.toLowerCase() &&
                      "bg-blue-500 text-slate-50"
                    } py-2 px-4 text-lg font-lato font-semibold cursor-pointer transition-all hover:text-zinc-700 hover:bg-gray-100 `}
                    htmlFor={hobby.toLowerCase()}
                  >
                    <input
                      type="radio"
                      name="hobbies"
                      id={hobby.toLowerCase()}
                      className="w-fit h-5 hidden"
                      value={hobby.toLowerCase()}
                      onChange={handleChange}
                    />
                    {hobby}
                  </label>
                ))}
              </div>
            )}
          </div>
        </label>

        {/*  Most Like */}
        <label
          className="relative flex flex-col gap-3 mb-4"
          htmlFor="Most Like"
        >
          <h3 className="text-xl font-lato font-semibold">Most Like:</h3>
          {errors.mostLikes && <p className="error">{errors.mostLikes}</p>}
          <div className="relative">
            <input
              className="outline-none border-2 border-zinc-200 rounded-xl w-full py-3 px-4 text-lg font-lato font-semibold text-zinc-800 leading-tight cursor-pointer transition-all focus:border-blue-500"
              type="text"
              name="mostLikes"
              id="Most Like"
              value={formData.mostLikes}
              readOnly
              onClick={() => {
                setIsDropdownOpen(!isDropdownOpen);
                setToggleDropdown("mostLike");
              }}
            />
            {!isDropdownOpen && toggleDropdown === "mostLike" && (
              <div
                className="absolute flex flex-col gap-2 w-full h-fit max-h-[350px] mt-1 bg-white border-2 border-zinc-200 overflow-x-hidden overflow-y-auto rounded-xl z-10"
                id="dropDownBox"
              >
                {MostLikes.map((fav, index) => (
                  <label
                    key={index}
                    className={`${
                      formData.mostLikes === fav.toLowerCase() &&
                      "bg-blue-500 text-slate-50"
                    } py-2 px-4 text-lg font-lato font-semibold cursor-pointer transition-all hover:text-zinc-700 hover:bg-gray-100 `}
                    htmlFor={fav.toLowerCase()}
                  >
                    <input
                      type="radio"
                      name="mostLikes"
                      id={fav.toLowerCase()}
                      className="w-fit h-5 hidden"
                      value={fav.toLowerCase()}
                      onChange={handleChange}
                    />
                    {fav}
                  </label>
                ))}
              </div>
            )}
          </div>
        </label>

        {/*  Pet */}
        <label className="relative flex flex-col gap-3 mb-4" htmlFor="Pet">
          <h3 className="text-xl font-lato font-semibold">Pet:</h3>
          {errors.pet && <p className="error">{errors.pet}</p>}
          <div className="relative">
            <input
              className="outline-none border-2 border-zinc-200 rounded-xl w-full py-3 px-4 text-lg font-lato font-semibold text-zinc-800 leading-tight cursor-pointer transition-all focus:border-blue-500"
              type="text"
              name="pet"
              id="Pet"
              value={formData.pet}
              readOnly
              onClick={() => {
                setIsDropdownOpen(!isDropdownOpen);
                setToggleDropdown("pets");
              }}
            />
            {!isDropdownOpen && toggleDropdown === "pets" && (
              <div
                className="absolute flex flex-col gap-2 w-full h-fit max-h-[350px] mt-1 bg-white border-2 border-zinc-200 overflow-x-hidden overflow-y-auto rounded-xl z-10"
                id="dropDownBox"
              >
                {Pets.map((pet, index) => (
                  <label
                    key={index}
                    className={`${
                      formData.pet === pet.toLowerCase() &&
                      "bg-blue-500 text-slate-50"
                    } py-2 px-4 text-lg font-lato font-semibold cursor-pointer transition-all hover:text-zinc-700 hover:bg-gray-100 `}
                    htmlFor={pet.toLowerCase()}
                  >
                    <input
                      type="radio"
                      name="pet"
                      id={pet.toLowerCase()}
                      className="w-fit h-5 hidden"
                      value={pet.toLowerCase()}
                      onChange={handleChange}
                    />
                    {pet}
                  </label>
                ))}
              </div>
            )}
          </div>
        </label>
        <div className="flex flex-row justify-between items-center w-full h-auto">
          <button
            className="self-end w-fit h-auto px-5 py-2 bg-gray-500 rounded-lg flex justify-between items-center text-xl text-slate-100 font-opensans font-medium transition-all hover:bg-gray-600"
            type="button"
            onClick={handlePrev}
          >
            <i className="ri-arrow-left-s-line text-end font-medium"></i>
            Back
          </button>
          <button
            className="self-end w-fit h-auto px-5 py-2 bg-gray-500 rounded-lg flex justify-between items-center text-xl text-slate-100 font-opensans font-medium transition-all hover:bg-gray-600"
            type="button"
            onClick={handleNext}
          >
            Next
            <i className="ri-arrow-right-s-line text-end font-medium"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default Step_3;
