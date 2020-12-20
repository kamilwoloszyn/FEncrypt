import React from "react";
import ReactDOM from "react-dom";
import styled from 'styled-components';

interface Props {
  Active: boolean;
  Show: boolean;
  Text:string
}
  
const UploadWrapper = styled.div<Props>`
  display: ${({ Show }) => Show ? 'block':'none'}
`

export const Uploader: React.FC<Props> = (Props) => {
  if (Props.Active) {
    return (
      <UploadWrapper Show={true}>
        <div>
          <h1> Select File to upload</h1>
        </div>
        <div>
          <input type="file"></input>
          <input type="button" >Next</input>
        </div>
      </UploadWrapper>
    )
  } else {
    return (
      <div>
        Module inactive
      </div>
    )
  }
}


