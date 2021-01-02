import React,{useState} from 'react';
import { Banner } from './components/shared/Banner';
import { Progress } from './components/shared/Progress';
import { Uploader } from './components/Uploader';
import { Encryption } from './components/Encryption';
import { Decryption } from './components/Decryption';
import { Send } from './components/Send';
import { Col, Row,Container } from './styles/layout/layout';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { PasswordContext, ActionToDoContext, FileUploadContext, IVContext, IvState } from './context/context';

export const App: React.FC = (ContainerOption) => {
  const [usedPassword, SetUsedPassword] = useState<string>("");
  const [usedContext, SetUsedContext] = useState<string>("");
  const [usedIV, SetUsedIV] = useState<string>("");
  const [usedFile, SetUsedFile] = useState<File | undefined>(undefined);
  
  return (
    <Container DisplayFlex={true}>
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
          <PasswordContext.Provider value={{ usedPassword, SetUsedPassword }}>
            <ActionToDoContext.Provider value={{ usedContext, SetUsedContext }}>
              <FileUploadContext.Provider value={{ usedFile, SetUsedFile }}>
                <IVContext.Provider value={{usedIV,SetUsedIV}}>
                  <Route path="/" exact render={() => <Uploader Active={true} Show={true}/>} />
                  <Route path="/encrypt" render={() => <Encryption Active={true} Show={true}/>} />
                  <Route path="/decrypt" render={ ()=> <Decryption Active={true} Show={true} />}/>
                  <Route path="/send" render={() => <Send Active={true} Show={true} />}/>
                </IVContext.Provider>
                
              </FileUploadContext.Provider>
            </ActionToDoContext.Provider>
          </PasswordContext.Provider>       
        </Router>
      </Row>
     </Container>
  );
}

export default App;
