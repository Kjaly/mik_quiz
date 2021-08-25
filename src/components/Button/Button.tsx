import React from 'react';
import {
  StyledButton, StyledIcon,
  StyledTitle
} from './Button.styled'

export interface IButtonProps {
  title: string,
  onClick: () => void,
  background?: string,
  reversed?: boolean,
  icon?: React.ElementType;
}

export const Button: React.FC<IButtonProps> = (props) => {
  const {title, onClick, background, icon, reversed} = props
  const Icon = icon;
  return (
    <StyledButton reversed={reversed} onClick={onClick} background={background}>
      {Icon &&
      <StyledIcon reversed={reversed}>
        <Icon/>
      </StyledIcon>}
      <StyledTitle>{title}</StyledTitle>
    </StyledButton>
  );
};
