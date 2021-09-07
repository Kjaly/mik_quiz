import React from 'react';
import { StyledNav } from './Nav.styled';
import { NavItem } from './NavItem'
import { useSelector } from 'react-redux';
import { routerSelectors } from '../../store/route';

export const Nav: React.FC = () => {
  const currentLocation = useSelector(routerSelectors.getLocationPathName)

  const navigation = [
    {text:'Главная', url:'/'},
    {text:'Викторина', url:'/quiz'},
    {text:'О проекте', url:'/about'},
  ]

  return (
    <StyledNav>
      {navigation.map((item,key)=> {
        return (
          <NavItem isActive={currentLocation===item.url} text={item.text} url={item.url} key={key}/>
        )
      })}
    </StyledNav>
  );
};
