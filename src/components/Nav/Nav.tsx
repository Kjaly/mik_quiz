import React, { useState } from 'react';
import { StyledNav, StyledNavMobile, StyledNavMobileAuth, StyledNavTitle } from './Nav.styled';
import { NavItem } from './NavItem'
import { useSelector } from 'react-redux';
import { routerSelectors } from '../../store/route';
import { NavMobileItem } from './NavMobileItem';
import { Button } from "../Button";
import { IconKey, IconLock } from "../../Icons";
import { theme } from "../../theme";


export interface INavProps {
  isOpen?: boolean;
  setIsOpen?: (open: boolean) => void;
  mobileHidden?: boolean
  isFooter?: boolean
}
interface INavigation {
  text: string;
  url: string;
  onClick?: () => void;
}

export const navigation:Array<INavigation> = [
  {text: 'Главная', url: '/'},
  {text: 'Викторина', url: '/quiz'},
  {text: 'О проекте', url: '/about'},
]


export const Nav: React.FC<INavProps> = (props) => {
  const {isOpen, mobileHidden, setIsOpen, isFooter} = props
  const currentLocation = useSelector(routerSelectors.getLocationPathName)
  const [isAuth, setIsAuth] = useState(false);

  const handleLogout = (() => {
    setIsAuth(false);
    console.log(isAuth);
  })


  const authMobileNavigation:Array<INavigation> = [
    {text: 'Мой профиль', url: '/profile'},
    {text: 'Мои публикации', url: '/publications'},
    {text: 'Выход', url: '', onClick: handleLogout},
  ]

  const fullNavigation:Array<INavigation> = !isAuth ? navigation : [...navigation, ...authMobileNavigation]
  return (
    <>
      <StyledNav isFooter={isFooter} mobileHidden={mobileHidden}>
        {navigation.map((item, key) => {
          return (
            <NavItem
              isFooter={isFooter}
              isActive={currentLocation === item.url}
              text={item.text}
              url={item.url}
              key={key}/>
          )
        })}
      </StyledNav>

      <StyledNavMobile isOpen={isOpen}>
        <StyledNavTitle>
          Меню
        </StyledNavTitle>
        {fullNavigation.map((item, key) => {
          return (
            <NavMobileItem
              onClick={item?.onClick}
              setIsOpen={setIsOpen}
              isActive={currentLocation === item.url}
              text={item.text}
              url={item.url}
              key={key}/>
          )
        })}

        {!isAuth && (
          <StyledNavMobileAuth>
            <Button
              icon={IconLock}
              background={'rgba(219, 214, 208, 0.5)'}
              title={'Вход'}
              iconColor={'#000'}
              color={'#000'}
              onClick={() => {
                setIsAuth(true)
              }}/>
            <Button
              icon={IconKey}
              background={theme.color.yellow}
              title={'Регистрация'}
              color={'#fff'}
              onClick={() => {
                console.log(2)
              }}/>
          </StyledNavMobileAuth>
        )}
      </StyledNavMobile>
    </>
  );
};
