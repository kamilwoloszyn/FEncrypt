import React from 'react';
import styled from 'styled-components';

interface BackgroundOption { 
  ExtendedWidth: boolean;
  ContainImage: boolean;
  BackgroundHref: string;
}

interface WrapperOption { 
  Show: boolean; 
}

interface Props { 
  ShowBanner: boolean 
}

const BannerWrapper = styled.div<WrapperOption>`
display: ${({Show}) => Show ? 'block': 'none'};
`

const Background = styled.div<BackgroundOption>`
${({ ExtendedWidth }) => ExtendedWidth ? 'width: 100%;' : ''}
background-image: ${({ ContainImage, BackgroundHref }) => ContainImage ? `url(${BackgroundHref})`: '#ffff'}
`
export const Banner: React.FC<Props>  = (Props) => { 
  return ( 
    <BannerWrapper Show={Props.ShowBanner}>
      Hello From Banner
    </BannerWrapper>
  )
}