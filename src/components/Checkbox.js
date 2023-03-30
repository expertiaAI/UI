import React from "react";
import * as Checkbox from "@radix-ui/react-checkbox";
import { twMerge } from "tailwind-merge";


export const CheckBox = ({ className, ...rest }) => {
  const combined = twMerge("flex justify-center items-center w-4 h-4 rounded-[2px] border border-[#6D5DE7]",className)
  return (
    <div className="">
      <form>
        <Checkbox.Root
          className={combined}
          {...rest}
        >
          <Checkbox.Indicator>
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="#6D5DE7" viewBox="0 0 256 256"><path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z"></path></svg>
          </Checkbox.Indicator>
        </Checkbox.Root>
      </form>
    </div>
  );
};
