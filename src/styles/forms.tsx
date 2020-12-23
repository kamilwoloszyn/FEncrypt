import React from 'react';
import styled from 'styled-components';

interface InputProps{ 
  size:  {
    width: string
    height: string
  }
  fontSize?: string
  fontFamily?: string
}

const FormGroup = styled.div`
flex-direction:column;
`
const FormLabelBlock = styled.div`
font-weight:200;
font-size:1.5em;
padding:1em;
`

const FormInputBlock = styled.div`
 padding:1em;
`

export {
  FormGroup,
  FormLabelBlock,
  FormInputBlock
}

