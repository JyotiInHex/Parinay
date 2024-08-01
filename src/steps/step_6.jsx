import React, { useContext } from "react";
import { MyContext } from "../auth/register";
import {
  FamilyType,
  FamilyValue,
  FamilySocialStatus,
  ParentStatus,
  Siblings,
} from "../data/formData";

const Step_6 = () => {
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
            <h3 className="text-xl font-lato font-semibold">Family Type:</h3>
            {errors.familyType && <p className="error">{errors.familyType}</p>}
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
              {!isDropdownOpen && toggleDropdown === "familyType" && (
                <div
                  className="absolute w-full h-fit max-h-[350px] flex flex-col gap-2 mt-1 bg-white border-2 border-zinc-200 overflow-x-hidden overflow-y-auto rounded-xl z-10"
                  id="dropDownBox"
                >
                  {FamilyType.map((type, index) => (
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
            <h3 className="text-xl font-lato font-semibold">Social Status:</h3>
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
              {!isDropdownOpen && toggleDropdown === "familySocialStatus" && (
                <div
                  className="absolute w-full h-fit max-h-[350px] flex flex-col gap-2 mt-1 bg-white border-2 border-zinc-200 overflow-x-hidden overflow-y-auto rounded-xl z-10"
                  id="dropDownBox"
                >
                  {FamilySocialStatus.map((type, index) => (
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
            {!isDropdownOpen && toggleDropdown === "livingInWithFamily" && (
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
            Family Values: <span className="optional">(Optional)</span>
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
            {!isDropdownOpen && toggleDropdown === "familyValue" && (
              <div
                className="absolute w-full h-fit max-h-[350px] flex flex-col gap-2 mt-1 bg-white border-2 border-zinc-200 overflow-x-hidden overflow-y-auto rounded-xl z-10"
                id="dropDownBox"
              >
                {FamilyValue.map((value, index) => (
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
          <h3 className="text-xl font-lato font-semibold">Father Status:</h3>
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
            {!isDropdownOpen && toggleDropdown === "fatherStatus" && (
              <div
                className="absolute w-full h-fit max-h-[350px] flex flex-col gap-2 mt-1 bg-white border-2 border-zinc-200 overflow-x-hidden overflow-y-auto rounded-xl z-10"
                id="dropDownBox"
              >
                {Object.keys(ParentStatus).map(
                  (category) =>
                    category === "Father" &&
                    ParentStatus[category].map((status, index) => (
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
                    ))
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
          <h3 className="text-xl font-lato font-semibold">Mother Status:</h3>
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
            {!isDropdownOpen && toggleDropdown === "motherStatus" && (
              <div
                className="absolute w-full h-fit max-h-[350px] flex flex-col gap-2 mt-1 bg-white border-2 border-zinc-200 overflow-x-hidden overflow-y-auto rounded-xl z-10"
                id="dropDownBox"
              >
                {Object.keys(ParentStatus).map(
                  (category) =>
                    category === "Mother" &&
                    ParentStatus[category].map((status, index) => (
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
                    ))
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
            <h3 className="text-xl font-lato font-semibold">Siblings Type: </h3>
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
              {!isDropdownOpen && toggleDropdown === "siblingsType" && (
                <div
                  className="absolute w-full h-fit max-h-[350px] flex flex-col gap-2 mt-1 bg-white border-2 border-zinc-200 overflow-x-hidden overflow-y-auto rounded-xl z-10"
                  id="dropDownBox"
                >
                  {Object.keys(Siblings).map((category, index) => (
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
                  ))}
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
              {!isDropdownOpen && toggleDropdown === "siblingsNum" && (
                <div
                  className="absolute w-full h-fit max-h-[350px] flex flex-col gap-2 mt-1 bg-white border-2 border-zinc-200 overflow-x-hidden overflow-y-auto rounded-xl z-10"
                  id="dropDownBox"
                >
                  {Object.keys(Siblings).map(
                    (category) =>
                      formData.siblingsType === category && (
                        <div className="flex flex-col gap-2" key={category}>
                          {formData.siblingsType === category &&
                            Siblings[category].map((siblingsCount, index) => (
                              <label
                                key={index}
                                className={`${
                                  formData.siblingsNum === siblingsCount &&
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
                            ))}
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
    </>
  );
};

export default Step_6;
