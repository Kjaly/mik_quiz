import React from 'react';
import { StyledContentWrapper } from './ComponentWrapper.styled';


export interface IContentWrapperProps {
  width?: number;
  customMargin?: string
}

export const ContentWrapper: React.FC<IContentWrapperProps> = (props) => {
  const {children, width, customMargin} = props
  return (
    <StyledContentWrapper width={width} customMargin={customMargin}>
      {children}
    </StyledContentWrapper>
  );
};
