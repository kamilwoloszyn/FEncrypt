import React from "react";
import ReactDOM from "react-dom";
import styled from 'styled-components';

const EncryptionWrapper = styled.div<Props>`


`

interface Props {
  text: string 
}

export const Encryption: React.FC<Props> = ({})=> {
  return (
    <EncryptionWrapper> 
      <h1> Hello from Encryption module</h1>
    </EncryptionWrapper>
  )
} 

