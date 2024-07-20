import React, { useState } from "react";
import registerBg from "../assets/registration-1.webp";
import validation from "./validation";
import {
  profileFor,
  genders,
  religions,
  districts,
  maritalStatus,
  diets,
  heights,
  hobbies,
  mostLikes,
  pets,
  qualificationsType,
  qualifications,
} from "../data/formData";

const Register = () => {
  const [step, setStep] = useState(4);
  const [formData, setFormData] = useState({
    profileFor: "",
    fName: "",
    lName: "",
    gender: "",
    religion: "",
    community: "",
    email: "",
    phoneNumber: "",
    DOB: "",
    livingIn: "",
    address: "",
    zipCode: "",
    marital: "",
    diet: "",
    height: "",
    hobbies: "",
    mostLikes: "",
    pet: "",
  });
  const [animation, setAnimation] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [toggleDropdown, setToggleDropdown] = useState("");
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: undefined, // or null, or ''
    }));
    setIsDropdownOpen(null);
    setToggleDropdown("");
  };

  const handleNext = () => {
    const currentError = validation(step, formData);
    if (Object.keys(currentError).length > 0) {
      setErrors(currentError);
    } else {
      setAnimation("animate-slide-left");
      setStep(step + 1);
    }
  };

  const handlePrev = () => {
    setAnimation("animate-slide-right");
    step === 0 ? setStep(0) : setStep(step - 1);
  };

  const handleSubmission = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="relative w-full h-auto p-5">
        <div className="p-10 w-full h-auto rounded-xl flex">
          <div className="relative z-10 w-[60%] min-h-[95vh]  flex flex-col justify-start text-slate-50 p-10">
            <figure className="absolute top-0 left-0 z-[-1] w-full h-full overflow-hidden rounded-l-md">
              <img
                src={registerBg}
                alt="registerBg"
                className="w-full h-full object-cover pointer-events-none"
              />
            </figure>
            <span className="absolute top-0 left-0 z-[-1] w-full h-[40vh] backdrop-blur-[3px] rounded-md"></span>
            <span className="pointer-events-none text-base text-slate-50 text-shadow-5xl text-right font-lato font-semibold">
              Complete all necessary fields.&nbsp;&nbsp;
              <i className="ri-information-fill font-normal"></i>
            </span>
            <h2 className="ml-5 text-4xl font-playfair font-extrabold text-shadow-3xl">
              Join Parinay
            </h2>
            <h3 className="ml-5 text-xl font-lato font-semibold mb-4 mt-2 text-shadow-2xl">
              Create your account
            </h3>
            <p className="ml-5 text-lg font-opensans font-medium">
              Fill in the details below to start your journey towards finding
              your perfect match. Join our community and explore the
              possibilities.
            </p>
          </div>
          <form
            className="w-full h-auto bg-slate-50 rounded-r-md overflow-x-clip"
            method="POST"
            onSubmit={handleSubmission}
          >
            <div className="relative w-full h-fit transition-all p-7 flex text-zinc-700">
              {step === 1 && (
                <fieldset className={`${animation} w-full min-w-full h-auto`}>
                  <h2 className="flex justify-between items-end text-3xl font-playfair font-extrabold border-b-2 border-gray-600 pb-2">
                    Profile Information
                    <i className="ri-arrow-right-s-line text-end font-medium"></i>
                  </h2>
                  <div className=" flex flex-col mt-5 w-full h-auto">
                    {/* Profile For */}
                    <div className="relative flex flex-row flex-wrap gap-3 gap-x-2 mb-5">
                      <h3 className="text-xl font-lato font-semibold">
                        Profile For:
                      </h3>
                      {profileFor.map((profile, index) => (
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
                            checked={
                              profile.toLowerCase() === formData.profileFor
                            }
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
                      {errors.profileFor && (
                        <p className="error">{errors.profileFor}</p>
                      )}
                    </div>

                    {/* First Name */}
                    <label
                      className="relative flex flex-col gap-3 mb-5"
                      htmlFor="First_name"
                    >
                      <h3 className="text-xl font-lato font-semibold">
                        First Name:
                      </h3>
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
                      <h3 className="text-xl font-lato font-semibold">
                        Last Name:
                      </h3>
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
                      <h3 className="text-xl font-lato font-semibold">
                        Gender:
                      </h3>
                      {genders.map((gender, index) => (
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
                      {errors.gender && (
                        <p className="error">{errors.gender}</p>
                      )}
                    </div>

                    {/* Religion */}
                    <label
                      className="relative flex flex-col gap-3 mb-5"
                      htmlFor="Religion"
                    >
                      <h3 className="text-xl font-lato font-semibold">
                        Religion:
                      </h3>
                      {errors.religion && (
                        <p className="error">{errors.religion}</p>
                      )}
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
                            {religions.map((religion, index) => (
                              <label
                                key={index}
                                className="py-2 px-4 text-lg font-lato font-semibold cursor-pointer hover:bg-gray-100"
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
                      className="relative flex flex-col gap-3 mb-12"
                      htmlFor="Community"
                    >
                      <h3 className="text-xl font-lato font-semibold">
                        Community:
                      </h3>
                      {errors.community && (
                        <p className="error">{errors.community}</p>
                      )}
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
                        Next{" "}
                        <i className="ri-arrow-right-s-line text-end font-medium"></i>
                      </button>
                    </div>
                  </div>
                </fieldset>
              )}

              {step === 2 && (
                <fieldset className={`${animation} w-full min-w-full h-auto`}>
                  <h2 className="flex justify-between items-end text-3xl font-playfair font-extrabold border-b-2 border-gray-600 pb-2">
                    <i className="ri-arrow-left-s-line text-end font-medium"></i>
                    Contact Information
                    <i className="ri-arrow-right-s-line text-end font-medium"></i>
                  </h2>
                  <div className="relative flex flex-col mt-5 w-full h-auto">
                    {/* Email ID */}
                    <label className="flex flex-col gap-3 mb-4" htmlFor="Email">
                      <h3 className="text-xl font-lato font-semibold">
                        Email ID:
                      </h3>
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
                      <h3 className="text-xl font-lato font-semibold">
                        Phone No:
                      </h3>
                      {errors.phoneNumber && (
                        <p className="error">{errors.phoneNumber}</p>
                      )}
                      <input
                        className="outline-none border-2 border-zinc-200 rounded-xl w-full py-3 px-4 text-lg font-lato font-semibold text-zinc-800 leading-tight transition-all focus:border-blue-500"
                        id="Phone Number"
                        type="number"
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
                      <h3 className="text-xl font-lato font-semibold">
                        Date of Birth:
                      </h3>
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
                      <h3 className="text-xl font-lato font-semibold">
                        Living In:
                      </h3>
                      {errors.livingIn && (
                        <p className="error">{errors.livingIn}</p>
                      )}
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
                            {districts.map((livingIn, index) => (
                              <label
                                key={index}
                                className="py-2 px-4 text-lg font-lato font-semibold cursor-pointer hover:bg-gray-100"
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
                    <label
                      className="relative flex flex-col gap-3 mb-4"
                      htmlFor="Address"
                    >
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
                    <label
                      className="relative flex flex-col gap-3 mb-4"
                      htmlFor="Zip"
                    >
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
                        <i className="ri-arrow-left-s-line text-end font-medium"></i>{" "}
                        Back
                      </button>
                      <button
                        className="self-end w-fit h-auto px-5 py-2 bg-gray-500 rounded-lg flex justify-between items-center text-xl text-slate-100 font-opensans font-medium transition-all hover:bg-gray-600"
                        type="button"
                        onClick={handleNext}
                      >
                        Next{" "}
                        <i className="ri-arrow-right-s-line text-end font-medium"></i>
                      </button>
                    </div>
                  </div>
                </fieldset>
              )}

              {step === 3 && (
                <fieldset className={`${animation} w-full min-w-full h-auto`}>
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
                      <h3 className="text-xl font-lato font-semibold">
                        Marital Status:
                      </h3>
                      {errors.marital && (
                        <p className="error">{errors.marital}</p>
                      )}
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
                        {!isDropdownOpen &&
                          toggleDropdown === "maritalStatus" && (
                            <div
                              className="absolute flex flex-col gap-2 w-full h-fit max-h-[350px] mt-1 bg-white border-2 border-zinc-200 overflow-x-hidden overflow-y-auto rounded-xl z-10"
                              id="dropDownBox"
                            >
                              {maritalStatus.map((status, index) => (
                                <label
                                  key={index}
                                  className="py-2 px-4 text-lg font-lato font-semibold cursor-pointer hover:bg-gray-100"
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
                    <label
                      className="relative flex flex-col gap-3 mb-4"
                      htmlFor="Diet"
                    >
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
                            {diets.map((diet, index) => (
                              <label
                                key={index}
                                className="py-2 px-4 text-lg font-lato font-semibold cursor-pointer hover:bg-gray-100"
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
                    <label
                      className="relative flex flex-col gap-3 mb-4"
                      htmlFor="Height"
                    >
                      <h3 className="text-xl font-lato font-semibold">
                        Height:
                      </h3>
                      {errors.height && (
                        <p className="error">{errors.height}</p>
                      )}
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
                            {heights.map((height, index) => (
                              <label
                                key={index}
                                className="py-2 px-4 text-lg font-lato font-semibold cursor-pointer hover:bg-gray-100"
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
                    <label
                      className="relative flex flex-col gap-3 mb-4"
                      htmlFor="Hobbies"
                    >
                      <h3 className="text-xl font-lato font-semibold">
                        Hobby:
                      </h3>
                      {errors.hobbies && (
                        <p className="error">{errors.hobbies}</p>
                      )}
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
                            {hobbies.map((hobby, index) => (
                              <label
                                key={index}
                                className="py-2 px-4 text-lg font-lato font-semibold cursor-pointer hover:bg-gray-100"
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
                      <h3 className="text-xl font-lato font-semibold">
                        Most Like:
                      </h3>
                      {errors.mostLikes && (
                        <p className="error">{errors.mostLikes}</p>
                      )}
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
                            {mostLikes.map((fav, index) => (
                              <label
                                key={index}
                                className="py-2 px-4 text-lg font-lato font-semibold cursor-pointer hover:bg-gray-100"
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
                    <label
                      className="relative flex flex-col gap-3 mb-4"
                      htmlFor="Pet"
                    >
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
                            {pets.map((pet, index) => (
                              <label
                                key={index}
                                className="py-2 px-4 text-lg font-lato font-semibold cursor-pointer hover:bg-gray-100"
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
                        <i className="ri-arrow-left-s-line text-end font-medium"></i>{" "}
                        Back
                      </button>
                      <button
                        className="self-end w-fit h-auto px-5 py-2 bg-gray-500 rounded-lg flex justify-between items-center text-xl text-slate-100 font-opensans font-medium transition-all hover:bg-gray-600"
                        type="button"
                        onClick={handleNext}
                      >
                        Next{" "}
                        <i className="ri-arrow-right-s-line text-end font-medium"></i>
                      </button>
                    </div>
                  </div>
                </fieldset>
              )}

              {step === 4 && (
                <fieldset className={`${animation} w-full min-w-full h-auto`}>
                  <h2 className="flex justify-between items-end text-3xl font-playfair font-extrabold border-b-2 border-gray-600 pb-2">
                    <i className="ri-arrow-left-s-line text-end font-medium"></i>
                    Professional Information
                    <i className="ri-arrow-right-s-line text-end font-medium"></i>
                  </h2>
                  <div className="relative flex flex-col mt-5 w-full h-auto">
                    {/*  Highest Qualifications */}
                    <label
                      className="relative flex flex-col gap-3 mb-4"
                      htmlFor="Highest Qualifications"
                    >
                      <h3 className="text-xl font-lato font-semibold">
                        Highest Qualifications:
                      </h3>
                      {errors.highestQualification && (
                        <p className="error">{errors.highestQualification}</p>
                      )}
                      <div className="relative">
                        <input
                          className="outline-none border-2 border-zinc-200 rounded-xl w-full py-3 px-4 text-lg font-lato font-semibold text-zinc-800 leading-tight cursor-pointer transition-all focus:border-blue-500"
                          type="text"
                          name="highestQualification"
                          id="Highest Qualifications"
                          value={formData.highestQualification}
                          readOnly
                          onClick={() => {
                            setIsDropdownOpen(!isDropdownOpen);
                            setToggleDropdown("highestQualification");
                          }}
                        />
                        {!isDropdownOpen &&
                          toggleDropdown === "highestQualification" && (
                            <div
                              className="absolute flex flex-col gap-2 w-full h-fit max-h-[350px] mt-1 bg-white border-2 border-zinc-200 overflow-x-hidden overflow-y-auto rounded-xl z-10"
                              id="dropDownBox"
                            >
                              {qualifications.map((HQ, index) => (
                                <label
                                  key={index}
                                  className="py-2 px-4 text-lg font-lato font-semibold cursor-pointer hover:bg-gray-100"
                                  htmlFor={HQ.toLowerCase()}
                                >
                                  <input
                                    type="radio"
                                    name="highestQualification"
                                    id={HQ.toLowerCase()}
                                    className="w-fit h-5 hidden"
                                    value={HQ.toLowerCase()}
                                    onChange={handleChange}
                                  />
                                  {HQ}
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
                        <i className="ri-arrow-left-s-line text-end font-medium"></i>{" "}
                        Back
                      </button>
                      <button
                        className="self-end w-fit h-auto px-5 py-2 bg-gray-500 rounded-lg flex justify-between items-center text-xl text-slate-100 font-opensans font-medium transition-all hover:bg-gray-600"
                        type="button"
                        onClick={handleNext}
                      >
                        Next{" "}
                        <i className="ri-arrow-right-s-line text-end font-medium"></i>
                      </button>
                    </div>
                  </div>
                </fieldset>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
