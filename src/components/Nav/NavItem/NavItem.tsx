import React from 'react';

import { StyledNavItem, StyledNavUrl } from './NavItem.styled'

export interface INavItemProps {
  text:string,
  url: string,
  isActive:boolean;
}

export const NavItem: React.FC<INavItemProps> = (props) => {
  const {text, url, isActive} = props


  return (
    <StyledNavItem isActive={isActive}>
      <StyledNavUrl  href={url}>
        {text}
      </StyledNavUrl>
    </StyledNavItem>
  );
};
