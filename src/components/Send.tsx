import React,{useEffect,useContext} from "react";
import styled from 'styled-components'
import {useDispatch} from 'react-redux'
import { SetStep } from '../redux/action';
import { PasswordContext, PasswordState,ActionToDoContext, ActionToDo } from '../context/context';

interface Props {
  Active: boolean;
  Show: boolean;
}

interface SendWrapperProps { 
  Show: boolean;
}

const SendWrapper = styled.div<SendWrapperProps>`
display:${({Show})=> Show? 'block':'none'}
`

export const Send: React.FC<Props> = (Props) => {
  const dispatch = useDispatch();
  const globalPassword: PasswordState = useContext(PasswordContext);
  const globalAction: ActionToDo = useContext(ActionToDoContext);

  useEffect(() => {
    dispatch(SetStep(2))
  })

  if (Props.Active) {
    return (
      <SendWrapper Show={Props.Show}>
        This data will be send to server : {globalPassword.usedPassword} {globalAction.usedContext}
      </SendWrapper>
  )
  } else {
    return ( 
      <div>
        Module Send Inactive
      </div>
    )
  }
  
}
