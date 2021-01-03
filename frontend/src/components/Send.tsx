import React,{useEffect,useContext, useState} from "react";
import styled from 'styled-components'
import socketIOClient  from "socket.io-client";
import {useDispatch} from 'react-redux'
import { SetStep } from '../redux/action';
import { PasswordContext, PasswordState, ActionToDoContext, ActionToDo, FileUploadContext, IVContext,IvState, FileState } from '../context/context';
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
  const globalFile: FileState | undefined = useContext(FileUploadContext);
  const globalIV: IvState | undefined = useContext(IVContext);
  const [responseData, SetResponseData] = useState<{ statusCode: number, message: { str: string }, buffer: Buffer, iv?: string }  | undefined>(undefined);
  const socket = socketIOClient(EndPoint);
  useEffect(() => {
    socket.on('server-response', ({ statusCode, message, buffer, iv }: { statusCode: number, message: { str: string }, buffer: Buffer, iv?: string}) => {
      SetResponseData({statusCode, message,buffer,iv });
      })
    },[])

    useEffect(() => {
      dispatch(SetStep(2))
    },[])
  
  useEffect(() => {
    if (globalFile?.usedFile !== undefined && globalPassword.usedPassword && globalAction.usedContext && globalIV.usedIV !== undefined) {
      if (globalAction.usedContext === "decrypt" ) {
          socket.emit('data-client', {
            password: globalPassword.usedPassword,
            file: globalFile.usedFile,
            context: globalAction.usedContext,
            iv: globalIV.usedIV
          })
     
      } else { 
          socket.emit('data-client', {
            password: globalPassword.usedPassword,
            file: globalFile.usedFile,
            context: globalAction.usedContext
          })
      
      }
      
      
    } else { 
      console.log("Found empty object");
      // For debugging only
      console.log(globalAction);
      console.log(globalFile);
      console.log(globalPassword);
      console.log(globalIV.usedIV)
      }
      },[])
  

  if (Props.Active) {
    return (
      <SendWrapper Show={Props.Show}>
        <Col className="responsive-justify-center">
          <div className="modal-theme-default">
            Data received from server : 
             <table>
              <tbody>
                <tr>
                  <td>Status Code</td>
                  <td>{responseData?.statusCode}</td>
                </tr>
                <tr>
                  <td>Status text</td>
                  <td>{responseData?.message.str}</td>
                </tr>
                <tr>
                  <td>Buffer</td>
                  <td> [buffer]</td>
                </tr>
                <tr>
                  <td>IV</td>
                  <td>{responseData?.iv}</td>
                </tr>
              </tbody>
           
             </table>
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
