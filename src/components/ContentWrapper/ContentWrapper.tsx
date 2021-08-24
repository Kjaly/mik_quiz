import React from 'react';
import { StyledContentWrapper } from './ComponentWrapper.styled';

export const ContentWrapper: React.FC = (props) => {
  const {children} = props
  return (
    <StyledContentWrapper>
      {children}
    </StyledContentWrapper>
  );
};
