import React from 'react';
import { StyledLogo } from './Logo.styled';
import { IconLogo, IconLogoWhite } from "../../Icons";
import { history } from '../../store'

interface ILogoProps {
  white?: boolean
}

export const Logo: React.FC<ILogoProps> = (props) => {
  const {white} = props;

  const handleClick= () => {
    history.push('/')
  }
  return (
    <StyledLogo onClick={handleClick}>
      {white ?  <IconLogoWhite/> :  <IconLogo/>}

    </StyledLogo>
  );
};
