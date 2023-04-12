import React from "react";
import { BsPlus } from "react-icons/bs";
import { BsCheck2 } from "react-icons/bs";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

export const Selector2 = ({
  children,
  className,
  noIcon,
  value,
  ...rest
}) => {
  const combined = twMerge(
    "text-sm flex justify-start items-center p-2 pl-3 border-[1px] duration-200 rounded cursor-pointer",
    !value
      ? "border-gray-300 text-[#2B2939] bg-white "
      : "border-[#6D5DE7] text-[#6D5DE7] bg-[#F4F2FF]",
    className
  );
  return (
    <div
      className={combined}
      {...rest}
    >
      {noIcon ? (
        ""
      ) : (
        <div className="pr-3">
          {!value ? <BsPlus className="scale-125" /> : <BsCheck2 />}
        </div>
      )}
      <div>{children}</div>
    </div>
  );
};
