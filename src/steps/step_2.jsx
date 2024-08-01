import React, { useContext } from "react";
import { MyContext } from "../auth/register";
import { Districts } from "../data/formData";

const Step_2 = () => {
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
        Contact Information
        <i className="ri-arrow-right-s-line text-end font-medium"></i>
      </h2>
      <div className="relative flex flex-col mt-5 w-full h-auto">
        {/* Email ID */}
        <label className="flex flex-col gap-3 mb-4" htmlFor="Email">
          <h3 className="text-xl font-lato font-semibold">Email ID:</h3>
          {errors.email && <p className="error">{errors.email}</p>}
          <input
            className="outline-none border-2 border-zinc-200 rounded-xl w-full py-3 px-4 text-lg font-lato font-semibold text-zinc-800 leading-tight transition-all focus:border-blue-500"
            id="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>

        {/* Phone No */}
        <label
          className="relative flex flex-col gap-3 mb-4"
          htmlFor="Phone Number"
        >
          <h3 className="text-xl font-lato font-semibold">Phone No:</h3>
          {errors.phoneNumber && <p className="error">{errors.phoneNumber}</p>}
          <input
            className="outline-none border-2 border-zinc-200 rounded-xl w-full py-3 px-4 text-lg font-lato font-semibold text-zinc-800 leading-tight transition-all focus:border-blue-500"
            id="Phone Number"
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </label>

        {/* Date of Birth */}
        <label
          className="relative flex flex-col gap-3 mb-4"
          htmlFor="Date Of Birth"
        >
          <h3 className="text-xl font-lato font-semibold">Date of Birth:</h3>
          {errors.DOB && <p className="error">{errors.DOB}</p>}
          <input
            className="outline-none border-2 border-zinc-200 rounded-xl w-full py-3 px-4 text-lg font-lato font-semibold text-zinc-800 leading-tight transition-all focus:border-blue-500"
            id="Date Of Birth"
            type="date"
            name="DOB"
            value={formData.DOB}
            onChange={handleChange}
          />
        </label>

        {/*  Living In */}
        <label
          className="relative flex flex-col gap-3 mb-4"
          htmlFor="Living In"
        >
          <h3 className="text-xl font-lato font-semibold">Living In:</h3>
          {errors.livingIn && <p className="error">{errors.livingIn}</p>}
          <div className="relative">
            <input
              className="outline-none border-2 border-zinc-200 rounded-xl w-full py-3 px-4 text-lg font-lato font-semibold text-zinc-800 leading-tight cursor-pointer transition-all focus:border-blue-500"
              type="text"
              name="livingIn"
              id="Living In"
              value={formData.livingIn}
              readOnly
              onClick={() => {
                setIsDropdownOpen(!isDropdownOpen);
                setToggleDropdown("livingIn");
              }}
            />
            {!isDropdownOpen && toggleDropdown === "livingIn" && (
              <div
                className="absolute flex flex-col gap-2 w-full h-fit max-h-[350px] mt-1 bg-white border-2 border-zinc-200 overflow-x-hidden overflow-y-auto rounded-xl z-10"
                id="dropDownBox"
              >
                {Districts.map((livingIn, index) => (
                  <label
                    key={index}
                    className={`${
                      formData.livingIn === livingIn.toLowerCase() &&
                      "bg-blue-500 text-slate-50"
                    } py-2 px-4 text-lg font-lato font-semibold cursor-pointer transition-all hover:text-zinc-700 hover:bg-gray-100 `}
                    htmlFor={livingIn.toLowerCase()}
                  >
                    <input
                      type="radio"
                      name="livingIn"
                      id={livingIn.toLowerCase()}
                      className="w-fit h-5 hidden"
                      value={livingIn.toLowerCase()}
                      onChange={handleChange}
                    />
                    {livingIn}
                  </label>
                ))}
              </div>
            )}
          </div>
        </label>

        {/* Address */}
        <label className="relative flex flex-col gap-3 mb-4" htmlFor="Address">
          <h3 className="text-xl font-lato font-semibold">
            Address: <span className="optional">(optional)</span>
          </h3>
          <input
            className="outline-none border-2 border-zinc-200 rounded-xl w-full py-3 px-4 text-lg font-lato font-semibold text-zinc-800 leading-tight transition-all focus:border-blue-500"
            id="Address"
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </label>

        {/* Zip */}
        <label className="relative flex flex-col gap-3 mb-4" htmlFor="Zip">
          <h3 className="text-xl font-lato font-semibold">
            Zip Code: <span className="optional">(optional)</span>
          </h3>
          <input
            className="outline-none border-2 border-zinc-200 rounded-xl w-full py-3 px-4 text-lg font-lato font-semibold text-zinc-800 leading-tight transition-all focus:border-blue-500"
            id="Zip"
            type="text"
            name="zipCode"
            value={formData.zipCode}
            onChange={handleChange}
          />
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

export default Step_2;
