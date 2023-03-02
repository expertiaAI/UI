import React from "react";
import { twMerge } from "tailwind-merge";

export const Input= ({ children,className,...rest }) => {

  const combined = twMerge(
    "border-[1px] border-[#D9DEE2] rounded text-[14px] px-4 py-4 focus:border-[#6D5DE7] outline-none border-solid w-full text-sm",
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

