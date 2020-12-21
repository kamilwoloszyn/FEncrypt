import React from "react";
import ReactDOM from "react-dom";
import styled from 'styled-components'
import { isPropertySignature } from "typescript";

interface Props {
  Active: boolean;
  Show: boolean;
}

interface SendWrapperProps { 
  Show: boolean;
}

const SendWrapper = styled.div<SendWrapperProps>`
display:${({Show})=> Show? 'block':'none'}
`

export const Send: React.FC<Props> = (Props) => {
  if (Props.Active) {
    return (
      <SendWrapper Show={Props.Show}>
        <h1> Hello from Send module</h1>
      </SendWrapper>
  )
  } else {
    return ( 
      <div>
        Module Inactive
      </div>
    )
  }
  
}
