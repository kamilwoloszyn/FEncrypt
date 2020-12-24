import React from "react";
import * as ReactDOM from "react-dom";
import styled from 'styled-components';
import '../../styles/scss/progress.scss'
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
        <div className="steps-group">
          <span className="step active">1</span>
          <span className="step">2</span>
          <span className="step">3</span>
        </div>
      </ProgressWrapper>
    
  )
  } else { 
    return (
      <h1> Module Progress inactive</h1>
    )
  }
}


export default Progress;