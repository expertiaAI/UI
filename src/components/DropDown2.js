import React from "react";

export const DropDown2 = ({ options, onValueChange }) => {
  return (
    <div className="z-50 absolute left-0 w-full bg-white border border-gray-300 rounded outline-none border-solid max-h-44 overflow-y-scroll">
      {options?.map((option) => {
        // console.log(jobTitleList);
        return (
          <div
            key={option.title}
            className="cursor-pointer hover:bg-[#e7f0fe]"
            onClick={() => onValueChange(option)}
          >
            <div className=" font-inter text-base bg-white p-1 my-1 font-medium text-[#4E4E4E] rounded">
              <p className="text-sm hover:bg-lightPurple hover:text-white py-1.5 px-1.5 m-1 rounded pl-3">
                {option.title}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
