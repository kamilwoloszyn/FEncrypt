import styled from 'styled-components';

interface ContainerOption { 
  DisplayFlex: boolean;
}


const Container = styled.div<ContainerOption>`
${({DisplayFlex}) => DisplayFlex ? 'display:flex;flex-direction:column;' : ''}

`

const Row = styled.div`
display:flex;
flex-direction:column;

`

const Col = styled.div`
display:flex;
flex-direction:row;
`

export { 
  Row,
  Col,
  Container
}