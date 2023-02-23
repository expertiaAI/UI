import React from "react";
import * as RadioGroup from "@radix-ui/react-radio-group";
import { twMerge } from "tailwind-merge";

export const Radio = ({ children, color, className, ...rest }) => {
  const combined = twMerge(" flex flex-col gap-2.5 w-full", className);
  return (
    <form className="w-full ">
      <RadioGroup.Root
        className={combined}
        defaultValue="default"
        aria-label="View density"
        {...rest}
      >
        {children.map((e, i) => (
          <div key={i} className="flex items-center">
            <RadioGroup.Item
              className={`relative  w-[20px] h-[20px] bg-white rounded-full border-solid border-[2px] border-gray-300`}
              value={e}
              id={i}
            >
              <RadioGroup.Indicator
                className={`absolute left-[3px] top-[3px] w-[10px] h-[10px] rounded-2xl ${
                  color ? `bg-${color}` : "bg-[#6D5DE7]"
                }`}
              />
              <RadioGroup.Indicator
                className={`absolute  -left-[12.5%] -top-[12.5%] w-[20px] h-[20px] bg-transparent ${
                  color
                    ? `text-${color} border-${color}`
                    : "text-[#6D5DE7] border-[#6D5DE7]"
                } text-[#6D5DE7] rounded-full border-solid border-[2px]  border-[#6D5DE7]`}
              />
            </RadioGroup.Item>
            <label className="Label pl-3" htmlFor={i}>
              {e}
            </label>
          </div>
        ))}
      </RadioGroup.Root>
    </form>
  );
};
