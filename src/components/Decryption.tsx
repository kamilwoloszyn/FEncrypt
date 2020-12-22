import { arch } from "os";
import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const DecryptionWrapper = styled.div<DecryptionWrapperProps>`
display:${({Show})=> Show? 'block':'none'}
`
interface DecryptionWrapperProps {
  Show: boolean
}

interface Props {
  Active: boolean;
  Show: boolean;
}


export const Decryption: React.FC<Props> = ( Props ) => {
  if (Props.Active) {
     return (
       <DecryptionWrapper Show={Props.Show}>
         <div>
           <h1> Decryption</h1>
         </div>
      
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
        Module Decryption inactive
      </div>
    )
  }
 
}




