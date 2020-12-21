import React from "react";
import ReactDOM from "react-dom";
import styled from 'styled-components';

const EncryptionWrapper = styled.div<EncryptionWrapperProps>`
display:${({ Show }) => Show ? 'block':'none'}
`
interface EncryptionWrapperProps {
Show: boolean
}

interface Props {
  Active: boolean;
  Show: boolean
}

export const Encryption: React.FC<Props> = (Props)=> {
  if (Props.Active) {
    return (
      <EncryptionWrapper Show={Props.Show} > 
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

