import React from "react";
import { twMerge } from "tailwind-merge";

export const Upload2 = ({ children, className, ...rest }) => {
  const combined = twMerge(
    `w-full h-36 border border-dashed border-[#6D5DE7] text-center rounded-xl cursor-pointer relative`,
    className
  );
  return (
    <div>
      <div className={combined}>
        <input type="file" className="hidden" {...rest} />
      </div>
    </div>
  );
};
