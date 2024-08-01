import React, { useEffect, useRef, useState } from "react";
import registerBg from "../assets/registration-1.webp";
import validation from "./validation";
import { registrationFormState } from "./fromStructure";

import Step_1 from "../steps/step_1";
import Step_2 from "../steps/step_2";
import Step_3 from "../steps/step_3";
import Step_4 from "../steps/step_4";
import Step_5 from "../steps/step_5";
import Step_6 from "../steps/step_6";
import Step_7 from "../steps/step_7";
import OtpAuth from "./otpAuth";

export const MyContext = React.createContext();

const Register = () => {
  useEffect(() => {
    document.title = "Register";
  });

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState(registrationFormState);
  const [profilePic, setProfilePic] = useState("");
  const [documentName, setDocName] = useState("");
  const [otp, setOtpPin] = useState(new Array(4).fill(""));
  const [animation, setAnimation] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const [errors, setErrors] = useState({});
  const [otpPopUp, setOtpPopup] = useState(false);
  const [timeRemains, setTimerUpdate] = useState(60);
  const [otpResendLimit, setResendLimit] = useState(0);
  const currentError = validation(step, formData);
  const intervalRef = useRef(null);

  function selector(elem) {
    return document.querySelector(elem);
  }

  const handleNext = () => {
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

    if (name === "GovIdDoc") {
      if (files && files.length > 0) {
        setDocName(files[0].name);
      } else {
        setDocName("");
      }
    }
    setIsDropdownOpen(false);
    setToggleDropdown(false);
  };

  const handleProceed = () => {
    if (Object.keys(currentError).length > 0) {
      setErrors(currentError);
      setOtpPopup(false);
    } else {
      setOtpPopup(true);
      if (otpResendLimit < 5) {
        <>// otp Send Api here</>;

        if (intervalRef.current) clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
          setTimerUpdate((prevCount) => (prevCount !== 0 ? prevCount - 1 : 0));
        }, 1000);
      }
    }
  };

  const handleOtpResend = () => {
    if (otpResendLimit < 5) {
      <>// otp re send api here</>;
      setTimerUpdate(60);
      setResendLimit(otpResendLimit + 1);
    } else {
      alert("unable to send otp limit extend! please try again later");
      handleCancel();
    }
  };

  const handleOtpChange = (element, index) => {
    let newOtp = [...otp];
    newOtp[index] = element.value;
    setOtpPin(newOtp);

    if (element.value !== "" && index < 3) {
      selector(`#otp-${index + 1}`).focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (
      (e.key === "Backspace" && index > 0 && !otp[index]) ||
      (e.key === "ArrowLeft" && index > 0)
    ) {
      selector(`#otp-${index - 1}`).focus();
    } else if (e.key === "ArrowRight" && index < 3) {
      selector(`#otp-${index + 1}`).focus();
    }
  };

  const handleCancel = () => {
    setFormData(registrationFormState);
    setProfilePic("");
    setDocName("");
    setOtpPin(new Array(4).fill(""));
    setStep(1);
    setOtpPopup(false);
    setTimerUpdate(60);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const handleSubmission = (e) => {
    e.preventDefault();
    alert("welcome");
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
          <form className="registrationForm w-full h-auto bg-slate-50 rounded-r-md overflow-x-clip">
            <div className="relative w-full h-fit transition-all p-7 flex text-zinc-700">
              <MyContext.Provider
                value={{
                  step,
                  setStep,
                  formData,
                  setFormData,
                  profilePic,
                  setProfilePic,
                  documentName,
                  setDocName,
                  isDropdownOpen,
                  setIsDropdownOpen,
                  toggleDropdown,
                  setToggleDropdown,
                  errors,
                  setErrors,
                  handleNext,
                  handlePrev,
                  handleChange,
                  handleProceed,
                }}
              >
                {step === 1 && (
                  <fieldset className={`${animation} w-full min-w-full h-auto`}>
                    <Step_1 />
                  </fieldset>
                )}
                {step === 2 && (
                  <fieldset className={`${animation} w-full min-w-full h-auto`}>
                    <Step_2 />
                  </fieldset>
                )}
                {step === 3 && (
                  <fieldset className={`${animation} w-full min-w-full h-auto`}>
                    <Step_3 />
                  </fieldset>
                )}
                {step === 4 && (
                  <fieldset className={`${animation} w-full min-w-full h-auto`}>
                    <Step_4 />
                  </fieldset>
                )}
                {step === 5 && (
                  <fieldset className={`${animation} w-full min-w-full h-auto`}>
                    <Step_5 />
                  </fieldset>
                )}
                {step === 6 && (
                  <fieldset className={`${animation} w-full min-w-full h-auto`}>
                    <Step_6 />
                  </fieldset>
                )}
                {step === 7 && (
                  <fieldset className={`${animation} w-full min-w-full h-auto`}>
                    <Step_7 />
                  </fieldset>
                )}
              </MyContext.Provider>
            </div>
          </form>
        </div>
        <MyContext.Provider
          value={{
            otp,
            setOtpPin,
            otpPopUp,
            setOtpPopup,
            timeRemains,
            setTimerUpdate,
            otpResendLimit,
            setResendLimit,
            intervalRef,
            handleOtpChange,
            handleOtpResend,
            handleKeyDown,
            handleCancel,
            handleSubmission,
          }}
        >
          {otpPopUp && <OtpAuth />}
        </MyContext.Provider>
      </div>
    </>
  );
};

export default Register;
