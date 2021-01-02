import React,{useEffect, useRef,useContext, useState} from "react";
import styled from "styled-components";
import { OptionButton } from '../styles/buttons';
import { FormLabelBlock, FormInputBlock } from '../styles/forms';
import { Link } from 'react-router-dom';
import { Col } from '../styles/layout/layout'; 
import { useDispatch } from 'react-redux';
import { SetStep } from '../redux/action';
import { PasswordContext, PasswordState, ActionToDo, ActionToDoContext,IVContext, IvState } from '../context/context';
import { Warning } from '../styles/modal';
import '../styles/scss/shared/modal.scss';
import '../styles/scss/shared/responsive.scss';
import '../styles/scss/shared/text.scss';
import '../styles/scss/shared/forms.scss';

const DecryptionWrapper = styled.div<DecryptionWrapperProps>`
${({Show})=> Show? '':'display:none'}
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
  const ivRef = useRef<HTMLInputElement>(null);
  const globalPassword: PasswordState = useContext(PasswordContext);
  const globalAction: ActionToDo = useContext(ActionToDoContext); 
  const globalIvContext: IvState = useContext(IVContext);
  const [buttonDisabled, SetButtonDisabled] = useState<boolean>(true);
  const sendLink = "/send";
  const handleChangePassword = () => { 
    if (passwordRef.current && passwordRef.current.value.length > 5) {
      globalPassword.SetUsedPassword(passwordRef.current.value)
      SetButtonDisabled(false);
    } else { 
      SetButtonDisabled(true);
    }
  }
  const handleChangeIV = () => {
    if (ivRef.current && ivRef.current.value.length > 10) {
      globalIvContext.SetUsedIV(ivRef.current.value)
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
         <Col className="responsive-justify-center responsive-block">
           <div className="modal-theme-default">
              <form>
             <FormLabelBlock>
                <label htmlFor="pass">Enter password used to encrypt file</label>
             </FormLabelBlock>
             <FormInputBlock>
                   <input type="password" placeholder="Enter password here" className="form-input" ref={passwordRef} onChange={handleChangePassword}/>
               </FormInputBlock>
               <FormLabelBlock>
                    <input type="text" placeholder="Enter obtained IV" className="form-input" ref={ivRef} onChange={handleChangeIV}></input>
               </FormLabelBlock>
               <FormInputBlock>
                  Enter obtained IV from server
               </FormInputBlock>
               <Link to={buttonDisabled? '#': sendLink}> <OptionButton disabled={buttonDisabled} type="button" customColor={"#fff"} hoverColor={"#e63c3c"} borderColor={"#e63c3c"}>Decrypt !</OptionButton> </Link>    
             </form>
           </div>
         </Col>
         <Col className="responsive-justify-center responsive-block">
           <Warning show={buttonDisabled} className="modal-theme-error"> 
            For security reasons : 
                  <ul>
                    <li>Password should contain at least 6 characters</li>
                  </ul>
            </Warning>
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

// TODO:
// - REMOVE HOTLINK


