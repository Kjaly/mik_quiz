import React from 'react';
import { IconLogo, IconLogoWhite, IconNationalProjectsBlue, IconItspecial } from "../../Icons";
import { history } from '../../store';
import { StyledLogo } from './Logo.styled';

interface ILogoProps {
  white?: boolean,
  onClick?: (e: React.MouseEvent<HTMLElement> | React.TouchEvent<HTMLElement>) => void,
  logo?: string,
}

export const Logo: React.FC<ILogoProps> = (props) => {
  const {white, onClick, logo = 'default'} = props;

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
    <StyledLogo logo={logo} onClick={handleClick}>
      {
        {
          'nationalProjects': <IconNationalProjectsBlue/>,
          'itspecial': <IconItspecial/>,
          'default': white ? <IconLogoWhite/> : <IconLogo/>
        }[logo]
      }
    </StyledLogo>
  );
};
