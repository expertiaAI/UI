import React from "react";
import { twMerge } from "tailwind-merge";

export default function DropDownSearch(children, className, options, ...rest) {
  const combined = twMerge(
    "z-50 absolute left-0 w-full top-1 bg-white border border-gray-300 rounded outline-none border-solid max-h-44 ",
    className
  );

  return (
    <div options={options}>
      {options.map((option) => (
        <div
          key={option.id}
          className="cursor-pointer hover:bg-[#e7f0fe]"
          {...rest}
        >
          <div className=" font-inter text-base bg-white p-1 font-medium text-[#4E4E4E] rounded">
            <p className="text-sm hover:bg-lightPurple hover:text-white py-1.5 px-1.5 rounded pl-3">
              {option.title}
            </p>
          </div>
          <div className="bg-gray-200" style={{ height: "0.1px" }} />
        </div>
      ))}
    </div>
  );
}
