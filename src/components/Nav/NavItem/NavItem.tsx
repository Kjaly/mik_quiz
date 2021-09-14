import React from 'react';

import { StyledNavItem, StyledNavUrl } from './NavItem.styled'

import { history } from '../../../store'
export interface INavItemProps {
  text: string,
  url: string,
  isActive: boolean;
}

export const NavItem: React.FC<INavItemProps> = (props) => {
  const {text, url, isActive} = props

  const handleClick = () => {
    history.push(url)
  }
  return (
    <StyledNavItem isActive={isActive} onClick={handleClick}>
      <StyledNavUrl onClick={(e) => e.preventDefault()} href={url}>
        {text}
      </StyledNavUrl>
    </StyledNavItem>
  );
};
