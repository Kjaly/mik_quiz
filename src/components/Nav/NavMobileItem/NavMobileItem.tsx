import React from 'react';

import { StyledNavMobileItem, StyledNavMobileUrl } from './NavMobileItem.styled'

import { history } from '../../../store'

export interface INavMobileItemProps {
  text: string,
  url: string,
  isActive: boolean;
  setIsOpen?: (open: boolean) => void;
}

export const NavMobileItem: React.FC<INavMobileItemProps> = (props) => {
  const {text, url, isActive, setIsOpen} = props

  const handleClick = () => {
    history.push(url)

    setIsOpen && setIsOpen(false);
  }
  return (
    <StyledNavMobileItem isActive={isActive} onClick={handleClick}>
      <StyledNavMobileUrl onClick={(e) => e.preventDefault()} href={url}>
        {text}
      </StyledNavMobileUrl>
    </StyledNavMobileItem>
  );
};
