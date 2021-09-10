import React from 'react';
import { StyledDecorativeLines, StyledLine } from './DecorativeLines.styled';

export interface IDecorativeLinesProps {
  color?: string;
  opacity?: number;

}

export const DecorativeLines: React.FC<IDecorativeLinesProps> = (props) => {
  const {color, opacity} = props
  return (
    <StyledDecorativeLines opacity={opacity} color={color}>
      <StyledLine/>
      <StyledLine/>
      <StyledLine/>
    </StyledDecorativeLines>
  );
};
