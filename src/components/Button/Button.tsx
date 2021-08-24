import React from 'react';
import {
  StyledButton, StyledIcon,
  StyledTitle
} from './Button.styled'

interface IButtonProps {
  title: string,
  onClick: () => void,
  background?: string,
  icon?: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
}

export const Button: React.FC<IButtonProps> = (props) => {
  const {title, onClick, background, icon} = props
  const Icon: ((props: React.SVGProps<SVGSVGElement>) => JSX.Element) | undefined = icon;
  return (
    <StyledButton onClick={onClick} background={background}>
      {Icon && <StyledIcon><Icon/></StyledIcon>}
      <StyledTitle>{title}</StyledTitle>
    </StyledButton>
  );
};
