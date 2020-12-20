import React from "react";
import * as ReactDOM from "react-dom";

interface Props { 
  Active:boolean
  Step :number
}

export const Progress: React.FC<Props> = (Props) => {
  return (
    <h1> Hello from Progress module</h1>
  )
}


export default Progress;