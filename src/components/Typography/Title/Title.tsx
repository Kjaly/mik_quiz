import React from 'react';
import { StyledTitle } from './Title.styled';

export interface ITitleProps {
  color?: string;
  customMargin?: string;
  size?: number;
}

export const Title: React.FC<ITitleProps> = (props) => {
  const {children, color, customMargin, size} = props
  return (
    <StyledTitle size={size} color={color} customMargin={customMargin}>
      {children}
    </StyledTitle>
  );
};
