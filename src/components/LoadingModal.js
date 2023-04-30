import React from "react";
import { Modal } from "./Modal2";

export const LoadingModal = ({ fetching, setFetching }) => {
  return (
    <Modal
      isOpen={fetching}
      setIsOpen={setFetching}
      outSideClickDisabled
      //modal for loading screen
    >
      <>
        <style>
          {`
         
         *{
            box-sizing: border-box;
            margin: 0;
        }
        
        
        body{
            font-family: Arial, Helvetica, sans-serif;
            // background-color: #333;
        
        }
        
        .load{
            display: flex;
            justify-content: center;
            // margin: 20px auto;
        }
        
        .load div{
            width: 15px;
            height: 15px;
            background-color: rgb(11, 169, 213);
            border-radius: 50%;
            margin: 0 5px;
            animation-name: up-and-down;
            animation-duration: 0.8s;
            animation-iteration-count: infinite;
            animation-direction: alternate;
        }
        
        .load .two{
            animation-delay: 0.3s;
        }
        
        .load .three{
            animation-delay: 0.6s;
        }
        
        @keyframes up-and-down {
          
            to{
                opacity: 0.2;
                transform: translateY(-20px);
                
            }
        }
          
          `}
        </style>

        <div className="flex flex-col justify-center items-center  p-8 px-12 rounded-md bg-transparent relative  w-[30vw] h-[30vw] ">
          <div class="load">
            <div class="one"></div>
            <div class="two"></div>
            <div class="three"></div>
          </div>
          <span className="text-xl text-white font-semibold text-center translate-y-[50px]">
            {" "}
            Loading...
          </span>
        </div>
      </>
    </Modal>
  );
};
