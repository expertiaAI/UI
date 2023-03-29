import React from "react";
import * as Switch from "@radix-ui/react-switch";

export const Switch1 = ({...rest}) => {
  return (
    <div className=" ">
      <form>
        <div
          className="flex items-center"
          style={{ display: "flex", alignItems: "center" }}
        >
          <Switch.Root
            className="w-[36px] h-[20px] bg-gray-300 rounded-full relative  border-[#6D5DE7]  data-[state=checked]:bg-[#6D5DE7] outline-none hover:cursor-pointer"
            id="airplane-mode"
            style={{ "-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)" }}
            {...rest}
          >
            <Switch.Thumb className="block w-[16px] h-[16px]  border-[#6D5DE7] bg-white rounded-full  transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[18px]" />
          </Switch.Root>
        </div>
      </form>
    </div>
  );
};
