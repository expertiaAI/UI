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
            {/* <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z" fill="#6D5DE7" fillRule="evenodd" clipRule="evenodd"></path></svg> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="#6D5DE7"
              viewBox="0 0 256 256"
            >
              <path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Zm-34.34,77.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z"></path>
            </svg>
          </Checkbox.Indicator>
        </Checkbox.Root>
      </form>
    </div>
  );
};
