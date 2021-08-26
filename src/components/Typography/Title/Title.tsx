import React from 'react';
import { StyledTitle } from './Title.styled';

export interface ITitleProps {
  color?: string;
  customMargin?: string;
}

export const Title: React.FC<ITitleProps> = (props) => {
  const {children, color, customMargin} = props
  return (
    <StyledTitle color={color} customMargin={customMargin}>
      {children}
    </StyledTitle>
  );
};
