import React from "react";
import ReactDOM from "react-dom";
import styled from 'styled-components';

const EncryptionWrapper = styled.div<Props>`
display:${({ Show }) => Show ? 'block':'none'}
`

interface Props {
  Active: boolean;
  Show: boolean
}

export const Encryption: React.FC<Props> = (Props)=> {
  if (Props.Active) {
    return (
      <EncryptionWrapper > 
          <h1> Hello from Encryption module</h1>
        </EncryptionWrapper>
      )
  } else { 
    return (
      <div>
        Module Inactive
      </div>
    )
  }
 
} 

