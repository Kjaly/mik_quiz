import React from 'react';
import {
  StyledButton, StyledIcon,
  StyledTitle
} from './Button.styled'

export interface IButtonProps {
  title: string,
  background?: string,
  borderColor?: string,
  color?: string,
  reversed?: boolean,
  icon?: React.ElementType;
  view?: string;
  onClick?: () => void,
  disabled?: boolean;
  iconColor?: string;
}

export const Button: React.FC<IButtonProps> = (props) => {
  const {title, onClick, background, icon, reversed, color, view, borderColor, disabled, iconColor} = props
  const Icon = icon;

  const handleClick = () => {
    if (disabled) {
      return null
    }
    if (typeof onClick === "function") onClick();
  }
  return (
    <StyledButton
      reversed={reversed}
      onClick={handleClick}
      background={background}
      color={color}
      view={view}
      borderColor={borderColor}
      disabled={disabled}
    >
      {Icon &&
      <StyledIcon
        view={view}
        borderColor={borderColor}
        color={color}
        reversed={reversed}
        iconColor={iconColor}
      >
        <Icon/>
      </StyledIcon>}
      <StyledTitle>{title}</StyledTitle>
    </StyledButton>
  );
};
