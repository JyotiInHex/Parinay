import React, { useEffect, useState } from "react";
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
  qualifications,
  workWith,
  jobRole,
  incomeList,
  familyType,
  familyValue,
  familySocialStatus,
  parentStatus,
  siblings,
} from "../data/formData";

const Register = () => {
  useEffect(() => {
    document.title = "Register";
  });

  const [step, setStep] = useState(7);
  const [formData, setFormData] = useState({
    profileFor: "",
    fName: "",
    lName: "",
    gender: "",
    religion: "",
    community: "",
    email: "Paragjyoti43d@gmail.com",
    phoneNumber: "6002461148",
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
    qualifications: "",
    collegeName: "",
    workWith: "",
    jobRole: "",
    additionalJobRole: "",
    annualIncome: "",
    profileImg: "",
    aboutSelf: "",
    familyType: "",
    familyValue: "",
    familySocialStatus: "",
    livingInWithFamily: "",
    fatherStatus: "",
    motherStatus: "",
    siblingsType: "",
    siblingsNum: "",
  });
  const [profilePic, setProfilePic] = useState(null);
  const [animation, setAnimation] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: undefined,
    }));

    if (name === "profileImg") {
      if (files && files.length > 0) {
        const fileURL = URL.createObjectURL(files[0]);
        setProfilePic(fileURL);
      } else {
        setProfilePic(null);
      }
    }

    setIsDropdownOpen(false);
    setToggleDropdown(false);
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
            className="registrationForm w-full h-auto bg-slate-50 rounded-r-md overflow-x-clip"
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
                                className={`${
                                  formData.religion ===
                                    religion.toLowerCase() &&
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
                        Next
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
                                className={`${
                                  formData.livingIn ===
                                    livingIn.toLowerCase() &&
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
                      {errors.qualifications && (
                        <p className="error">{errors.qualifications}</p>
                      )}
                      <div className="relative">
                        <input
                          className="outline-none border-2 border-zinc-200 rounded-xl w-full py-3 px-4 text-lg font-lato font-semibold text-zinc-800 leading-tight cursor-pointer transition-all focus:border-blue-500"
                          type="text"
                          name="qualifications"
                          id="Highest Qualifications"
                          value={formData.qualifications}
                          readOnly
                          onClick={() => {
                            setIsDropdownOpen(!isDropdownOpen);
                            setToggleDropdown("qualifications");
                          }}
                        />
                        {!isDropdownOpen &&
                          toggleDropdown === "qualifications" && (
                            <div
                              className="absolute w-full h-fit max-h-[350px] mt-1 bg-white border-2 border-zinc-200 overflow-x-hidden overflow-y-auto rounded-xl z-10"
                              id="dropDownBox"
                            >
                              {Object.keys(qualifications).map((category) => (
                                <div
                                  className="flex flex-col gap-2"
                                  key={category}
                                >
                                  <div className="px-4 py-2 text-xl text-center font-opensans font-semibold bg-zinc-100">
                                    -{category}-
                                  </div>
                                  {qualifications[category].map((HQ, index) => (
                                    <label
                                      key={index}
                                      className={`${
                                        formData.qualifications ===
                                          HQ.toLowerCase() &&
                                        "bg-blue-500 text-slate-50"
                                      } py-2 px-10 text-lg font-lato font-semibold cursor-pointer transition-all hover:text-zinc-700 hover:bg-gray-100 `}
                                      htmlFor={HQ.toLowerCase()}
                                    >
                                      <input
                                        type="radio"
                                        name="qualifications"
                                        id={HQ.toLowerCase()}
                                        className="w-fit h-5 hidden"
                                        value={HQ.toLowerCase()}
                                        onChange={handleChange}
                                      />
                                      {HQ}
                                    </label>
                                  ))}
                                </div>
                              ))}
                            </div>
                          )}
                      </div>
                    </label>

                    {/* College/University Attended */}
                    <label
                      className="relative flex flex-col gap-3 mb-4"
                      htmlFor="College You Attended"
                    >
                      <h3 className="text-xl font-lato font-semibold">
                        College/University Attended:
                        {formData.qualifications === "preferred not to say" && (
                          <span className="optional">(optional)</span>
                        )}
                      </h3>
                      {formData.qualifications !== "preferred not to say" &&
                        errors.collegeName && (
                          <p className="error">{errors.collegeName}</p>
                        )}
                      <input
                        className="outline-none border-2 border-zinc-200 rounded-xl w-full py-3 px-4 text-lg font-lato font-semibold text-zinc-800 leading-tight transition-all focus:border-blue-500"
                        id="College You Attended"
                        type="text"
                        name="collegeName"
                        value={`${
                          formData.qualifications === "preferred not to say"
                            ? "No filing required."
                            : formData.collegeName
                        }`}
                        onChange={handleChange}
                        disabled={
                          formData.qualifications === "preferred not to say"
                        }
                      />
                    </label>

                    {/*  Current Employer */}
                    <label
                      className="relative flex flex-col gap-3 mb-4"
                      htmlFor="Current Employer"
                    >
                      <h3 className="text-xl font-lato font-semibold">
                        Current Employer:
                      </h3>
                      {errors.workWith && (
                        <p className="error">{errors.workWith}</p>
                      )}
                      <div className="relative">
                        <input
                          className="outline-none border-2 border-zinc-200 rounded-xl w-full py-3 px-4 text-lg font-lato font-semibold text-zinc-800 leading-tight cursor-pointer transition-all focus:border-blue-500"
                          type="text"
                          name="workWith"
                          id="Current Employer"
                          value={formData.workWith}
                          readOnly
                          onClick={() => {
                            setIsDropdownOpen(!isDropdownOpen);
                            setToggleDropdown("workWith");
                          }}
                        />
                        {!isDropdownOpen && toggleDropdown === "workWith" && (
                          <div
                            className="absolute flex flex-col gap-2 w-full h-fit max-h-[350px] mt-1 bg-white border-2 border-zinc-200 overflow-x-hidden overflow-y-auto rounded-xl z-10"
                            id="dropDownBox"
                          >
                            {workWith.map((type, index) => (
                              <label
                                key={index}
                                className={`${
                                  formData.workWith === type.toLowerCase() &&
                                  "bg-blue-500 text-slate-50"
                                } py-2 px-4 text-lg font-lato font-semibold cursor-pointer transition-all hover:text-zinc-700 hover:bg-gray-100 `}
                                htmlFor={type.toLowerCase()}
                              >
                                <input
                                  type="radio"
                                  name="workWith"
                                  id={type.toLowerCase()}
                                  className="w-fit h-5 hidden"
                                  value={type.toLowerCase()}
                                  onChange={handleChange}
                                />
                                {type}
                              </label>
                            ))}
                          </div>
                        )}
                      </div>
                    </label>

                    {/*  Job Role */}
                    <label
                      className="relative flex flex-col gap-3 mb-4"
                      htmlFor="Job Role"
                    >
                      <h3 className="text-xl font-lato font-semibold">
                        Job Role:
                      </h3>
                      {errors.jobRole && (
                        <p className="error">{errors.jobRole}</p>
                      )}
                      <div className="relative">
                        <input
                          className="outline-none border-2 border-zinc-200 rounded-xl w-full py-3 px-4 text-lg font-lato font-semibold text-zinc-800 leading-tight cursor-pointer transition-all focus:border-blue-500"
                          type="text"
                          name="jobRole"
                          id="Job Role"
                          value={formData.jobRole}
                          readOnly
                          disabled={formData.workWith === ""}
                          onClick={() => {
                            setIsDropdownOpen(!isDropdownOpen);
                            setToggleDropdown("jobRole");
                          }}
                        />
                        {!isDropdownOpen && toggleDropdown === "jobRole" && (
                          <div
                            className="absolute w-full h-fit max-h-[350px] mt-1 bg-white border-2 border-zinc-200 overflow-x-hidden overflow-y-auto rounded-xl z-10"
                            id="dropDownBox"
                          >
                            {Object.keys(jobRole).map((category) => (
                              <div
                                className="flex flex-col gap-2"
                                key={category}
                              >
                                {formData.workWith ===
                                  category.toLowerCase() && (
                                  <div className="px-4 py-2 text-xl text-center font-opensans font-semibold bg-zinc-100">
                                    {category}
                                  </div>
                                )}
                                {formData.workWith === category.toLowerCase() &&
                                  jobRole[category].map((role, index) => (
                                    <label
                                      key={index}
                                      className={`${
                                        formData.jobRole ===
                                          role.toLowerCase() &&
                                        "bg-blue-500 text-slate-50"
                                      } py-2 px-10 text-lg font-lato font-semibold cursor-pointer transition-all hover:text-zinc-700 hover:bg-gray-100 `}
                                      htmlFor={role.toLowerCase()}
                                    >
                                      <input
                                        type="radio"
                                        name="jobRole"
                                        id={role.toLowerCase()}
                                        className="w-fit h-5 hidden"
                                        value={role.toLowerCase()}
                                        onChange={handleChange}
                                      />
                                      {role}
                                    </label>
                                  ))}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </label>

                    {/* Specify Your Role */}
                    <label
                      className="relative flex flex-col gap-3 mb-4"
                      htmlFor="Specify Your Role"
                    >
                      <h3 className="text-xl font-lato font-semibold">
                        Specify Your Role:
                        {formData.jobRole !== "" &&
                          formData.jobRole !== "other" && (
                            <span className="optional">(optional)</span>
                          )}
                      </h3>
                      {formData.additionalJobRole === "" &&
                        errors.additionalJobRole && (
                          <p className="error">{errors.additionalJobRole}</p>
                        )}
                      <input
                        className="outline-none border-2 border-zinc-200 rounded-xl w-full py-3 px-4 text-lg font-lato font-semibold text-zinc-800 leading-tight transition-all focus:border-blue-500"
                        id="Specify Your Role"
                        type="text"
                        name="additionalJobRole"
                        value={`${
                          formData.jobRole !== "" &&
                          formData.jobRole !== "other"
                            ? "No filing required."
                            : formData.additionalJobRole
                        }`}
                        onChange={handleChange}
                        disabled={
                          formData.jobRole !== "" &&
                          formData.jobRole !== "other"
                        }
                      />
                    </label>

                    {/*  Annual Income */}
                    <label
                      className="relative flex flex-col gap-3 mb-4"
                      htmlFor="Annual Income"
                    >
                      <h3 className="text-xl font-lato font-semibold group">
                        Annual Income:
                        <i className="ri-question-fill ml-1 text-base font-normal cursor-help"></i>
                        <div className="py-1 px-3 absolute left-40 top-0 w-fit h-fit rounded-md bg-[#41414185] backdrop-blur-sm text-base text-slate-50 font-lato font-medium drop-shadow-md opacity-0 invisible transition-all group-hover:opacity-100 group-hover:visible">
                          <b>Why required?</b>&nbsp; To understand financial
                          stability and planning.
                        </div>
                      </h3>
                      {errors.annualIncome && (
                        <p className="error">{errors.annualIncome}</p>
                      )}
                      <div className="relative">
                        <input
                          className="outline-none border-2 border-zinc-200 rounded-xl w-full py-3 px-4 text-lg font-lato font-semibold text-zinc-800 leading-tight cursor-pointer transition-all focus:border-blue-500"
                          type="text"
                          name="annualIncome"
                          id="Annual Income"
                          value={formData.annualIncome}
                          readOnly
                          onClick={() => {
                            setIsDropdownOpen(!isDropdownOpen);
                            setToggleDropdown("annualIncome");
                          }}
                        />
                        {!isDropdownOpen &&
                          toggleDropdown === "annualIncome" && (
                            <div
                              className="absolute flex flex-col gap-2 w-full h-fit max-h-[350px] mt-1 bg-white border-2 border-zinc-200 overflow-x-hidden overflow-y-auto rounded-xl z-10"
                              id="dropDownBox"
                            >
                              {incomeList.map((income, index) => (
                                <label
                                  key={index}
                                  className={`${
                                    formData.annualIncome ===
                                      income.toLowerCase() &&
                                    "bg-blue-500 text-slate-50"
                                  } py-2 px-4 text-lg font-lato font-semibold cursor-pointer transition-all hover:text-zinc-700 hover:bg-gray-100 `}
                                  htmlFor={income.toLowerCase()}
                                >
                                  <input
                                    type="radio"
                                    name="annualIncome"
                                    id={income.toLowerCase()}
                                    className="w-fit h-5 hidden"
                                    value={income.toLowerCase()}
                                    onChange={handleChange}
                                  />
                                  {income}
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
                </fieldset>
              )}

              {step === 5 && (
                <fieldset className={`${animation} w-full min-w-full h-auto`}>
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
                      {errors.profileImg && (
                        <p className="error">{errors.profileImg}</p>
                      )}
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
                        About self:{" "}
                        <span className="optional">(Recommend)</span>
                      </h3>
                      {errors.aboutSelf && (
                        <p className="error">{errors.aboutSelf}</p>
                      )}
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
                          <p className="text-red-500">
                            Maximum 1800 characters
                          </p>
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
                </fieldset>
              )}

              {step === 6 && (
                <fieldset className={`${animation} w-full min-w-full h-auto`}>
                  <h2 className="flex justify-between items-end text-3xl font-playfair font-extrabold border-b-2 border-gray-600 pb-2">
                    <i className="ri-arrow-left-s-line text-end font-medium"></i>
                    Family Details
                    <i className="ri-arrow-right-s-line text-end font-medium"></i>
                  </h2>
                  <div className="relative flex flex-col mt-5 w-full h-auto">
                    <div className="flex gap-4">
                      {/* Family type */}
                      <label
                        className="relative w-full flex flex-col gap-3 mb-4"
                        htmlFor="Family type"
                      >
                        <h3 className="text-xl font-lato font-semibold">
                          Family Type:
                        </h3>
                        {errors.familyType && (
                          <p className="error">{errors.familyType}</p>
                        )}
                        <div className="relative">
                          <input
                            className="outline-none border-2 border-zinc-200 rounded-xl w-full py-3 px-4 text-lg font-lato font-semibold text-zinc-800 leading-tight cursor-pointer transition-all focus:border-blue-500"
                            type="text"
                            name="familyType"
                            id="Family type"
                            value={formData.familyType}
                            readOnly
                            onClick={() => {
                              setIsDropdownOpen(!isDropdownOpen);
                              setToggleDropdown("familyType");
                            }}
                          />
                          {!isDropdownOpen &&
                            toggleDropdown === "familyType" && (
                              <div
                                className="absolute w-full h-fit max-h-[350px] flex flex-col gap-2 mt-1 bg-white border-2 border-zinc-200 overflow-x-hidden overflow-y-auto rounded-xl z-10"
                                id="dropDownBox"
                              >
                                {familyType.map((type, index) => (
                                  <label
                                    key={index}
                                    className={`${
                                      formData.familyType === type &&
                                      "bg-blue-500 text-slate-50"
                                    } py-2 px-4 text-lg font-lato font-semibold cursor-pointer transition-all hover:text-zinc-700 hover:bg-gray-100 `}
                                    htmlFor={type}
                                  >
                                    <input
                                      type="radio"
                                      name="familyType"
                                      id={type}
                                      className="w-fit h-5 hidden"
                                      value={type}
                                      onChange={handleChange}
                                    />
                                    {type}
                                  </label>
                                ))}
                              </div>
                            )}
                        </div>
                      </label>

                      {/* Social status */}
                      <label
                        className="relative w-full flex flex-col gap-3 mb-4"
                        htmlFor="Social status"
                      >
                        <h3 className="text-xl font-lato font-semibold">
                          Social Status:
                        </h3>
                        {errors.familySocialStatus && (
                          <p className="error">{errors.familySocialStatus}</p>
                        )}
                        <div className="relative">
                          <input
                            className="outline-none border-2 border-zinc-200 rounded-xl w-full py-3 px-4 text-lg font-lato font-semibold text-zinc-800 leading-tight cursor-pointer transition-all focus:border-blue-500"
                            type="text"
                            name="familySocialStatus"
                            id="Social status"
                            value={formData.familySocialStatus}
                            readOnly
                            onClick={() => {
                              setIsDropdownOpen(!isDropdownOpen);
                              setToggleDropdown("familySocialStatus");
                            }}
                          />
                          {!isDropdownOpen &&
                            toggleDropdown === "familySocialStatus" && (
                              <div
                                className="absolute w-full h-fit max-h-[350px] flex flex-col gap-2 mt-1 bg-white border-2 border-zinc-200 overflow-x-hidden overflow-y-auto rounded-xl z-10"
                                id="dropDownBox"
                              >
                                {familySocialStatus.map((type, index) => (
                                  <label
                                    key={index}
                                    className={`${
                                      formData.familySocialStatus === type &&
                                      "bg-blue-500 text-slate-50"
                                    } py-2 px-4 text-lg font-lato font-semibold cursor-pointer transition-all hover:text-zinc-700 hover:bg-gray-100 `}
                                    htmlFor={type}
                                  >
                                    <input
                                      type="radio"
                                      name="familySocialStatus"
                                      id={type}
                                      className="w-fit h-5 hidden"
                                      value={type}
                                      onChange={handleChange}
                                    />
                                    {type}
                                  </label>
                                ))}
                              </div>
                            )}
                        </div>
                      </label>
                    </div>

                    {/* Living with family */}
                    <label
                      className="relative w-full flex flex-col gap-3 mb-4"
                      htmlFor="Living with family"
                    >
                      <h3 className="text-xl font-lato font-semibold">
                        Living with Family:
                      </h3>
                      {errors.livingInWithFamily && (
                        <p className="error">{errors.livingInWithFamily}</p>
                      )}
                      <div className="relative">
                        <input
                          className="outline-none border-2 border-zinc-200 rounded-xl w-full py-3 px-4 text-lg font-lato font-semibold text-zinc-800 leading-tight cursor-pointer transition-all focus:border-blue-500"
                          type="text"
                          name="livingInWithFamily"
                          id="Living with family"
                          value={formData.livingInWithFamily}
                          readOnly
                          onClick={() => {
                            setIsDropdownOpen(!isDropdownOpen);
                            setToggleDropdown("livingInWithFamily");
                          }}
                        />
                        {!isDropdownOpen &&
                          toggleDropdown === "livingInWithFamily" && (
                            <div
                              className="absolute w-full h-fit max-h-[350px] flex flex-col gap-2 mt-1 bg-white border-2 border-zinc-200 overflow-x-hidden overflow-y-auto rounded-xl z-10"
                              id="dropDownBox"
                            >
                              {["Yes", "No"].map((type, index) => (
                                <label
                                  key={index}
                                  className={`${
                                    formData.livingInWithFamily === type &&
                                    "bg-blue-500 text-slate-50"
                                  } py-2 px-4 text-lg font-lato font-semibold cursor-pointer transition-all hover:text-zinc-700 hover:bg-gray-100 `}
                                  htmlFor={type}
                                >
                                  <input
                                    type="radio"
                                    name="livingInWithFamily"
                                    id={type}
                                    className="w-fit h-5 hidden"
                                    value={type}
                                    onChange={handleChange}
                                  />
                                  {type}
                                </label>
                              ))}
                            </div>
                          )}
                      </div>
                    </label>

                    {/* Family Values */}
                    <label
                      className="relative w-full flex flex-col gap-3 mb-4"
                      htmlFor="Family Values"
                    >
                      <h3 className="text-xl font-lato font-semibold">
                        Family Values:{" "}
                        <span className="optional">(Optional)</span>
                      </h3>

                      <div className="relative">
                        <input
                          className="outline-none border-2 border-zinc-200 rounded-xl w-full py-3 px-4 text-lg font-lato font-semibold text-zinc-800 leading-tight cursor-pointer transition-all focus:border-blue-500"
                          type="text"
                          name="familyValue"
                          id="Family Values"
                          value={formData.familyValue}
                          readOnly
                          onClick={() => {
                            setIsDropdownOpen(!isDropdownOpen);
                            setToggleDropdown("familyValue");
                          }}
                        />
                        {!isDropdownOpen &&
                          toggleDropdown === "familyValue" && (
                            <div
                              className="absolute w-full h-fit max-h-[350px] flex flex-col gap-2 mt-1 bg-white border-2 border-zinc-200 overflow-x-hidden overflow-y-auto rounded-xl z-10"
                              id="dropDownBox"
                            >
                              {familyValue.map((value, index) => (
                                <label
                                  key={index}
                                  className={`${
                                    formData.familyValue === value &&
                                    "bg-blue-500 text-slate-50"
                                  } py-2 px-4 text-lg font-lato font-semibold cursor-pointer transition-all hover:text-zinc-700 hover:bg-gray-100 `}
                                  htmlFor={value}
                                >
                                  <input
                                    type="radio"
                                    name="familyValue"
                                    id={value}
                                    className="w-fit h-5 hidden"
                                    value={value}
                                    onChange={handleChange}
                                  />
                                  {value}
                                </label>
                              ))}
                            </div>
                          )}
                      </div>
                    </label>

                    {/* Father */}
                    <label
                      className="relative w-full flex flex-col gap-3 mb-4"
                      htmlFor="Father Status"
                    >
                      <h3 className="text-xl font-lato font-semibold">
                        Father Status:
                      </h3>
                      {errors.fatherStatus && (
                        <p className="error">{errors.fatherStatus}</p>
                      )}
                      <div className="relative">
                        <input
                          className="outline-none border-2 border-zinc-200 rounded-xl w-full py-3 px-4 text-lg font-lato font-semibold text-zinc-800 leading-tight cursor-pointer transition-all focus:border-blue-500"
                          type="text"
                          name="fatherStatus"
                          id="Father Status"
                          value={formData.fatherStatus}
                          readOnly
                          onClick={() => {
                            setIsDropdownOpen(!isDropdownOpen);
                            setToggleDropdown("fatherStatus");
                          }}
                        />
                        {!isDropdownOpen &&
                          toggleDropdown === "fatherStatus" && (
                            <div
                              className="absolute w-full h-fit max-h-[350px] flex flex-col gap-2 mt-1 bg-white border-2 border-zinc-200 overflow-x-hidden overflow-y-auto rounded-xl z-10"
                              id="dropDownBox"
                            >
                              {Object.keys(parentStatus).map(
                                (category) =>
                                  category === "Father" &&
                                  parentStatus[category].map(
                                    (status, index) => (
                                      <label
                                        key={index}
                                        className={`${
                                          formData.fatherStatus === status &&
                                          "bg-blue-500 text-slate-50"
                                        } py-2 px-4 text-lg font-lato font-semibold cursor-pointer transition-all hover:text-zinc-700 hover:bg-gray-100 `}
                                        htmlFor={status}
                                      >
                                        <input
                                          type="radio"
                                          name="fatherStatus"
                                          id={status}
                                          className="w-fit h-5 hidden"
                                          value={status}
                                          onChange={handleChange}
                                        />
                                        {status}
                                      </label>
                                    )
                                  )
                              )}
                            </div>
                          )}
                      </div>
                    </label>

                    {/* Mother */}
                    <label
                      className="relative w-full flex flex-col gap-3 mb-4"
                      htmlFor="Mother Status"
                    >
                      <h3 className="text-xl font-lato font-semibold">
                        Mother Status:
                      </h3>
                      {errors.motherStatus && (
                        <p className="error">{errors.motherStatus}</p>
                      )}
                      <div className="relative">
                        <input
                          className="outline-none border-2 border-zinc-200 rounded-xl w-full py-3 px-4 text-lg font-lato font-semibold text-zinc-800 leading-tight cursor-pointer transition-all focus:border-blue-500"
                          type="text"
                          name="motherStatus"
                          id="Mother Status"
                          value={formData.motherStatus}
                          readOnly
                          onClick={() => {
                            setIsDropdownOpen(!isDropdownOpen);
                            setToggleDropdown("motherStatus");
                          }}
                        />
                        {!isDropdownOpen &&
                          toggleDropdown === "motherStatus" && (
                            <div
                              className="absolute w-full h-fit max-h-[350px] flex flex-col gap-2 mt-1 bg-white border-2 border-zinc-200 overflow-x-hidden overflow-y-auto rounded-xl z-10"
                              id="dropDownBox"
                            >
                              {Object.keys(parentStatus).map(
                                (category) =>
                                  category === "Mother" &&
                                  parentStatus[category].map(
                                    (status, index) => (
                                      <label
                                        key={index}
                                        className={`${
                                          formData.motherStatus === status &&
                                          "bg-blue-500 text-slate-50"
                                        } py-2 px-4 text-lg font-lato font-semibold cursor-pointer transition-all hover:text-zinc-700 hover:bg-gray-100 `}
                                        htmlFor={status}
                                      >
                                        <input
                                          type="radio"
                                          name="motherStatus"
                                          id={status}
                                          className="w-fit h-5 hidden"
                                          value={status}
                                          onChange={handleChange}
                                        />
                                        {status}
                                      </label>
                                    )
                                  )
                              )}
                            </div>
                          )}
                      </div>
                    </label>

                    <div className="flex gap-4">
                      {/* Siblings types */}
                      <label
                        className="relative w-full flex flex-col gap-3 mb-4"
                        htmlFor="Siblings Type"
                      >
                        <h3 className="text-xl font-lato font-semibold">
                          Siblings Type:{" "}
                        </h3>
                        {errors.siblingsType && (
                          <p className="error">{errors.siblingsType}</p>
                        )}
                        <div className="relative">
                          <input
                            className="outline-none border-2 border-zinc-200 rounded-xl w-full py-3 px-4 text-lg font-lato font-semibold text-zinc-800 leading-tight cursor-pointer transition-all focus:border-blue-500"
                            type="text"
                            name="siblingsType"
                            id="Siblings Type"
                            value={formData.siblingsType}
                            readOnly
                            onClick={() => {
                              setIsDropdownOpen(!isDropdownOpen);
                              setToggleDropdown("siblingsType");
                            }}
                          />
                          {!isDropdownOpen &&
                            toggleDropdown === "siblingsType" && (
                              <div
                                className="absolute w-full h-fit max-h-[350px] flex flex-col gap-2 mt-1 bg-white border-2 border-zinc-200 overflow-x-hidden overflow-y-auto rounded-xl z-10"
                                id="dropDownBox"
                              >
                                {Object.keys(siblings).map(
                                  (category, index) => (
                                    <label
                                      key={index}
                                      className={`${
                                        formData.siblingsType === category &&
                                        "bg-blue-500 text-slate-50"
                                      } py-2 px-4 text-lg font-lato font-semibold cursor-pointer transition-all hover:text-zinc-700 hover:bg-gray-100 `}
                                      htmlFor={category}
                                    >
                                      <input
                                        type="radio"
                                        name="siblingsType"
                                        id={category}
                                        className="w-fit h-5 hidden"
                                        value={category}
                                        onChange={handleChange}
                                      />
                                      {category}
                                    </label>
                                  )
                                )}
                              </div>
                            )}
                        </div>
                      </label>

                      {/* Siblings numbers */}
                      <label
                        className="relative w-full flex flex-col gap-3 mb-4"
                        htmlFor="Number of Sibling"
                      >
                        <h3 className="text-xl font-lato font-semibold">
                          Number of Siblings:
                        </h3>
                        {errors.siblingsNum && (
                          <p className="error">{errors.siblingsNum}</p>
                        )}
                        <div className="relative">
                          <input
                            className="outline-none border-2 border-zinc-200 rounded-xl w-full py-3 px-4 text-lg font-lato font-semibold text-zinc-800 leading-tight cursor-pointer transition-all focus:border-blue-500"
                            type="text"
                            name="siblingsNum"
                            id="Number of Sibling"
                            value={
                              formData.siblingsType === "No Siblings"
                                ? "0 Brothers, 0 Sisters"
                                : formData.siblingsNum
                            }
                            readOnly
                            disabled={
                              formData.siblingsType === "" ||
                              formData.siblingsType === "No Siblings"
                                ? true
                                : false
                            }
                            onClick={() => {
                              setIsDropdownOpen(!isDropdownOpen);
                              setToggleDropdown("siblingsNum");
                            }}
                          />
                          {!isDropdownOpen &&
                            toggleDropdown === "siblingsNum" && (
                              <div
                                className="absolute w-full h-fit max-h-[350px] flex flex-col gap-2 mt-1 bg-white border-2 border-zinc-200 overflow-x-hidden overflow-y-auto rounded-xl z-10"
                                id="dropDownBox"
                              >
                                {Object.keys(siblings).map(
                                  (category) =>
                                    formData.siblingsType === category && (
                                      <div
                                        className="flex flex-col gap-2"
                                        key={category}
                                      >
                                        {formData.siblingsType === category &&
                                          siblings[category].map(
                                            (siblingsCount, index) => (
                                              <label
                                                key={index}
                                                className={`${
                                                  formData.siblingsNum ===
                                                    siblingsCount &&
                                                  "bg-blue-500 text-slate-50"
                                                } py-2 px-4 text-lg font-lato font-semibold cursor-pointer transition-all hover:text-zinc-700 hover:bg-gray-100 `}
                                                htmlFor={siblingsCount}
                                              >
                                                <input
                                                  type="radio"
                                                  name="siblingsNum"
                                                  id={siblingsCount}
                                                  className="w-fit h-5 hidden"
                                                  value={siblingsCount}
                                                  onChange={handleChange}
                                                />
                                                {siblingsCount}
                                              </label>
                                            )
                                          )}
                                      </div>
                                    )
                                )}
                              </div>
                            )}
                        </div>
                      </label>
                    </div>

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
                </fieldset>
              )}

              {step === 7 && (
                <fieldset className={`${animation} w-full min-w-full h-auto`}>
                  <h2 className="flex justify-between items-end text-3xl font-playfair font-extrabold border-b-2 border-gray-600 pb-2">
                    <i className="ri-arrow-left-s-line text-end font-medium"></i>
                    Verification
                    <i className="ri-arrow-right-s-line text-end font-medium"></i>
                  </h2>
                  <div className="relative flex flex-col mt-5 w-full h-auto text-zinc-700">
                    <h3 className="text-2xl font-lato font-semibold mb-2">
                      We Are Almost Done!
                    </h3>
                    <p className="text-justify text-lg font-opensans font-medium">
                      To ensure the security and authenticity of our community,
                      we need to verify your email, phone number, and Government
                      ID. Please complete the following steps to finish setting
                      up your profile.
                    </p>
                    <div className="mt-5">
                      {/* Email ID Verification */}
                      <label
                        className="relative flex flex-col gap-3 mb-5"
                        htmlFor="Email ID Verification"
                      >
                        <h3 className="text-xl font-lato font-semibold">
                          Email ID Verification:
                        </h3>
                        {errors.email && (
                          <p className="error">{errors.email}</p>
                        )}
                        <input
                          className="outline-none border-2 border-zinc-200 rounded-xl w-full py-3 px-4 text-lg font-lato font-semibold text-zinc-800 leading-tight transition-all focus:border-blue-500"
                          id="Email ID Verification"
                          type="text"
                          name="email"
                          value={formData.email}
                          readOnly
                          onChange={handleChange}
                        />
                      </label>

                      {/* Phone No Verification */}
                      <label
                        className="relative flex flex-col gap-3 mb-5"
                        htmlFor="Phone No Verification"
                      >
                        <h3 className="text-xl font-lato font-semibold">
                          Phone No Verification:{" "}
                          <span className="optional">(An OTP has been sent to your phone number: <i className="not-italic text-blue-700 underline">{formData.phoneNumber}</i>. &nbsp; If you want to change your phone number, please update it right here.)</span>
                        </h3>
                        {errors.phoneNumber && (
                          <p className="error">{errors.phoneNumber}</p>
                        )}
                        <input
                          className="outline-none border-2 border-zinc-200 rounded-xl w-full py-3 px-4 text-lg font-lato font-semibold text-zinc-800 leading-tight transition-all focus:border-blue-500"
                          id="Phone No Verification"
                          type="tel"
                          name="phoneNumber"
                          value={formData.phoneNumber}
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
