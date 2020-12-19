import React from "react";
import * as ReactDOM from "react-dom";

interface Props { 
  active:number
}

export const Progress: React.FC<Props> = ({ }) => {
  return (
    <h1> Hello from Progress module</h1>
  )
}


export default Progress;