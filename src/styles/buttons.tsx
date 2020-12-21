import React from 'react';
import styled from 'styled-components';

interface Props {
  customColor: string;
  hoverColor: string;
}

const OptionButton = styled.button<Props>`
padding:20px;
width:15em;
&:hover{
  cursor:pointer;
}
border:none;
background-color: ${({ customColor }) => customColor ? customColor : '#fff'};
&:hover { 
  background-color: ${({ hoverColor }) => hoverColor ? hoverColor: '#fff' }
}
`

export { 
  OptionButton
} 