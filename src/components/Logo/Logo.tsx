import React from 'react';
import { StyledSubtitle, StyledTitle } from './Logo.styled';
import { StyledLogo } from './Logo.styled';

export const Logo: React.FC = () => {
  return (
    <StyledLogo>
      <StyledTitle>
        наш город
      </StyledTitle>
      <StyledSubtitle>
        общественная организация
      </StyledSubtitle>
    </StyledLogo>
  );
};
