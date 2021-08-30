import React from 'react';
import { StyledNav } from './Nav.styled';
import { NavItem } from './NavItem'

export const Nav: React.FC = () => {
  return (
    <StyledNav>
      <NavItem text={'Главная'} url={'/main'}/>
      <NavItem text={'Викторина'} url={'/quiz'}/>
      <NavItem text={'О проекте'} url={'/about'}/>
    </StyledNav>
  );
};
