import React from 'react';
import { StyledTitleBanner } from './TitleBanner.styled';
import { Title } from "../Typography/Title";
import { ContentWrapper } from "../ContentWrapper";


export const TitleBanner: React.FC = (props) => {
  const {children} = props
  return (
    <StyledTitleBanner>
      <ContentWrapper>
        <Title>{children}</Title>
      </ContentWrapper>
    </StyledTitleBanner>
  );
};
