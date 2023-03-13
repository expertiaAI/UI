import React from "react";
import * as Tooltip from "@radix-ui/react-tooltip";
import { twMerge } from "tailwind-merge";

export const ToolTip = ({ children, className, text, ...rest }) => {
  const combined = twMerge(
    " text-black px-5 rounded p-2 z-50 bg-white text-sm w-36 border shadow",
    className
  );
  return (
    <Tooltip.Provider delayDuration='0' {...rest}>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <button className="">{children}</button>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content className={combined} sideOffset={5}>
            {text}
            <Tooltip.Arrow className="fill-gray-100" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}
