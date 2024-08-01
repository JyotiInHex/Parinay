import React, { useContext } from "react";
import { MyContext } from "./register";

const OtpAuth = () => {
  const {
    formData,
    otp,
    otpPopUp,
    timeRemains,
    handleOtpChange,
    handleOtpResend,
    handleKeyDown,
    handleCancel,
    handleSubmission,
  } = useContext(MyContext);
  return (
    <>
      <div
        className={`${
          otpPopUp && "opacity-100 visible"
        } absolute top-0 left-0 w-full h-full bg-zinc-500/40 z-40 flex flex-col justify-center transition-all`}
      >
        <div
          className={`${
            otpPopUp && "animate-slide-top"
          } self-center flex flex-col justify-center w-2/5 h-fit bg-slate-50 p-6 rounded-lg text-zinc-700`}
        >
          <h2 className="relative text-xl text-center font-lato font-semibold after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-slate-400">
            Phone Verification
          </h2>

          <p className="text-lg text-center font-lato font-medium mt-3">
            An OTP has been sent to your phone number:{" "}
            <i className="not-italic font-semibold">
              +91 {formData.phoneNumber}
            </i>
            .
          </p>

          <form
            method="POST"
            className="space-y-3 p-5 w-full h-fit"
            autoComplete="off"
          >
            <label
              htmlFor="email-otp"
              className="flex flex-col justify-center items-center gap-3"
            >
              <span className="text-lg whitespace-nowrap font-lato font-semibold">
                Enter OTP:
              </span>
              <div className="flex justify-center items-center gap-3">
                {["OTP-1", "OTP-2", "OTP-3", "OTP-4"].map((digit, index) => (
                  <input
                    key={digit}
                    className="outline-none w-[11%] h-1/6 border-2 border-gray-300 rounded-lg p-2 text-center text-lg font-merriweather font-extrabold"
                    type="text"
                    name="phoneOtp"
                    value={otp[index]}
                    onChange={(e) => {
                      handleOtpChange(e.target, index);
                    }}
                    onKeyDown={(e) => {
                      handleKeyDown(e, index);
                    }}
                    id={`otp-${index}`}
                    maxLength={1}
                  />
                ))}
              </div>
              <div className="flex gap-1">
                <button
                  className={`${
                    timeRemains === 0 ? "text-zinc-700" : "text-gray-400"
                  } outline-none border-0 bg-transparent text-base font-opensans`}
                  type="button"
                  disabled={!timeRemains == 0}
                  onClick={handleOtpResend}
                >
                  Resend OTP in
                </button>
                <h6 className="text-lg font-opensans font-semibold">
                  00:{timeRemains.toString().padStart(2, "0")}
                </h6>
              </div>
            </label>
          </form>
          <div className="flex justify-evenly items-center gap-10 text-lg text-slate-100 font-opensans font-semibold">
            <button
              className="outline-none border-2 border-zinc-900 w-full h-fit bg-zinc-900 py-2 rounded-lg"
              type="button"
              onClick={handleCancel}
            >
              Cancel
            </button>
            <button
              className="outline-none border-2 border-blue-600 w-full h-fit bg-blue-600 py-2 rounded-lg"
              type="submit"
              onClick={handleSubmission}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default OtpAuth;
