import React from "react";
import { twMerge } from "tailwind-merge";

export const Upload2 = ({ children, className, ...rest }) => {
  const combined = twMerge(
    `w-full h-full border border-dashed border-[#6D5DE7] text-center rounded-xl cursor-pointer relative flex item-center`,
    className
  );
  return (
    <div className="w-full h-full py-4">
      <div className={combined}>
        <input type="file" className="opacity-0 w-full h-full cursor-pointer z-10" {...rest} />
      <label>
        {children}
      </label>
      </div>
    </div>
  );
};
