import React,{useEffect, useRef,useContext, useState} from "react";
import styled from "styled-components";
import { OptionButton } from '../styles/buttons';
import { FormLabelBlock, FormInputBlock } from '../styles/forms';
import { Link } from 'react-router-dom';
import { Row } from '../styles/layout/layout'; 
import { useDispatch } from 'react-redux';
import { SetStep } from '../redux/action';
import { PasswordContext, PasswordState, ActionToDo, ActionToDoContext } from '../context/context';
import { Warning } from '../styles/modal';
import '../styles/scss/shared/modal.scss';
import '../styles/scss/shared/responsive.scss';
import '../styles/scss/encrypt.scss';
import '../styles/scss/shared/text.scss';
import '../styles/scss/shared/forms.scss';

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

export const Decryption: React.FC<Props> = (Props) => {
  const dispatch = useDispatch();
  const passwordRef = useRef<HTMLInputElement>(null);
  const globalPassword: PasswordState = useContext(PasswordContext);
  const globalAction: ActionToDo = useContext(ActionToDoContext); 
  const [globalButtonState,setGlobalButtonState] = useState<boolean>(true);
  const handleChangePassword = () => { 
    if (passwordRef.current && passwordRef.current.value.length > 6) {
      globalPassword.SetUsedPassword(passwordRef.current.value)
    } else { 
      setGlobalButtonState(true);
    }
  }
  useEffect(() => {
    dispatch(SetStep(1)); 
    globalAction.SetUsedContext("decrypt");
  })

  if (Props.Active) {
     return (
       <DecryptionWrapper Show={Props.Show}>
         <div className="component-header">
           Decryption
         </div>
         <Row>
           <div className="modal-theme centered">
              <form>
             <FormLabelBlock>
                <label htmlFor="pass">Enter password used to encrypt file</label>
             </FormLabelBlock>
             <FormInputBlock>
                   <input type="password" placeholder="Enter password here" className="form-input" ref={passwordRef} onChange={handleChangePassword}/>
              </FormInputBlock>
               <Link to="/send"> <OptionButton disabled={globalButtonState} type="button" customColor={"#fff"} hoverColor={"#e63c3c"} borderColor={"#e63c3c"}>Decrypt !</OptionButton> </Link>    
             </form>
           </div>
         </Row>
          <Warning show={globalButtonState}> 
          For security reasons : 
                <ul>
                  <li>Password should contain at least 6 characters</li>
                </ul>
          </Warning>
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

// TODO:
// - ADD VALIDATION
// - REMOVE HOTLINK


