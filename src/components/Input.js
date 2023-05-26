import React from "react";
import { twMerge } from "tailwind-merge";

export const Input = ({ label, children, className, ...rest }) => {
  const combined = twMerge(
    `border-[1px] border-[#D9DEE2] ${
      label ? "rounded-r" : "rounded"
    } text-[14px] px-4 py-4 focus:border-[#6D5DE7] outline-none border-solid w-full text-sm`,
    className
  );

  console.log(label);

  return (
    <div className="flex items-center">
      {label ? (
        <section
          className={`bg-[#6D5DE7] text-white px-2 py-4 text-sm border-[1px] border-solid border-[#6D5DE7] ${
            label ? "rounded-l" : ""
          } `}
        >
          {label}
        </section>
      ) : (
        ""
      )}
      <input className={combined} placeholder="Placeholder here" {...rest} />
    </div>
  );
};