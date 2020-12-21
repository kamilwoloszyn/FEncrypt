import React from 'react';
import styled from 'styled-components';

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
display: ${({ Show }) => Show ? 'block' : 'none'};
${({ ExtendedWidth }) => ExtendedWidth ? 'width: 100%;' : ''}
`

const Background = styled.div<BackgroundInterface>`

background-image: ${({ ContainImage, BackgroundHref }) => ContainImage ? `url(${BackgroundHref})`: '#ffff'}
`
export const Banner: React.FC<Props>  = (Props) => { 
  return ( 
    <BannerWrapper Show={Props.ShowBanner} ExtendedWidth={true}>
      <Background ContainImage={false}> 
      Hello From Banner
      </Background>
     
    </BannerWrapper>
  )
}