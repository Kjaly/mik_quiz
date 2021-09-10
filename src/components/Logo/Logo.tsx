import React from 'react';
import { StyledLogo } from './Logo.styled';
import { IconLogo, IconLogoWhite } from "../../Icons";

interface ILogoProps {
  white?: boolean
}

export const Logo: React.FC<ILogoProps> = (props) => {
  const {white} = props;
  return (
    <StyledLogo>
      {white ?  <IconLogoWhite/> :  <IconLogo/>}

    </StyledLogo>
  );
};
