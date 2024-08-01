import React, { useContext } from "react";
import { Profiles, Genders, Religions } from "../data/formData";
import { MyContext } from "../auth/register";

const Step_1 = () => {
  const {
    formData,
    handleChange,
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
        Profile Information
        <i className="ri-arrow-right-s-line text-end font-medium"></i>
      </h2>
      <div className=" flex flex-col mt-5 w-full h-auto">
        {/* Profile For */}
        <div className="relative flex flex-row flex-wrap gap-3 gap-x-2 mb-5">
          <h3 className="text-xl font-lato font-semibold">Profile For:</h3>
          {Profiles.map((profile, index) => (
            <div
              key={index}
              className="w-fit h-fit flex items-center justify-between gap-2 border-2 border-blue-500 bg-blue-100 rounded-full px-5 py-1"
            >
              <input
                type="radio"
                name="profileFor"
                id={profile.toLowerCase()}
                className="w-fit h-5"
                value={profile.toLowerCase()}
                checked={profile.toLowerCase() === formData.profileFor}
                onChange={handleChange}
              />
              <label
                className="w-fit h-fit rounded-full text-lg font-lato font-semibold cursor-pointer"
                htmlFor={profile.toLowerCase()}
              >
                {profile}
              </label>
            </div>
          ))}
          {errors.profileFor && <p className="error">{errors.profileFor}</p>}
        </div>

        {/* First Name */}
        <label
          className="relative flex flex-col gap-3 mb-5"
          htmlFor="First_name"
        >
          <h3 className="text-xl font-lato font-semibold">First Name:</h3>
          {errors.fName && <p className="error">{errors.fName}</p>}
          <input
            className="outline-none border-2 border-zinc-200 rounded-xl w-full py-3 px-4 text-lg font-lato font-semibold text-zinc-800 leading-tight transition-all focus:border-blue-500"
            id="First_name"
            type="text"
            name="fName"
            value={formData.fName}
            onChange={handleChange}
          />
        </label>

        {/* Last Name */}
        <label
          className="relative flex flex-col gap-3 mb-5"
          htmlFor="Last_name"
        >
          <h3 className="text-xl font-lato font-semibold">Last Name:</h3>
          {errors.lName && <p className="error">{errors.lName}</p>}
          <input
            className="outline-none border-2 border-zinc-200 rounded-xl w-full py-3 px-4 text-lg font-lato font-semibold text-zinc-800 leading-tight transition-all focus:border-blue-500"
            id="Last_name"
            type="text"
            name="lName"
            value={formData.lName}
            onChange={handleChange}
          />
        </label>

        {/* Gender */}
        <div className="relative flex flex-wrap items-center gap-3 mb-5">
          <h3 className="text-xl font-lato font-semibold">Gender:</h3>
          {Genders.map((gender, index) => (
            <div
              key={index}
              className="w-fit h-fit flex items-center justify-between gap-2 border-2 border-yellow-500 bg-yellow-100 rounded-full px-5 py-1"
            >
              <input
                type="radio"
                name="gender"
                id={gender.toLowerCase()}
                className="w-fit h-5"
                value={gender.toLowerCase()}
                checked={gender.toLowerCase() === formData.gender}
                onChange={handleChange}
              />
              <label
                className="w-fit h-fit rounded-full text-lg font-lato font-semibold cursor-pointer"
                htmlFor={gender.toLowerCase()}
              >
                {gender}
              </label>
            </div>
          ))}
          {errors.gender && <p className="error">{errors.gender}</p>}
        </div>

        {/* Religion */}
        <label className="relative flex flex-col gap-3 mb-5" htmlFor="Religion">
          <h3 className="text-xl font-lato font-semibold">Religion:</h3>
          {errors.religion && <p className="error">{errors.religion}</p>}
          <div className="relative">
            <input
              className="outline-none border-2 border-zinc-200 rounded-xl w-full py-3 px-4 text-lg font-lato font-semibold text-zinc-800 leading-tight cursor-pointer transition-all focus:border-blue-500"
              type="text"
              name="religion"
              id="Religion"
              value={formData.religion}
              readOnly
              onClick={() => {
                setIsDropdownOpen(!isDropdownOpen);
                setToggleDropdown("religion");
              }}
            />
            {!isDropdownOpen && toggleDropdown === "religion" && (
              <div className="absolute flex flex-col gap-2 w-full h-fit min-h-full mt-1 bg-white border-2 border-zinc-200 overflow-x-hidden overflow-y-auto rounded-xl z-10">
                {Religions.map((religion, index) => (
                  <label
                    key={index}
                    className={`${
                      formData.religion === religion.toLowerCase() &&
                      "bg-blue-500 text-slate-50"
                    } py-2 px-4 text-lg font-lato font-semibold cursor-pointer transition-all hover:text-zinc-700 hover:bg-gray-100 `}
                    htmlFor={religion.toLowerCase()}
                  >
                    <input
                      type="radio"
                      name="religion"
                      id={religion.toLowerCase()}
                      className="w-fit h-5 hidden"
                      value={religion.toLowerCase()}
                      onChange={handleChange}
                    />
                    {religion}
                  </label>
                ))}
              </div>
            )}
          </div>
        </label>

        {/* Community */}
        <label
          className="relative flex flex-col gap-3 mb-11"
          htmlFor="Community"
        >
          <h3 className="text-xl font-lato font-semibold">Community:</h3>
          {errors.community && <p className="error">{errors.community}</p>}
          <input
            className="outline-none border-2 border-zinc-200 rounded-xl w-full py-3 px-4 text-lg font-lato font-semibold text-zinc-800 leading-tight transition-all focus:border-blue-500"
            id="Community"
            type="text"
            name="community"
            value={formData.community}
            onChange={handleChange}
          />
        </label>

        <div className="flex flex-col justify-between items-center w-full h-auto">
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

export default Step_1;
