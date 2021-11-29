import React from 'react';
import { IconLogo, IconLogoWhite, IconNationalProjectsBlue } from "../../Icons";
import { history } from '../../store';
import { StyledLogo } from './Logo.styled';

interface ILogoProps {
  white?: boolean,
  onClick?: (e: React.MouseEvent<HTMLElement> | React.TouchEvent<HTMLElement>) => void,
  name?: string,
}

export const Logo: React.FC<ILogoProps> = (props) => {
  const {white, onClick, name = 'default'} = props;

  const handleClick = (
      event: React.MouseEvent<HTMLElement> | React.TouchEvent<HTMLElement>
    ) => {
    if (onClick) {
      onClick(event);
      return
    }
    history.push('/')
  }

  return (
    <StyledLogo name={name} onClick={handleClick}>
      {
        {
          'nationalProjects': <IconNationalProjectsBlue/>,
          'default': white ? <IconLogoWhite/> : <IconLogo/>
        }[name]
      }
    </StyledLogo>
  );
};
