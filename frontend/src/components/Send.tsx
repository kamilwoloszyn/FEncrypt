import React,{useEffect,useContext} from "react";
import styled from 'styled-components'
import socketIOClient  from "socket.io-client";
import {useDispatch} from 'react-redux'
import { SetStep } from '../redux/action';
import { PasswordContext, PasswordState, ActionToDoContext, ActionToDo, FileUploadContext } from '../context/context';
import { Col } from '../styles/layout/layout';
import '../styles/scss/shared/modal.scss';
import { Socket } from "socket.io-client";

interface Props {
  Active: boolean;
  Show: boolean;
}

interface SendWrapperProps { 
  Show: boolean;
}
const EncryptPoint = "http://localhost:3000/encrypt"
const DecryptPoint = "http://localhost:3000/decrypt"
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
    })
  
  useEffect(() => {
    if (globalPassword && globalAction && globalFile) {
      switch (globalAction.usedContext) {
        case 'encrypt': {
          const socket = socketIOClient(EncryptPoint);
          socket.on("connection", (sock: SocketIOClient.Socket) =>{
            socket.emit('data-client', {
              password: globalPassword,
              file: globalFile,
            })
          })
         
        }
          case 'decrypt': { 
          const socket = socketIOClient(DecryptPoint);
          socket.emit('data-client', {
            password: globalPassword,
            file : globalFile
          })
        }
        default: {
          console.log("Operation not recognised")
          } 
        }
      }
        console.log(globalFile?.usedFile)
      })
  

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
