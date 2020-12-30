import styled from 'styled-components';

interface WarningModalProps { 
  show: boolean;
}

export const Warning = styled.div<WarningModalProps>`
${({ show }) => show ? '':'display:none !important'}
`