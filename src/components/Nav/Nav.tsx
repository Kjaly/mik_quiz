import React from 'react';
import { StyledNav, StyledNavMobile, StyledNavTitle } from './Nav.styled';
import { NavItem } from './NavItem'
import { useSelector } from 'react-redux';
import { routerSelectors } from '../../store/route';
import { NavMobileItem } from './NavMobileItem';


export interface INavProps {
  isOpen?: boolean;
  setIsOpen?: (open: boolean) => void;
  mobileHidden?: boolean
}

export const Nav: React.FC<INavProps> = (props) => {
  const {isOpen, mobileHidden, setIsOpen} = props
  const currentLocation = useSelector(routerSelectors.getLocationPathName)

  const navigation = [
    {text: 'Главная', url: '/'},
    {text: 'Викторина', url: '/quiz'},
    {text: 'О проекте', url: '/about'},
  ]

  return (
    <>
      <StyledNav mobileHidden={mobileHidden}>
        {navigation.map((item, key) => {
          return (
            <NavItem isActive={currentLocation === item.url} text={item.text} url={item.url} key={key}/>
          )
        })}
      </StyledNav>

      <StyledNavMobile isOpen={isOpen}>
        <StyledNavTitle>
          Меню
        </StyledNavTitle>
        {navigation.map((item, key) => {
          return (
            <NavMobileItem setIsOpen={setIsOpen} isActive={currentLocation === item.url} text={item.text} url={item.url} key={key}/>
          )
        })}
      </StyledNavMobile>
    </>
  );
};
