import React from "react";
import ReactDOM from "react-dom";

interface Props {
  Active: boolean;
  Show: boolean;
}

export const Send: React.FC<Props> = (Props) => {
  if (Props.Active) {
    return (
    <h1> Hello from Send module</h1>
  )
  } else {
    return ( 
      <div>
        Module Inactive
      </div>
    )
  }
  
}
