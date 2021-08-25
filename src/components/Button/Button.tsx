import React from 'react';
import {
  StyledButton, StyledIcon,
  StyledTitle
} from './Button.styled'

export interface IButtonProps {
  title: string,
  onClick: () => void,
  background?: string,
  color?: string,
  reversed?: boolean,
  icon?: React.ElementType;
}

export const Button: React.FC<IButtonProps> = (props) => {
  const {title, onClick, background, icon, reversed, color} = props
  const Icon = icon;
  return (
    <StyledButton reversed={reversed} onClick={onClick} background={background} color={color}>
      {Icon &&
      <StyledIcon reversed={reversed}>
        <Icon/>
      </StyledIcon>}
      <StyledTitle>{title}</StyledTitle>
    </StyledButton>
  );
};
