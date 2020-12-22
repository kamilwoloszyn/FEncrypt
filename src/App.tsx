import React from 'react';
import styled from 'styled-components';
import { Banner } from './components/shared/Banner';
import { Progress } from './components/shared/Progress';
import { Uploader } from './components/Uploader';
import { Encryption } from './components/Encryption';
import { Decryption } from './components/Decryption';
import { Send } from './components/Send';
import { Col, Row,Container } from './styles/layout/layout';
import { OptionButton} from './styles/buttons';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export const App: React.FC = (ContainerOption) => {
  return (
     <Container DisplayFlex={true} HasMargin={true} DefaultMargin={0}>
      <Row>
        <Col flex={1}>
          <Banner ShowBanner={true} />
        </Col>
      </Row>
      <Row>
        <Row>
          <Col flex={1}>
            <h1>Encrypt or Decrypt ?</h1>
          </Col>
        </Row>
        <Row>
            <OptionButton type="button" customColor={"#fff"} hoverColor={"#38b13b"} borderColor={"#38b13b"}>Encrypt </OptionButton>
            <OptionButton type="button" customColor={"#fff"} hoverColor={"#e63c3c"} borderColor={"#e63c3c"}>Decrypt </OptionButton>
        </Row>
        
      </Row>
     </Container>

  );
}

export default App;
