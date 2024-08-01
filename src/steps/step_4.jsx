import React, { useContext } from "react";
import { MyContext } from "../auth/register";
import {
  Qualifications,
  WorkWith,
  JobRole,
  IncomeList,
} from "../data/formData";

const Step_4 = () => {
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
            {!isDropdownOpen && toggleDropdown === "qualifications" && (
              <div
                className="absolute w-full h-fit max-h-[350px] mt-1 bg-white border-2 border-zinc-200 overflow-x-hidden overflow-y-auto rounded-xl z-10"
                id="dropDownBox"
              >
                {Object.keys(Qualifications).map((category) => (
                  <div className="flex flex-col gap-2" key={category}>
                    <div className="px-4 py-2 text-xl text-center font-opensans font-semibold bg-zinc-100">
                      -{category}-
                    </div>
                    {Qualifications[category].map((HQ, index) => (
                      <label
                        key={index}
                        className={`${
                          formData.qualifications === HQ.toLowerCase() &&
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
            errors.collegeName && <p className="error">{errors.collegeName}</p>}
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
            disabled={formData.qualifications === "preferred not to say"}
          />
        </label>

        {/*  Current Employer */}
        <label
          className="relative flex flex-col gap-3 mb-4"
          htmlFor="Current Employer"
        >
          <h3 className="text-xl font-lato font-semibold">Current Employer:</h3>
          {errors.workWith && <p className="error">{errors.workWith}</p>}
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
                {WorkWith.map((type, index) => (
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
        <label className="relative flex flex-col gap-3 mb-4" htmlFor="Job Role">
          <h3 className="text-xl font-lato font-semibold">Job Role:</h3>
          {errors.jobRole && <p className="error">{errors.jobRole}</p>}
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
                {Object.keys(JobRole).map((category) => (
                  <div className="flex flex-col gap-2" key={category}>
                    {formData.workWith === category.toLowerCase() && (
                      <div className="px-4 py-2 text-xl text-center font-opensans font-semibold bg-zinc-100">
                        {category}
                      </div>
                    )}
                    {formData.workWith === category.toLowerCase() &&
                      JobRole[category].map((role, index) => (
                        <label
                          key={index}
                          className={`${
                            formData.jobRole === role.toLowerCase() &&
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
            {formData.jobRole !== "" && formData.jobRole !== "other" && (
              <span className="optional">(optional)</span>
            )}
          </h3>
          {formData.additionalJobRole === "" && errors.additionalJobRole && (
            <p className="error">{errors.additionalJobRole}</p>
          )}
          <input
            className="outline-none border-2 border-zinc-200 rounded-xl w-full py-3 px-4 text-lg font-lato font-semibold text-zinc-800 leading-tight transition-all focus:border-blue-500"
            id="Specify Your Role"
            type="text"
            name="additionalJobRole"
            value={`${
              formData.jobRole !== "" && formData.jobRole !== "other"
                ? "No filing required."
                : formData.additionalJobRole
            }`}
            onChange={handleChange}
            disabled={formData.jobRole !== "" && formData.jobRole !== "other"}
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
              <b>Why required?</b>&nbsp; To understand financial stability and
              planning.
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
            {!isDropdownOpen && toggleDropdown === "annualIncome" && (
              <div
                className="absolute flex flex-col gap-2 w-full h-fit max-h-[350px] mt-1 bg-white border-2 border-zinc-200 overflow-x-hidden overflow-y-auto rounded-xl z-10"
                id="dropDownBox"
              >
                {IncomeList.map((income, index) => (
                  <label
                    key={index}
                    className={`${
                      formData.annualIncome === income.toLowerCase() &&
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
    </>
  );
};

export default Step_4;
