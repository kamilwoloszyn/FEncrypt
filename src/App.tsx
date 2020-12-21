import React from 'react';
import './App.css';
import styled from 'styled-components';
import { Banner } from './components/shared/Banner';
import { Progress } from './components/shared/Progress';
import { Uploader } from './components/Uploader';
import { Encryption } from './components/Encryption';
import { Decryption } from './components/Decryption';
import { Send } from './components/Send';

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
      <div>
        <Banner ShowBanner={true}/>
      </div>
      <div>
      
      </div>
     </Container>

  );
}

export default App;
