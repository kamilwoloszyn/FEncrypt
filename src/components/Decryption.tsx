import '../styles/scss/forms.scss'
import { arch } from "os";
import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { OptionButton } from '../styles/buttons';
import { FormGroup, FormLabelBlock, FormInputBlock } from '../styles/forms';
import { Link } from 'react-router-dom';
import '../styles/scss/encrypt.scss';


const DecryptionWrapper = styled.div<DecryptionWrapperProps>`
${({Show})=> Show? 'display:block':''}
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
           <FormGroup>
             <FormLabelBlock>
                <label htmlFor="pass">Enter password used to encrypt file</label>
             </FormLabelBlock>
             <FormInputBlock>
                <input type="password" placeholder="Enter password here" className="form-input" />
              </FormInputBlock>
           </FormGroup>
        
      <Link to="/send"> <OptionButton type="button" customColor={"#fff"} hoverColor={"#e63c3c"} borderColor={"#e63c3c"}>Decrypt !</OptionButton> </Link>    
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




