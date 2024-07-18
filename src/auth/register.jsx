import React, { useState } from "react";
import registerBg from "../assets/registration-2.webp";

const validStep1 = (data) => {
  const {profileFor,fName,lName,gender,religion,community} = data;
  return profileFor && fName && lName && gender && religion && community;
}

const Register = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    profileFor: "",
    fName: "",
    lName: "",
    gender: "",
    religion: "",
    community: "",
  });
  
  const [isValid, setIsValid] = useState(false);

  const [animation, setAnimation] = useState("");
  
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  const religions = [
    "Hinduism",
    "Islam",
    "Christianity",
    "Sikhism",
    "Buddhism",
    "Jainism",
    "Others",
  ];
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if(step === 1){setIsValid(validStep1(setFormData));}
    // if(step === 2){setIsValid(validStep2(setFormData));}
    // if(step === 3){setIsValid(validStep3(setFormData));}
    // if(step === 4){setIsValid(validStep4(setFormData));}
    // if(step === 5){setIsValid(validStep5(setFormData));}
    // if(step === 6){setIsValid(validStep6(setFormData));}
    // if(step === 7){setIsValid(validStep7(setFormData));}
    // if(step === 8){setIsValid(validStep8(setFormData));}
    setIsDropdownOpen(null);
  };

  const handleNext = () => {
    if(step === 1 && validStep1(formData)){setAnimation("animate-slide-left"); setStep(step + 1);}
    // if(step === 2 && validStep2(formData)){setStep(step + 1);}
    // if(step === 3 && validStep3(formData)){setStep(step + 1);}
    // if(step === 4 && validStep4(formData)){setStep(step + 1);}
    // if(step === 5 && validStep5(formData)){setStep(step + 1);}
    // if(step === 6 && validStep6(formData)){setStep(step + 1);}
    // if(step === 7 && validStep7(formData)){setStep(step + 1);}
    // if(step === 8 && validStep8(formData)){setStep(step + 1);}
  };

  const handlePrev = () => {
    setAnimation("animate-slide-right");
    step === 0 ? setStep(0) : setStep(step - 1);
  };

  return (
    <>
      <div className="relative w-full h-auto p-5">
        <div className="p-10 w-full h-auto rounded-xl flex">
          <div className="relative z-10 w-[60%] min-h-[95vh] flex flex-col justify-end text-slate-50 p-10">
            <figure className="absolute top-0 left-0 z-[-1] w-full h-full overflow-hidden rounded-l-md">
              <img
                src={registerBg}
                alt="registerBg"
                className="w-full h-full object-cover pointer-events-none"
              />
            </figure>
            <span className="absolute bottom-0 left-0 z-[-1] w-full h-[35vh] backdrop-blur-[2px] rounded-md"></span>
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
          >
            <div className="relative w-full h-fit transition-all p-7 flex text-zinc-700">
              {step === 1 &&
                <div className={`${animation} w-full min-w-full h-auto`}>
                  <h2 className="flex justify-between items-end text-3xl font-playfair font-extrabold border-b-2 border-gray-600 pb-2">
                    Profile Information
                    <i className="ri-arrow-right-s-line text-end font-medium"></i>
                  </h2>

                  <fieldset className="flex flex-col mt-5 w-full h-auto">
                    {/* Profile For */}
                    <div className="flex flex-wrap items-center gap-3 mt-3 mb-4">
                      <h3 className="text-xl font-lato font-semibold">
                        Profile For:
                      </h3>
                      {[
                        "Self",
                        "Son",
                        "Daughter",
                        "Brother",
                        "Sister",
                        "Friend",
                        "Relative",
                      ].map((profile, index) => (
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
                    </div>

                    {/* First Name */}
                    <label
                      className="flex flex-col gap-3 mb-4"
                      htmlFor="First_name"
                    >
                      <h3 className="text-xl font-lato font-semibold">
                        First Name:
                      </h3>
                      <input
                        className="outline-none border-2 border-zinc-200 rounded-xl w-full py-3 px-4 text-lg font-lato font-semibold text-zinc-800 leading-tight transition-all focus:border-blue-500"
                        id="First_name"
                        type="text"
                        name="fName"
                        value={formData.fName}
                        required
                        onChange={handleChange}
                      />
                    </label>

                    {/* Last Name */}
                    <label
                      className="flex flex-col gap-3 mb-4"
                      htmlFor="Last_name"
                    >
                      <h3 className="text-xl font-lato font-semibold">
                        Last Name:
                      </h3>
                      <input
                        className="outline-none border-2 border-zinc-200 rounded-xl w-full py-3 px-4 text-lg font-lato font-semibold text-zinc-800 leading-tight transition-all focus:border-blue-500"
                        id="Last_name"
                        type="text"
                        name="lName"
                        required
                        value={formData.lName}
                        onChange={handleChange}
                      />
                    </label>

                    {/* Gender */}
                    <div className="flex flex-wrap items-center gap-3 mt-3 mb-4">
                      <h3 className="text-xl font-lato font-semibold">Gender:</h3>
                      {["Man", "Woman", "Other"].map((gender, index) => (
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
                    </div>

                    {/* Religion */}
                    <label
                      className="flex flex-col gap-3 mb-4"
                      htmlFor="Religion"
                    >
                      <h3 className="text-xl font-lato font-semibold">
                        Religion:
                      </h3>
                      <div className="relative">
                        <input
                          className="outline-none border-2 border-zinc-200 rounded-xl w-full py-3 px-4 text-lg font-lato font-semibold text-zinc-800 leading-tight cursor-pointer transition-all focus:border-blue-500"
                          type="text"
                          name="religion"
                          id="Religion"
                          value={formData.religion}
                          readOnly
                          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        />
                        {isDropdownOpen && (
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
                      className="flex flex-col gap-3 mb-4"
                      htmlFor="Last_name"
                    >
                      <h3 className="text-xl font-lato font-semibold">
                        Community:
                      </h3>
                      <input
                        className="outline-none border-2 border-zinc-200 rounded-xl w-full py-3 px-4 text-lg font-lato font-semibold text-zinc-800 leading-tight transition-all focus:border-blue-500"
                        id="Last_name"
                        type="text"
                        name="community"
                        required
                        value={formData.community}
                        onChange={handleChange}
                      />
                    </label>
                    
                    <div className="flex flex-col justify-between items-center w-full h-auto">
                      <button className="self-end w-fit h-auto px-5 py-2 bg-gray-500 rounded-lg flex justify-between items-center text-xl text-slate-100 font-opensans font-medium transition-all hover:bg-gray-600" type="button" onClick={handleNext}>Next <i className="ri-arrow-right-s-line text-end font-medium"></i></button>
                    </div>
                  </fieldset>
                </div>
              }

              {step === 2 &&
                <div className={`${animation} w-full min-w-full h-auto`}>
                  <h2 className="flex justify-between items-end text-3xl font-playfair font-extrabold border-b-2 border-gray-600 pb-2">
                    Profile Information
                    <i className="ri-arrow-right-s-line text-end font-medium"></i>
                  </h2>

                  <fieldset className="flex flex-col mt-5 w-full h-auto">
                    {/* First Name */}
                    <label
                      className="flex flex-col gap-3 mb-4"
                      htmlFor="First_name"
                    >
                      <h3 className="text-xl font-lato font-semibold">
                        First Name:
                      </h3>
                      <input
                        className="outline-none border-2 border-zinc-200 rounded-xl w-full py-3 px-4 text-lg font-lato font-semibold text-zinc-800 leading-tight transition-all focus:border-blue-500"
                        id="First_name"
                        type="text"
                        name="fName"
                        value={formData.fName}
                        required
                        onChange={handleChange}
                      />
                    </label>

                    <div className="flex flex-row justify-between items-center w-full h-auto">
                      <button className="self-end w-fit h-auto px-5 py-2 bg-gray-500 rounded-lg flex justify-between items-center text-xl text-slate-100 font-opensans font-medium transition-all hover:bg-gray-600" type="button" onClick={handlePrev}><i className="ri-arrow-left-s-line text-end font-medium"></i> Back</button>
                      <button className="self-end w-fit h-auto px-5 py-2 bg-gray-500 rounded-lg flex justify-between items-center text-xl text-slate-100 font-opensans font-medium transition-all hover:bg-gray-600" type="button" onClick={handleNext}>Next <i className="ri-arrow-right-s-line text-end font-medium"></i></button>
                    </div>
                  </fieldset>
                </div>
              }

              {step === 3 &&
                <div className={`${animation} w-full min-w-full h-auto`}>
                  <h2 className="flex justify-between items-end text-3xl font-playfair font-extrabold border-b-2 border-gray-600 pb-2">
                    Profile Information
                    <i className="ri-arrow-right-s-line text-end font-medium"></i>
                  </h2>

                  <fieldset className="flex flex-col mt-5 w-full h-auto">
                    {/* First Name */}
                    <label
                      className="flex flex-col gap-3 mb-4"
                      htmlFor="First_name"
                    >
                      <h3 className="text-xl font-lato font-semibold">
                        First Name:
                      </h3>
                      <input
                        className="outline-none border-2 border-zinc-200 rounded-xl w-full py-3 px-4 text-lg font-lato font-semibold text-zinc-800 leading-tight transition-all focus:border-blue-500"
                        id="First_name"
                        type="text"
                        name="fName"
                        value={formData.fName}
                        required
                        onChange={handleChange}
                      />
                    </label>

                    <div className="flex flex-row justify-between items-center w-full h-auto">
                      <button className="self-end w-fit h-auto px-5 py-2 bg-gray-500 rounded-lg flex justify-between items-center text-xl text-slate-100 font-opensans font-medium transition-all hover:bg-gray-600" type="button" onClick={handlePrev}><i className="ri-arrow-left-s-line text-end font-medium"></i> Back</button>
                      <button className="self-end w-fit h-auto px-5 py-2 bg-gray-500 rounded-lg flex justify-between items-center text-xl text-slate-100 font-opensans font-medium transition-all hover:bg-gray-600" type="button" onClick={handleNext}>Next <i className="ri-arrow-right-s-line text-end font-medium"></i></button>
                    </div>
                  </fieldset>
                </div>
              }

            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
