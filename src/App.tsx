import React from 'react';
import styled from 'styled-components';
import { Banner } from './components/shared/Banner';
import { Progress } from './components/shared/Progress';
import { Uploader } from './components/Uploader';
import { Encryption } from './components/Encryption';
import { Decryption } from './components/Decryption';
import { Send } from './components/Send';
import { Col, Row,Container } from './styles/layout/layout';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import './styles/scss/main.scss';

export const App: React.FC = (ContainerOption) => {
  return (

    <Container DisplayFlex={true} className="main-wrapper">
      <div className="main-bg"></div>
      <Row>
        <Col>
          <Banner ShowBanner={true} />
        </Col>
        <Col>
          <Progress Active={true} Show={true}/>
        </Col>
      </Row>
      <Row>
        <Router>
          <Route path="/" exact render={() => <Uploader Active={true} Show={true}/>} />
          <Route path="/encrypt" render={() => <Encryption Active={true} Show={true}/>} />
          <Route path="/decrypt" render={ ()=> <Decryption Active={true} Show={true} />}/>
          <Route path="/send" render={() => <Send Active={true} Show={true} />}/>
        </Router>
      </Row>
     </Container>
    
     

  );
}

export default App;
