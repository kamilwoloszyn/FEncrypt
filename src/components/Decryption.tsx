import { arch } from "os";
import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const DecryptionWrapper = styled.div<Props>`
display:${({Show})=> Show? 'block':'none'}
`
interface Props {
  Active: boolean;
  Show: boolean;
}


export const Decryption: React.FC<Props> = ( Props ) => {
  if (Props.Active) {
     return (
    <DecryptionWrapper Show={true}>
      <h1> Decryption</h1>
      <form>
        <input type="file" />
        <input type="password" />
        <input type="button">Decrypt !</input>
      </form>
    
    </DecryptionWrapper>
    
  )
  } else { 
    return (
      <div>
        Module inactive
      </div>
    )
  }
 
}




