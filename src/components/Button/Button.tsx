import React from 'react';
import {
  StyledButton, StyledIcon,
  StyledTitle
} from './Button.styled'

export interface IButtonProps {
  title: string,
  onClick: () => void,
  background?: string,
  borderColor?: string,
  color?: string,
  reversed?: boolean,
  icon?: React.ElementType;
  view?: string;
}

export const Button: React.FC<IButtonProps> = (props) => {
  const {title, onClick, background, icon, reversed, color, view, borderColor} = props
  const Icon = icon;
  return (
    <StyledButton
      reversed={reversed}
      onClick={onClick}
      background={background}
      color={color}
      view={view}
      borderColor={borderColor}
    >
      {Icon &&
      <StyledIcon
        view={view}
        borderColor={borderColor}
        color={color}
        reversed={reversed}
      >
        <Icon/>
      </StyledIcon>}
      <StyledTitle>{title}</StyledTitle>
    </StyledButton>
  );
};
