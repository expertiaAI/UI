import React from "react";
import { twMerge } from "tailwind-merge";

export const Input= ({ children,className,...rest }) => {

  const combined = twMerge(
    "border-[1px] border-[#D9DEE2] rounded-lg text-[14px] p-2 focus:border-[#6D5DE7] outline-none border-solid w-full text-[14px]",
    className
  );

  return (
    <div >
        <input
          className={combined}
          placeholder="Placeholder here"
          {...rest}
        />
    </div>
  );
}

