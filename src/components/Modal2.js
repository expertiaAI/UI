import React, { useState } from "react";
import { twMerge } from "tailwind-merge";

export const Modal = ({
  children,
  text,
  isOpen,
  setIsOpen,
  className,
  outSideClickDisabled,
  containerHeight,
  ...rest
}) => {
  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    if (!outSideClickDisabled) {
      setIsOpen(false);
    }
  };
  let comb = twMerge("",className)

  return (
    <>
      <style>{`
          @keyframes zoomIn {
              from {
                opacity: 0;
                transform: scale3d(0.6, 0.6, 0.6);
              }
            
              50% {
                opacity: 1;
              }
            }

            @keyframes fadeIn {
                from {opacity: 0}
                to {opacity: 0.75}
               }
            
            .scrollbar-hidden::-webkit-scrollbar {
                display: none;
            }


      `}</style>
      {/* <button className={comb} onClick={handleOpen}>{text} </button> */}
      {isOpen && (
        <div className="fixed inset-0 w-[100vw] h-[100vh] z-30 flex justify-center items-center overflow-hidden ">
          <div
            className="fixed inset-0 transition-opacity w-full h-full "
            onClick={handleClose}
          >
            <div
              className="absolute inset-0 bg-gray-600 opacity-75"
              style={{ animation: " fadeIn 0.1s linear" }}
            ></div>
          </div>
          <div
            className={` inset-0  overflow-y-scroll transform  mx-5 ${containerHeight?containerHeight:"max-h-[90vh]"}  ease-out scrollbar-hidden`}
            style={{
              animation: "zoomIn 0.1s ",
            }}
          >
            {children}
          </div>
        </div>
      )}
    </>
  );
};
export default Modal;
