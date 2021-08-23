import React from 'react';
import { Logo } from '../Logo/Logo';
import { StyledNav } from './Nav.styled';
import { NavItem } from './NavItem'

export const Nav: React.FC = () => {
  return (
    <StyledNav>
      <Logo/>
      <NavItem text={'Главная'} href={'#'}/>
      <NavItem text={'Викторина'} href={'#'}/>
      <NavItem text={'О проекте'} href={'#'}/>
    </StyledNav>
  );
};
