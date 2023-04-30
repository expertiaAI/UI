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
            margin: 200px auto;
        }
        
        .load div{
            width: 10px;
            height: 10px;
            // background-color: rgb(11, 169, 213);
            background-color: #6D5DE7;
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

        <div class="load">
          <div class="one"></div>
          <div class="two"></div>
          <div class="three"></div>
        </div>
        <div className="text-white font-semibold "> Loading...</div>
      </>
    </Modal>
  );
};
