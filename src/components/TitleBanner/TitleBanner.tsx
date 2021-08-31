import React from 'react';
import { StyledTitleBanner } from './TitleBanner.styled';


export const TitleBanner: React.FC = (props) => {
  const {children} = props
  return (
    <StyledTitleBanner>
      {children}
    </StyledTitleBanner>
  );
};
