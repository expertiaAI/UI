import React, { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
export const DropDown3 = ({
  options,
  className,
  className2,
  defaultValue,
  onValueChange,
  containerWidth,
  ...rest
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  useEffect(() => {
    setSelectedOption(defaultValue);
  }, []);

  const combined = twMerge(
    ` border border-solid border-[#D9DEE2] text-gray-500 rounded px-4 py-4 flex justify-between items-center text-sm hover:bg-gray-200 `,
    className
  );

  const combined2 = twMerge(
    ` text-sm text-gray-400 mt-1 shadow border bg-white rounded absolute`,
    className2
  );

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectOption = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="relative z-10">
      {isOpen ? (
        <div
          className="w-[100vw] h-[100vh] fixed top-0 left-0 -z-10"
          onClick={() => setIsOpen(false)}
        ></div>
      ) : (
        ""
      )}
      <button className={combined} onClick={toggleDropdown}>
        <p>{selectedOption ? selectedOption.label : "Select an option"}</p>
        <p>
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
            <path
              d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z"
              fill="currentColor"
              fill-rule="evenodd"
              clip-rule="evenodd"
            ></path>
          </svg>
        </p>
      </button>
      {isOpen && (
        <div className={combined2}>
          {options.map((option) => (
            <li
              key={option.value}
              className={`hover:bg-[#6D5DE7]  hover:text-white text-sm p-[4px] m-[4px] flex items-center rounded py-[6px] pl-[9px] ${
                selectedOption?.label == option.label
                  ? "bg-[#6D5DE7] text-white hover:bg-[#6d5de7e2]"
                  : "text-black"
              }`}
              onClick={() => {
                selectOption(option);
                if (onValueChange) {
                  onValueChange(option);
                }
              }}
            >
              {option.label}
            </li>
          ))}
        </div>
      )}
    </div>
  );
};

