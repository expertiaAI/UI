import React from "react";
import Select from "react-select";


const colourStyles = {
  control: styles => ({ ...styles,borderRadius: "4px" }),
  option:(styles,{isSelected,isFocused})=>{
    return{
      paddingLeft: '10px',
      paddingTop: '4px',
      paddingBottom: '4px',
      marginLeft: '8px',
      marginRight: '8px',
      borderRadius:"4px",
      marginTop:"4px",
      marginBottom:"4px",
      backgroundColor: isSelected ? "#6D5DE7"
      : isFocused ? "#6D5DE7" :"#FFF",
      color : isSelected ? "#FFF" :
      isFocused ? "#FFF":"",
      cursor: "pointer"
    }
  }
};

export const DropDown1 = ({ options,...rest }) => (
  <Select
    styles={colourStyles}
    options={options}
    {...rest}
  />
);
