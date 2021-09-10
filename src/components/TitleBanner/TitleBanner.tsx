import React from 'react';
import { StyledDecorativeLines, StyledTitleBanner } from './TitleBanner.styled';
import { Title } from '../Typography/Title';
import { ContentWrapper } from '../ContentWrapper';
import { DecorativeLines } from '../DecorativeLines';
import { theme } from '../../theme';


export const TitleBanner: React.FC = (props) => {
  const {children} = props
  return (
    <StyledTitleBanner>
      <ContentWrapper>
        <Title>{children}</Title>
      </ContentWrapper>
      <StyledDecorativeLines>
        <DecorativeLines color={theme.color.yellow}/>
      </StyledDecorativeLines>
    </StyledTitleBanner>
  );
};
