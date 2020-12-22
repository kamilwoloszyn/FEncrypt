import React from 'react';
import styled from 'styled-components';
import { Banner } from './components/shared/Banner';
import { Progress } from './components/shared/Progress';
import { Uploader } from './components/Uploader';
import { Encryption } from './components/Encryption';
import { Decryption } from './components/Decryption';
import { Send } from './components/Send';
import { Col, Row,Container } from './styles/layout/layout';
import { BrowserRouter as Router, Link, Route} from 'react-router-dom';

export const App: React.FC = (ContainerOption) => {
  return (
   

    
      <Container DisplayFlex={true} HasMargin={true} DefaultMargin={0}>
      <Row>
        <Col flex={1}>
          <Banner ShowBanner={true} />
        </Col>
      </Row>
      <Row>
        <Router>
            <Route path="/" exact component={Uploader} />
            <Route path="/encrypt" compoment={Encryption} />
            <Route path="/decrypt" component={Decryption} />
            <Route path="/send" component={Send} />
          </Router>
      </Row>
     </Container>
    
     

  );
}

export default App;
