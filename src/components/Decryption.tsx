import '../styles/scss/shared/forms.scss'
import React from "react";
import styled from "styled-components";
import { OptionButton } from '../styles/buttons';
import { FormGroup, FormLabelBlock, FormInputBlock } from '../styles/forms';
import { Link } from 'react-router-dom';
import '../styles/scss/encrypt.scss';
import '../styles/scss/shared/text.scss';
import { Col } from '../styles/layout/layout'; 
import '../styles/scss/shared/modal.scss';

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
         <div className="component-header">
           Decryption
         </div>
         <Col>
           <div className="modal-theme">
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
           </div>
           <div>
             addadads
           </div>
        </Col>
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




