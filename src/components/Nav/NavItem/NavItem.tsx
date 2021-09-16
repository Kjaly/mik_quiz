import React from 'react';

import { StyledNavItem } from './NavItem.styled'

import { history } from '../../../store'
import { Link } from 'react-router-dom';

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
      <Link to={url}>
        {text}
      </Link>
    </StyledNavItem>
  );
};
