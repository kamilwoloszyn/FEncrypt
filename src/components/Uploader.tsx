import React from "react";
import ReactDOM from "react-dom";
import styled from 'styled-components';
import { Row, Col } from '../styles/layout/layout';
import { OptionButton } from '../styles/buttons'

interface Props {
  Active: boolean;
  Show: boolean;
}

interface UploadWrapperProps {
  Show: boolean
}
  
const UploadWrapper = styled.div<UploadWrapperProps>`
  ${({ Show }) => Show ? '':'display:none'}
`

export const Uploader: React.FC<Props> = (Props) => {
  if (Props.Active) {
    return (
      <UploadWrapper Show={Props.Show}>
        <Row>
          <code> Welcome to File Encryptor! Select file and action</code>
        </Row>
        <Row>
          <input type="file" />
        </Row>
        <Row>
          <Col flex={1}>
              <h1>Encrypt or Decrypt ?</h1>
          </Col>
        </Row>
        <Row>
          <OptionButton type="button" customColor={"#fff"} hoverColor={"#38b13b"} borderColor={"#38b13b"}>Encrypt </OptionButton>
          <OptionButton type="button" customColor={"#fff"} hoverColor={"#e63c3c"} borderColor={"#e63c3c"}>Decrypt </OptionButton>
        </Row>
      </UploadWrapper>
    )
  } else {
    return (
      <div>
        Module inactive
      </div>
    )
  }
}

