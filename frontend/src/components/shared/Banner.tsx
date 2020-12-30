import React from 'react';
import styled from 'styled-components';
import { Row } from '../../styles/layout/layout';
import '../../styles/scss/shared/text.scss';
import '../../styles/scss/shared/responsive.scss';

interface BannerWrapperProps { 
  Show: boolean; 
  ExtendedWidth: boolean;
}

interface Props { 
  ShowBanner: boolean 
}

const BannerWrapper = styled.div<BannerWrapperProps>`
${({ Show }) => Show ? 'display: block;' : ''}
${({ ExtendedWidth }) => ExtendedWidth ? 'width: 100%;' : ''}
`
export const Banner: React.FC<Props>  = (Props) => { 
  return ( 
    <BannerWrapper Show={Props.ShowBanner} ExtendedWidth={true} className="responsive-block">
      <Row className="component-header">
       <h1>FEncrypt &amp; Decrypt</h1> 
      </Row>
    </BannerWrapper>
  )
}