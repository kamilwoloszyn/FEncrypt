import React from 'react';
import styled from 'styled-components';
import { Row, Col } from '../../styles/layout/layout'
import '../../styles/scss/banner.scss'
import LogoImg from '../../images/FEncrypt_logo.png';

interface BackgroundInterface { 
  ContainImage: boolean;
  BackgroundHref?: string;
}

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

const Background = styled.div<BackgroundInterface>`

background-image: ${({ ContainImage, BackgroundHref }) => ContainImage ? `url(${BackgroundHref})`: '#ffff'}
`
export const Banner: React.FC<Props>  = (Props) => { 
  return ( 
    <BannerWrapper Show={Props.ShowBanner} ExtendedWidth={true}>
      <Row centered={true}>
        <img src={LogoImg} alt="logo" />
      </Row>
    </BannerWrapper>
  )
}