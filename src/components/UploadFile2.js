import React from "react";
import { twMerge } from "tailwind-merge";

export const Upload2 = ({ children, className, ...rest }) => {
  const combined = twMerge(
    `w-full h-full border border-dashed border-[#6D5DE7] text-center rounded-xl cursor-pointer `,
    className
  );
  return (
    <div className={combined}>
      <input
        type="file"
        className="opacity-0 h-full w-full cursor-pointer z-10"
        {...rest}
      />
      {children}
    </div>
  );
};
