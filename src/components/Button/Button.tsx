import React from 'react';
import { StyledButton } from './Button.styled'

interface IButtonProps {
  title: string,
  onClick: () => void,
  background?: string,
}

export const Button: React.FC<IButtonProps> = (props) => {
  const {title, onClick, background} = props

  return (
    <StyledButton onClick={onClick} color={background}>
      {title}
    </StyledButton>
  );
};
