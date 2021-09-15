import React from 'react';

import { StyledNavItem, StyledNavUrl } from './NavItem.styled'

import { history } from '../../../store'

export interface INavItemProps {
  text: string,
  url: string,
  isActive: boolean;
  isFooter?: boolean;
}

export const NavItem: React.FC<INavItemProps> = (props) => {
  const {text, url, isActive, isFooter} = props

  const handleClick = () => {
    history.push(url)
  }
  return (
    <StyledNavItem isFooter={isFooter} isActive={isActive} onClick={handleClick}>
      <StyledNavUrl onClick={(e) => e.preventDefault()} href={url}>
        {text}
      </StyledNavUrl>
    </StyledNavItem>
  );
};
