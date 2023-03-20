import React from "react";
import * as Switch from "@radix-ui/react-switch";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

export const Switch1 = ({
  className,
  switchColor,
  defaultChecked,
  ...rest
}) => {
  let [block, setBlock] = useState(defaultChecked);

  const combined = twMerge(
    "w-[36px] h-[20px] rounded-3xl",
    `${
      block
        ? `${switchColor ? `bg-${switchColor}` : "bg-[#6D5DE7]"}`
        : "bg-gray-200"
    }`,
    className
  );
  return (
    <div onClick={() => setBlock((e) => !e)} className="flex items-center">
      <Switch.Root className={combined} {...rest}>
        <Switch.Thumb
          className={`w-[16px] h-[16px] rounded-3xl bg-white block  ${
            block ? "translate-x-[18px]" : "translate-x-[2px]"
          } duration-200`}
        />
      </Switch.Root>
    </div>
  );
};
