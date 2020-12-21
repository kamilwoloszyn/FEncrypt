import React from 'react';
import styled from 'styled-components';

interface ColProps{
  md: number
}

const Row = styled.div`
width:100%;
`

const Col = styled.div<ColProps>`
width: ${({md}) => (md>0 && md < 12)? `${(md/12)*100}`: '100'}%
`

export { 
  Row,
  Col
}