import React from 'react';

import { StyledNavMobileItem } from './NavMobileItem.styled'

import { history } from '../../../store'
import { Link } from 'react-router-dom';

export interface INavMobileItemProps {
  text: string,
  url: string,
  isActive: boolean;
  setIsOpen?: (open: boolean) => void;
  onClick?: ()=>void;
}

export const NavMobileItem: React.FC<INavMobileItemProps> = (props) => {
  const {text, url, isActive, setIsOpen, onClick} = props

  const handleClick = () => {
    if (onClick) {
      onClick()
    }
    if (url) history.push(url)

    setIsOpen && setIsOpen(false);
  }
  return (
    <StyledNavMobileItem isActive={isActive} onClick={handleClick}>
      <Link to={url}>
        {text}
      </Link>
    </StyledNavMobileItem>
  );
};
