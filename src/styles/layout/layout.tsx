import React from 'react';
import styled from 'styled-components';

interface ColProps{
  flex: number
}

interface ContainerOption { 
  DisplayFlex: boolean;
  HasMargin: boolean;
  DefaultMargin?: number;
}


const Container = styled.div<ContainerOption>`
${({DisplayFlex}) => DisplayFlex ? 'display:flex;' : ''}
margin: ${({ HasMargin, DefaultMargin }) => `${HasMargin}px` ? DefaultMargin : 'auto'};
${({ DisplayFlex }) => DisplayFlex ? 'flex-wrap:wrap;': ''}
`

const Row = styled.div`
width:100%;
flex-direction:column;
`

const Col = styled.div<ColProps>`
flex-direction:row;
${({flex})=> flex? `flex:${flex};` : ''}
`

export { 
  Row,
  Col,
  Container
}