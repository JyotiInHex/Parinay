import React, { useContext } from "react";
import { MyContext } from "../auth/register";

const Step_5 = () => {
  const { formData, profilePic, handleChange, handlePrev, handleNext, errors } =
    useContext(MyContext);
  return (
    <>
      <h2 className="flex justify-between items-end text-3xl font-playfair font-extrabold border-b-2 border-gray-600 pb-2">
        <i className="ri-arrow-left-s-line text-end font-medium"></i>
        About Self
        <i className="ri-arrow-right-s-line text-end font-medium"></i>
      </h2>
      <div className="relative flex flex-col mt-5 w-full h-auto">
        {/* Profile Photo */}
        <label
          className="relative flex flex-col gap-0 mb-4"
          htmlFor="Profile Photo"
        >
          <h3 className="text-xl font-lato font-semibold mb-3">
            Profile Photo:
            <span className="optional"></span>
          </h3>
          {errors.profileImg && <p className="error">{errors.profileImg}</p>}
          <figure className="relative z-10 place-self-center w-[172.5px] h-[172.5px] rounded-full border-2 border-zinc-500 border-dashed bg-gray-50 overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={profilePic}
              alt={profilePic}
            />
            <i className="ri-user-3-line absolute z-[-1] -bottom-2 left-[50%] translate-x-[-50%] text-9xl text-zinc-400 font-thin pointer-events-none"></i>
          </figure>
          <input
            type="file"
            name="profileImg"
            id="Profile Photo"
            onChange={handleChange}
            hidden
            accept=".jpeg,.jpg,.png"
          />
        </label>

        {/* About self */}
        <label
          className="relative flex flex-col gap-0 mb-4"
          htmlFor="About self"
        >
          <h3 className="text-xl font-lato font-semibold mb-3">
            About self: <span className="optional">(Recommend)</span>
          </h3>
          {errors.aboutSelf && <p className="error">{errors.aboutSelf}</p>}
          <textarea
            className="outline-none border-2 border-zinc-200 rounded-xl w-full py-3 px-4 text-lg text-justify font-lato font-semibold text-zinc-800 leading-tight resize-none transition-all focus:border-blue-500"
            id="About self"
            cols="40"
            rows="13"
            name="aboutSelf"
            value={formData.aboutSelf}
            onChange={handleChange}
            maxLength="1800"
          ></textarea>
          <span className="w-full h-auto text-right text-sm font-lato font-semibold">
            <p className="text-base font-opensans font-medium">
              <b>{formData.aboutSelf.length}</b>/1800
            </p>
            {formData.aboutSelf.length === 1800 && (
              <p className="text-red-500">Maximum 1800 characters</p>
            )}
          </span>
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

export default Step_5;
