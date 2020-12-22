import React from 'react';
import styled from 'styled-components';

interface Props {
  customColor?: string;
  hoverColor?: string;
  borderColor?: string;
}

const OptionButton = styled.button<Props>`
padding:20px;
margin:1em;
width:15em;
&:hover{
  cursor:pointer;
}
background-color: ${({ customColor }) => customColor ? customColor : '#fff'};
&:hover { 
  background-color: ${({ hoverColor }) => hoverColor ? hoverColor: '#fff' }
}
border-radius:3px;
border:3px solid ${({ borderColor }) => borderColor ? borderColor : '#fff'};
transition: all ease-out .2s;
`

export { 
  OptionButton
} 