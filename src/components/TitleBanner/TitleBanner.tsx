import React from 'react';
import { StyledDecorativeLines, StyledTitleBanner, StyledImgBackground } from './TitleBanner.styled';
import { Title } from '../Typography/Title';
import { ContentWrapper } from '../ContentWrapper';
import { DecorativeLines } from '../DecorativeLines';
import { theme } from '../../theme';

export interface ITitleBannerProps {
  img?: string;

}

export const TitleBanner: React.FC<ITitleBannerProps> = (props) => {
  const {children, img} = props
  return (
    <StyledTitleBanner>
      <ContentWrapper>
        <Title>{children}</Title>
      </ContentWrapper>
      <StyledDecorativeLines>
        <DecorativeLines color={theme.color.yellow}/>
      </StyledDecorativeLines>
      {img &&
      <StyledImgBackground>
        <img src={img} alt=""/>
      </StyledImgBackground>
      }
    </StyledTitleBanner>
  );
};
