import '../styles/scss/forms.scss';
import React from "react";
import ReactDOM from "react-dom";
import styled from 'styled-components';
import { Row, Col } from '../styles/layout/layout';
import { OptionButton } from '../styles/buttons';
import { FormGroup, FormLabelBlock, FormInputBlock } from '../styles/forms'

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
          <Col>
            <h1> Encryption</h1>
          </Col>
         </Row>
        <Row>
          <FormGroup>
            <form>
              <FormLabelBlock>
                <label htmlFor="encryptpassword">Enter password you want to decrypt file later.</label>
              </FormLabelBlock>
              <FormInputBlock>
                <input type="text" name="encryptpassword" className="form-input" placeholder="Enter your password here" />
              </FormInputBlock>
                <OptionButton type="button" customColor={"#fff"} hoverColor={"#38b13b"} borderColor={"#38b13b"}>Encrypt !</OptionButton>
            </form>
            </FormGroup>
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

