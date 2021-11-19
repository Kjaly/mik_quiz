import React from 'react';
import { StyledButton, StyledIcon, StyledTitle } from './Button.styled'
import { history } from '../../store';

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
  href?: string;
  iconColor?: string;
  target?: string;
}

export const Button: React.FC<IButtonProps> = (props) => {
  const {href, title, onClick, background, icon, reversed, color, view, borderColor, disabled, iconColor, target} = props
  const Icon = icon;

  const handleClick = () => {
    if (disabled) {
      return null
    }
    if (href && !target) {
      history.push(href)
    }
    if (typeof onClick === "function") onClick();
  }

  return (
    <StyledButton
      as={target ? 'a' : 'div'}
      reversed={reversed}
      onClick={handleClick}
      background={background}
      color={color}
      view={view}
      href={target && href}
      target={target}
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
