import React from "react";
import * as ReactDOM from "react-dom";
import styled from 'styled-components';

interface Props { 
  Active: boolean;
  Show: boolean;
  Step: number;
}

interface ProgressWrapperProps {
  Show:boolean
}

const ProgressWrapper = styled.div<ProgressWrapperProps>`
display:${({ Show })=> Show ?'block':'none'}
`

export const Progress: React.FC<Props> = (Props) => {
  if (Props.Active) { 
    return (
      <ProgressWrapper Show={Props.Show}>
        <h1> Hello from Progress module</h1>
      </ProgressWrapper>
    
  )
  } else { 
    return (
      <h1> Module Progress inactive</h1>
    )
  }
}


export default Progress;