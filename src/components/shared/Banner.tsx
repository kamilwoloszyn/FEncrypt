import React from 'react';
import styled from 'styled-components';
import { Row, Col } from '../../styles/layout/layout'

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
      <Row>

      </Row>
      <Background ContainImage={false}> 
      Hello From Banner
      </Background>
     
    </BannerWrapper>
  )
}