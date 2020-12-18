import React from 'react';
import './App.css';

interface Props { 
  text: string
}

export const App: React.FC = ({ }) => {
   return (
    <div className="App">
      Hello world
    </div>
  );
}

export default App;
