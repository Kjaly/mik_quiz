import React from 'react';

interface INavItemProps {
  text: string;
  url: string;
}

import {
  StyledNavItem,
  StyledNavUrl
} from './NavItem.styled'

export const NavItem: React.FC<any> = (props) => {
  const {text, url} = props
  return (
    <StyledNavItem>
      <StyledNavUrl href={url}>
        {text}
      </StyledNavUrl>
    </StyledNavItem>
  );
};
