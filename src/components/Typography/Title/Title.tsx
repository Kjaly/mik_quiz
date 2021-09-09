import React from 'react';
import { StyledTitle } from './Title.styled';

export interface ITitleProps {
  color?: string;
  customMargin?: string;
  size?: number;
  weight?: number;
}

export const Title: React.FC<ITitleProps> = (props) => {
  const {children, color, customMargin, size, weight} = props
  return (
    <StyledTitle size={size} weight={weight} color={color} customMargin={customMargin}>
      {children}
    </StyledTitle>
  );
};
