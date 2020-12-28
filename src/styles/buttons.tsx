import styled from 'styled-components';

interface Props {
  customColor?: string;
  hoverColor?: string;
  borderColor?: string;
}

const OptionButton = styled.button<Props>`
padding:5px;
margin:0.3em;
width:6em;
&:hover{
  cursor:pointer;
}
background-color: ${({ customColor }) => customColor ? customColor : '#fff'};
&:hover { 
  background-color: ${({ hoverColor }) => hoverColor ? hoverColor: '#fff' }
}
border-radius:3px;
border:2px solid ${({ borderColor }) => borderColor ? borderColor : '#fff'};
transition: all ease-out .2s;
`

export { 
  OptionButton
} 