import React from "react";
import ReactDOM from "react-dom";

interface Props {
  text: string
}
export const Send: React.FC<Props> = ({ }) => {
  return (
    <h1> Hello from Send module</h1>
  )
}
