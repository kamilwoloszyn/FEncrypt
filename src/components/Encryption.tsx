import React from "react";
import ReactDOM from "react-dom";
import styled from 'styled-components';
import { Row, Col } from '../styles/layout/layout';
import { OptionButton } from '../styles/buttons';

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
        <Row>
          <Col flex={1}>
            <h1> Encryption</h1>
          </Col>
         </Row>
        <Row>
        <form>
            <input type="password" placeholder="Enter your password here" />
          <OptionButton type="button" customColor={"#fff"} hoverColor={"#38b13b"} borderColor={"#38b13b"}>Encrypt !</OptionButton>
        </form>
        </Row>
        
     
        </EncryptionWrapper>
      )
  } else { 
    return (
      <div>
        Module Encryption Inactive
      </div>
    )
  }
 
} 

