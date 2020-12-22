import React from 'react';
import './App.css';
import styled from 'styled-components';
import { Banner } from './components/shared/Banner';
import { Progress } from './components/shared/Progress';
import { Uploader } from './components/Uploader';
import { Encryption } from './components/Encryption';
import { Decryption } from './components/Decryption';
import { Send } from './components/Send';
import { Col, Row } from './styles/layout/layout';
import { OptionButton} from './styles/buttons';

interface ContainerOption { 
  DisplayGrid: boolean;
  HasMargin: boolean;
  DefaultMargin?: number;
}


const Container = styled.div<ContainerOption>`
display:${({DisplayGrid}) => DisplayGrid ? 'grid' : 'block'};
margin: ${({HasMargin,DefaultMargin}) => HasMargin ? DefaultMargin:'0'}px;
`

export const App: React.FC = (ContainerOption) => {
  return (
     <Container DisplayGrid={true} HasMargin={false}>
      <Row>
        <Col md={12}>
          <Banner ShowBanner={true} />
        </Col>
      </Row>
      <Row>
        <Row>
          <Col md={12}>
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
