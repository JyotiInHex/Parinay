import React, { useContext } from "react";
import { MyContext } from "../auth/register";
import { GovIDs } from "../data/formData";

const Step_7 = () => {
  const {
    formData,
    handleChange,
    handlePrev,
    documentName,
    handleProceed,
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
        Verification
        <i className="ri-arrow-right-s-line text-end font-medium"></i>
      </h2>
      <div className="relative flex flex-col mt-5 w-full h-auto text-zinc-700">
        <h3 className="text-2xl font-lato font-semibold mb-2">
          We Are Almost Done!
        </h3>
        <p className="text-justify text-lg font-opensans font-medium">
          To ensure the security and authenticity of our community, we need to
          verify your email, phone number, and Government ID. Please complete
          the following steps to finish setting up your profile.
        </p>
        <div className="mt-5">
          {/* Email ID Verification */}
          <label
            className="relative flex flex-col gap-1 mb-5"
            htmlFor="Email ID Verification"
          >
            <h3 className="text-xl font-lato font-semibold">Email ID:</h3>
            <span className="optional">
              If you want to change your Email ID, please update it right here.
            </span>
            {errors.email && <p className="error">{errors.email}</p>}
            <input
              className="outline-none border-2 border-zinc-200 rounded-xl w-full py-3 px-4 text-lg font-lato font-semibold text-zinc-800 leading-tight transition-all focus:border-blue-500"
              id="Email ID Verification"
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>

          {/* Phone No Verification */}
          <label
            className="relative flex flex-col gap-1 mb-5"
            htmlFor="Phone No Verification"
          >
            <h3 className="text-xl font-lato font-semibold">Your Phone No:</h3>
            <span className="optional">
              If you want to change your phone number, please update it right
              here.
            </span>
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

          <div className="flex gap-4">
            {/* Gov ID Type */}
            <label
              className="relative w-full flex flex-col gap-2 mb-2"
              htmlFor="Gov ID Type"
            >
              <h3 className="text-xl font-lato font-semibold">
                Government ID:
              </h3>
              {errors.GovIdType && <p className="error">{errors.GovIdType}</p>}
              <div className="relative">
                <input
                  className="outline-none border-2 border-zinc-200 rounded-xl w-full py-3 px-4 text-lg font-lato font-semibold text-zinc-800 leading-tight cursor-pointer transition-all focus:border-blue-500"
                  type="text"
                  name="GovIdType"
                  id="Gov ID Type"
                  value={formData.GovIdType}
                  readOnly
                  onClick={() => {
                    setIsDropdownOpen(!isDropdownOpen);
                    setToggleDropdown("GovIdType");
                  }}
                />
                {!isDropdownOpen && toggleDropdown === "GovIdType" && (
                  <div
                    className="absolute w-full h-fit max-h-[350px] flex flex-col gap-2 mt-1 bg-white border-2 border-zinc-200 overflow-x-hidden overflow-y-auto rounded-xl z-10"
                    id="dropDownBox"
                  >
                    {GovIDs.map((type, index) => (
                      <label
                        key={index}
                        className={`${
                          formData.GovIdType === type &&
                          "bg-blue-500 text-slate-50"
                        } py-2 px-4 text-lg font-lato font-semibold cursor-pointer transition-all hover:text-zinc-700 hover:bg-gray-100 `}
                        htmlFor={type}
                      >
                        <input
                          type="radio"
                          name="GovIdType"
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

            {/* Upload Document */}
            <label
              className="relative flex flex-col gap-2 mb-2"
              htmlFor="Upload Document"
            >
              <h3 className="text-xl font-lato font-semibold">
                Upload:
                <span className="optional"></span>
              </h3>
              {errors.GovIdDoc && <p className="error">{errors.GovIdDoc}</p>}
              <h4
                className={`${
                  formData.GovIdType === "" &&
                  documentName === "" &&
                  "bg-[#f5f7f8]"
                } outline-none border-2 bg-white border-zinc-200 rounded-xl w-[20em] max-w-[20em] h-auto min-h-[2.8em] py-3 px-4 text-lg font-lato font-semibold ${
                  formData.GovIdType === "" ? "text-[#d4d4d4]" : "text-zinc-600"
                } leading-tight cursor-pointer transition-all focus:border-blue-500 whitespace-nowrap overflow-hidden`}
              >
                <i className="ri-upload-2-fill"></i>{" "}
                {documentName === ""
                  ? "Upload a file in .jpg, or .pdf formate."
                  : documentName}
              </h4>
              <input
                type="file"
                name="GovIdDoc"
                id="Upload Document"
                onChange={handleChange}
                hidden
                accept=".jpeg,.jpg,.pdf"
                disabled={formData.GovIdType === ""}
              />
            </label>
          </div>

          <div className="mt-1 mb-4">
            <h3 className="text-lg font-lato font-semibold">
              Why We Require Government ID ?
            </h3>
            <p className="text-base font-opensans font-medium">
              <b className="text-2xl">→</b>&nbsp; A government ID helps us
              confirm your identity, adding an extra layer of security. It helps
              us:
            </p>
            <ul className="px-12 list-disc flex flex-col text-base font-opensans font-medium">
              <li>Authenticate your profile as genuine.</li>
              <li>Prevent identity theft and fake profiles.</li>
              <li>Maintain the integrity of the platform.</li>
            </ul>
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
              className="self-end w-fit h-auto px-5 py-2 bg-[#4CAF50] rounded-lg text-xl text-slate-100 font-opensans font-medium transition-all hover:bg-[#429945]"
              type="button"
              onClick={handleProceed}
            >
              Proceed
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Step_7;
