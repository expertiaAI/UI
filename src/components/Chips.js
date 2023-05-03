import React, { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

//deletable  --chip with delete button--
export const Chips = ({
  children,
  className,
  small,
  deletable,
  avatar,
  ...rest
}) =>{
  let [del, setDel] = useState(true);
  // useEffect(() => console.log(deletable && del), [del]);
  const combined = twMerge(
    ` ${small?"text-xs px-1 py-1":"text-sm px-2 py-1.5"} border border-[#CDCDCD] text-[#2E2E2E] rounded flex items-center `,
    className
  );

  // const combined2 = twMerge(' bg-gray-400 p-0.5 rounded-full text-white cursor-pointer ',className_deletable)
  return (
    <div className="inline-block">
      {del ? (
        <div className={combined} {...rest}>
          {avatar && del ? (
            <div className="w-5 h-5">
              <img src={avatar} className="w-5 h-5 rounded-full " />
            </div>
          ) : (
            ""
          )}
          <span className="px-1.5">{children&&children}</span>
          {deletable && del ? (
            <div
              onClick={() => setDel(false)}
              // className={combined2}
            >

            </div>
          ) : (
            ""
          )}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
