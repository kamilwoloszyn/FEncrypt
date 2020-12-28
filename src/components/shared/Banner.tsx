import React from 'react';
import styled from 'styled-components';
import { Row } from '../../styles/layout/layout'
import '../../styles/scss/banner.scss'
import LogoImg from '../../images/FEncrypt_logo.png';


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
    <BannerWrapper Show={Props.ShowBanner} ExtendedWidth={true}>
      <Row>
        <img src={LogoImg} alt="logo" />
      </Row>
    </BannerWrapper>
  )
}