import React, {useState } from "react";
import registerBg from "../assets/registration-1.webp";
import validation from "./validation";

const Register = () => {
  const [step, setStep] = useState(3);
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
  });
  const [animation, setAnimation] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [errors, setErrors] = useState({});
  const religions = [
    "Hinduism",
    "Islam",
    "Christianity",
    "Sikhism",
    "Buddhism",
    "Jainism",
    "Others",
  ];
  const districts = [
    "Baksa",
    "Barpeta",
    "Bajali",
    "Biswanath",
    "Bongaigaon",
    "Cachar",
    "Charaideo",
    "Chirang",
    "Darrang",
    "Dhemaji",
    "Dhubri",
    "Dibrugarh",
    "Dima Hasao",
    "Goalpara",
    "Golaghat",
    "Hailakandi",
    "Hojai",
    "Jorhat",
    "Kamrup",
    "Kamrup Metropolitan",
    "Karbi Anglong",
    "Karimganj",
    "Kokrajhar",
    "Lakhimpur",
    "Majuli",
    "Morigaon",
    "Nagaon",
    "Nalbari",
    "Sivasagar",
    "Sonitpur",
    "South Salmara-Mankachar",
    "Tamulpur",
    "Tinsukia",
    "Udalguri",
    "West Karbi Anglong",
  ]

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({...formData, [name]: value });
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: undefined // or null, or ''
    }));
    setIsDropdownOpen(null);
  };

  const handleNext = () => {
    const currentError = validation(step, formData);
    if (Object.keys(currentError).length > 0) {
      setErrors(currentError);
    }else{
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
          <div className="relative z-10 w-[60%] min-h-[95vh] flex flex-col justify-start text-slate-50 p-10">
            <figure className="absolute top-0 left-0 z-[-1] w-full h-full overflow-hidden rounded-l-md">
              <img
                src={registerBg}
                alt="registerBg"
                className="w-full h-full object-cover pointer-events-none"
              />
            </figure>
            <span className="absolute top-0 left-0 z-[-1] w-full h-[40vh] backdrop-blur-[3px] rounded-md"></span>
            <span className="pointer-events-none text-base text-slate-50 text-shadow-5xl text-right font-lato font-semibold">
              All Fields Are  to fill !&nbsp;&nbsp;
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
                <div className={`${animation} w-full min-w-full h-auto`}>
                  <h2 className="flex justify-between items-end text-3xl font-playfair font-extrabold border-b-2 border-gray-600 pb-2">
                    Profile Information
                    <i className="ri-arrow-right-s-line text-end font-medium"></i>
                  </h2>
                  <fieldset className=" flex flex-col mt-5 w-full h-auto">
                    {/* Profile For */}
                    <div className="relative flex flex-row flex-wrap gap-y-2 gap-x-2 mb-4">
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
                      {errors.profileFor && (<p className="error">{errors.profileFor}</p>)}
                    </div>

                    {/* First Name */}
                    <label
                      className="relative flex flex-col gap-3 mb-4"
                      htmlFor="First_name"
                    >
                      <h3 className="text-xl font-lato font-semibold">
                        First Name:
                      </h3>
                      {errors.fName && (<p className="error">{errors.fName}</p>)}
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
                      className="relative flex flex-col gap-3 mb-4"
                      htmlFor="Last_name"
                    >
                      <h3 className="text-xl font-lato font-semibold">
                        Last Name:
                      </h3>
                      {errors.lName && (<p className="error">{errors.lName}</p>)}
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
                    <div className="relative flex flex-wrap items-center gap-x-3 mb-4">
                      <h3 className="text-xl font-lato font-semibold">
                        Gender:
                      </h3>
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
                      {errors.gender && (<p className="error">{errors.gender}</p>)}
                    </div>

                    {/* Religion */}
                    <label
                      className="relative flex flex-col gap-3 mb-4"
                      htmlFor="Religion"
                    >
                      <h3 className="text-xl font-lato font-semibold">
                        Religion:
                      </h3>
                      {errors.religion && (<p className="error">{errors.religion}</p>)}
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
                      className="relative flex flex-col gap-3 mb-4"
                      htmlFor="Community"
                    >
                      <h3 className="text-xl font-lato font-semibold">
                        Community:
                      </h3>
                      {errors.community && (<p className="error">{errors.community}</p>)}
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
                  </fieldset>
                </div>
              )}

              {step === 2 && (
                <div className={`${animation} w-full min-w-full h-auto`}>
                  <h2 className="flex justify-between items-end text-3xl font-playfair font-extrabold border-b-2 border-gray-600 pb-2">
                    <i className="ri-arrow-left-s-line text-end font-medium"></i>
                    Contact Information
                    <i className="ri-arrow-right-s-line text-end font-medium"></i>
                  </h2>
                  <fieldset className="relative flex flex-col mt-5 w-full h-auto">
                    {/* Email ID */}
                    <label className="flex flex-col gap-3 mb-4" htmlFor="Email">
                      <h3 className="text-xl font-lato font-semibold">
                        Email ID:
                      </h3>
                      {errors.email && (<p className="error">{errors.email}</p>)}
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
                    <label className="relative flex flex-col gap-3 mb-4" htmlFor="Phone Number">
                      <h3 className="text-xl font-lato font-semibold">
                        Phone No:
                      </h3>
                      {errors.phoneNumber && (<p className="error">{errors.phoneNumber}</p>)}
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
                    <label className="relative flex flex-col gap-3 mb-4" htmlFor="Date Of Birth">
                      <h3 className="text-xl font-lato font-semibold">
                        Date of Birth:
                      </h3>
                      {errors.DOB && (<p className="error">{errors.DOB}</p>)}
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
                      {errors. livingIn && (<p className="error">{errors. livingIn}</p>)}
                      <div className="relative">
                        <input
                          className="outline-none border-2 border-zinc-200 rounded-xl w-full py-3 px-4 text-lg font-lato font-semibold text-zinc-800 leading-tight cursor-pointer transition-all focus:border-blue-500"
                          type="text"
                          name="livingIn"
                          id="Living In"
                          value={formData.livingIn}
                          readOnly
                          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        />
                        {isDropdownOpen && (
                          <div className="absolute flex flex-col gap-2 w-full h-fit max-h-[350px] mt-1 bg-white border-2 border-zinc-200 overflow-x-hidden overflow-y-auto rounded-xl z-10" id="dropDownBox">
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
                  </fieldset>
                </div>
              )}

              {step === 3 && (
                <div>Hi</div>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
