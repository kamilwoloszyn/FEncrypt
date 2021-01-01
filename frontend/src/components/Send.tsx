import React,{useEffect,useContext} from "react";
import styled from 'styled-components'
import socketIOClient  from "socket.io-client";
import {useDispatch} from 'react-redux'
import { SetStep } from '../redux/action';
import { PasswordContext, PasswordState, ActionToDoContext, ActionToDo, FileUploadContext } from '../context/context';
import { Col } from '../styles/layout/layout';
import '../styles/scss/shared/modal.scss';

interface Props {
  Active: boolean;
  Show: boolean;
}

interface SendWrapperProps { 
  Show: boolean;
}
const EndPoint = "http://localhost:3001"
const SendWrapper = styled.div<SendWrapperProps>`
display:${({Show})=> Show? 'block':'none'}
`

export const Send: React.FC<Props> = (Props) => {
  const dispatch = useDispatch();
  const globalPassword: PasswordState = useContext(PasswordContext);
  const globalAction: ActionToDo = useContext(ActionToDoContext);
  const globalFile  = useContext(FileUploadContext);

    useEffect(() => {
      dispatch(SetStep(2))
    },[dispatch])
  
  useEffect(() => {
    if (globalFile?.usedFile !== undefined && globalPassword.usedPassword && globalAction.usedContext) {
      console.log("Data should be emitted! ");
      switch (globalAction.usedContext) {
        case "encrypt": {
          const socket = socketIOClient(EndPoint);
          socket.on('connection', (sock: SocketIOClient.Socket) => {
            
            sock.emit('data-client', {
              password: globalPassword.usedPassword,
              file: globalFile.usedFile,
            })
          })
        }
          break;
        case "decrypt": {
          const socket = socketIOClient(EndPoint);
          socket.emit('data-client', {
            password: globalPassword,
            file: globalFile
          })
        }
          break;
        default: {
          console.log("Operation not recognised")
          console.log(globalAction);
          } 
        }
    } else { 
      console.log("Found empty object");
      console.log(globalAction);
      console.log(globalFile);
      console.log(globalPassword);
      }
      },[globalAction,globalFile,globalPassword])
  

  if (Props.Active) {
    return (
      <SendWrapper Show={Props.Show}>
        <Col className="responsive-justify-center">
          <div className="modal-theme-default">
            This data will be sent to server : <b> {globalPassword.usedPassword} {globalAction.usedContext}</b>
          </div>
        </Col>
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

//TODO:
// - REMOVE HOTLINKS
