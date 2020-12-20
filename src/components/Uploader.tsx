import React from "react";
import ReactDOM from "react-dom";
import styled from 'styled-components';

interface Props {
  text:string
}
  
const UploadWrapper = styled.div<Props>`
  
`

export const Uploader: React.FC<Props> = ({}) => {
  return (
    <UploadWrapper>
      <div>
        <h1> Select File to upload</h1>
      </div>
      <div>
        <input type="file"></input>
        <input type="button" >Next</input>
      </div>

    </UploadWrapper>
    

  )
} 

