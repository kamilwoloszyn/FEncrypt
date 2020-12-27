import React from "react";
import ReactDOM from "react-dom";
import styled from 'styled-components';
import { Row, Col } from '../styles/layout/layout';
import { OptionButton } from '../styles/buttons';
import '../styles/scss/uploader.scss';
import '../styles/scss/shared/modal.scss'

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
      <UploadWrapper Show={Props.Show} className="uploader-wrapper">
        <Col className="">
        <Row className="modal-theme">
          <div>
            <input type="file" />
          </div>
          <div>
            Then select Encrypt or Decrypt operation
          </div>
          <Col>
            <OptionButton type="button" customColor={"#38b13b"} hoverColor={"#38b13b"} borderColor={"#38b13b"}>Encrypt </OptionButton>
            <OptionButton type="button" customColor={"#e63a2a"} hoverColor={"#e63c3c"} borderColor={"#e63c3c"}>Decrypt </OptionButton>
          </Col>

          </Row>
          <div>
            adadsd
          </div>
        </Col>
       
       
        
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


