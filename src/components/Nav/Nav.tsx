import React from 'react';
import { StyledNav, StyledNavMobile, StyledNavMobileAuth, StyledNavTitle } from './Nav.styled';
import { NavItem } from './NavItem'
import { useDispatch, useSelector } from 'react-redux';
import { routerSelectors } from '../../store/route';
import { NavMobileItem } from './NavMobileItem';
import { Button } from '../Button';
import { IconKey, IconLock } from '../../Icons';
import { theme } from '../../theme';
import { logoutUserRequest } from '../../store/user/actions';
import { getUserIdSelector, getUserRoleSelector } from '../../store/user/selectors';
import { modalsActions } from '../../store/modals/actions';


export interface INavProps {
  isOpen?: boolean;
  setIsOpen?: (open: boolean) => void;
  mobileHidden?: boolean
  isFooter?: boolean
}

interface INavigation {
  text: string;
  url: string;
  isAuth?: boolean
  isFooter?: boolean
  isFinalist?: boolean
  onClick?: () => void;
}

export const navigation: Array<INavigation> = [
  {text: 'Главная', url: '/'},
  {text: 'Викторина', url: '/quiz', isAuth: true},
  {text: 'О проекте', url: '/about'},
  {text: 'Контакты', url: '/contacts', isFooter: true},
]


export const Nav: React.FC<INavProps> = (props) => {
  const {isOpen, mobileHidden, setIsOpen, isFooter} = props
  const currentLocation = useSelector(routerSelectors.getLocationPathName)
  const isAuth = useSelector(getUserIdSelector);
  const role = useSelector(getUserRoleSelector)
  const isFinalist = role === 'quiz_finalist'
  const dispatch = useDispatch()
  const handleLogout = (() => {
    dispatch(logoutUserRequest())
  })


  const handleLogin = () => {
    dispatch(modalsActions.openModalAction({name: 'authModal'}))
  }
  const handleReg = () => {
    dispatch(modalsActions.openModalAction({name: 'registrationModal'}))
  }

  const authMobileNavigation: Array<INavigation> = [
    {text: 'Мой профиль', url: '/profile'},
    {text: 'Мои публикации', url: '/publications', isFinalist: true},
    {text: 'Выход', url: '', onClick: handleLogout},
  ]

  const fullNavigation: Array<INavigation> = !isAuth ? navigation : [...navigation, ...authMobileNavigation]
  return (
    <>
      <StyledNav isFooter={isFooter} mobileHidden={mobileHidden}>
        {navigation.filter((item) => isFooter ? item : !item.isFooter).map((item, key) => {
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
        {fullNavigation.filter(item => isFinalist ? item : !item.isFinalist).map((item, key) => {
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
              onClick={handleLogin}/>
            <Button
              icon={IconKey}
              background={theme.color.yellow}
              disabled
              title={'Регистрация'}
              color={'#fff'}
              onClick={handleReg}/>
          </StyledNavMobileAuth>
        )}
      </StyledNavMobile>
    </>
  );
};
