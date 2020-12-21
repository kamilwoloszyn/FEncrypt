import React from "react";
import * as ReactDOM from "react-dom";
import styled from 'styled-components';

interface Props { 
  Active: boolean;
  Show: boolean;
  Step: number;
}

const ProgressWrapper = styled.div<Props>`
display:${({ Show })=> Show ?'block':'none'}
`

export const Progress: React.FC<Props> = (Props) => {
  if (Props.Active) { 
    return (
    <h1> Hello from Progress module</h1>
  )
  } else { 
    return (
      <h1> Module inactive</h1>
    )
  }
  
}


export default Progress;