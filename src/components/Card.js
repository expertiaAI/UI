import React from "react";
import { twMerge } from "tailwind-merge";

export const Cards = ({ children, className, ...rest }) => {
  const combined = twMerge("p-5 rounded-md shadow-[0px_5px_18px_0px_rgba(100,100,111,0.18)] border-blue-300", className);

  return (
    <div className={combined} {...rest}>
      {children}
    </div>
  );
};
