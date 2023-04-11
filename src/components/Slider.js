import React,{useState} from "react";
import * as Slider from "@radix-ui/react-slider";
import { twMerge } from "tailwind-merge";

export const Slider1 = ({ children, className, value, ...rest }) => {
    let [trigger,setTrigger] = useState(false)
  const combined = twMerge(
    "relative flex items-center w-full rounded-2xl",
    className
  );
  return (
    <form>
      <Slider.Root
        className={combined}
        // value={rest.value}
        // defaultValue={[50]}
        max={100}
        step={1}
        aria-label="Volume"
        {...rest}
      >
        <Slider.Track className="SliderTrack bg-gray-100 relative flex-grow rounded-2xl h-[6px] cursor-pointer">
          <Slider.Range className="SliderRange bg-gray-100 absolute h-[100%] rounded-2xl cursor-pointer" />
        </Slider.Track>

        <Slider.Thumb onMouseEnter={()=>setTrigger(true)} onMouseLeave={()=>setTrigger(false)} className="SliderThumb block h-5 w-5 rounded-xl bg-[#6D5DE7] shadow-md hover:bg-[#574ab8] duration-200 cursor-pointer relative outline-none">
          {trigger?<div className="absolute bottom-5 outline-none bg-white shadow-md w-[45px] rounded h-[30px] flex justify-center items-center -translate-y-1 -translate-x-2.5">
            {value??value[0]}
          </div>:""}
        </Slider.Thumb>
      </Slider.Root>
    </form>
  );
};
