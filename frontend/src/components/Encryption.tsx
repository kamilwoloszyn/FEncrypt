import React,{useEffect,useRef,useContext,useState} from "react";
import styled from 'styled-components';
import { Row, Col } from '../styles/layout/layout';
import { OptionButton } from '../styles/buttons';
import {FormLabelBlock, FormInputBlock } from '../styles/forms';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { SetStep } from '../redux/action';
import { PasswordContext, PasswordState, ActionToDo, ActionToDoContext } from '../context/context';
import { Warning } from '../styles/modal';
import '../styles/scss/shared/text.scss';
import '../styles/scss/shared/modal.scss';
import '../styles/scss/shared/responsive.scss';
import '../styles/scss/shared/forms.scss';

const EncryptionWrapper = styled.div<EncryptionWrapperProps>`
display:${({ Show }) => Show ? 'block':'none'}
`

interface EncryptionWrapperProps {
Show: boolean
}

interface Props {
  Active: boolean;
  Show: boolean
}

export const Encryption: React.FC<Props> = (Props) => {
  const passwordRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  const globalPassword: PasswordState = useContext(PasswordContext);
  const globalAction: ActionToDo = useContext(ActionToDoContext);
  const sendLink: string = "/send";
  const [disabledButton, setDisabledButton] = useState<boolean>(true);
  
  const handleChangePassword = () => { 
    if (passwordRef.current && passwordRef.current.value.length > 5) {
      setDisabledButton(false);
      globalPassword.SetUsedPassword(passwordRef.current.value)
    } else { 
      setDisabledButton(true);
    }
  }

  useEffect(() => {
    dispatch(SetStep(1));
    globalAction.SetUsedContext("encrypt");
  })
  
  if (Props.Active) {
    return (
      <EncryptionWrapper Show={Props.Show} > 
           <Row>
            <div className="component-header">
              Encryption
            </div>
          </Row>
        <Col className="responsive-justify-center">
          <div className="modal-theme-default">
                <form>
                    <FormLabelBlock>
                      <label htmlFor="encryptpassword">Enter password you want to decrypt file later.</label>
                    </FormLabelBlock>
                    <FormInputBlock>
                        <input type="text" name="encryptpassword" className="form-input" onChange={handleChangePassword} placeholder="Enter your password here" ref={passwordRef} />
                    </FormInputBlock>
                    <Link to={disabledButton? '#': sendLink}>
                      <OptionButton type="button" disabled={disabledButton} customColor={"#fff"} hoverColor={"#38b13b"} borderColor={"#38b13b"}>Encrypt !</OptionButton>
                    </Link>
                </form>          
          </div>
        </Col>
        <Col className="responsive-justify-center">
        <div>
            <Warning show={disabledButton} className="modal-theme-error">
              For security reasons : 
               <ul>
                <li>Password should contain at least 6 characters</li>
               </ul>
            </Warning>
          </div>
        </Col>
        </EncryptionWrapper>
      )
  } else { 
    return (
      <div>
        Module Encryption Inactive
      </div>
    )
  }
} 

// TODO:
// - REMOVE HOTLINK

