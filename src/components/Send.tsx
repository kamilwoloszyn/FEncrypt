import React,{useEffect} from "react";
import styled from 'styled-components'
import {useDispatch} from 'react-redux'
import { SetStep } from '../redux/action';

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
  useEffect(() => {
    dispatch(SetStep(2))
  })
  if (Props.Active) {
    return (
      <SendWrapper Show={Props.Show}>
        <h1> Hello from Send module</h1>
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
