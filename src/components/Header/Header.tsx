import React, { useEffect, useState } from 'react';
import {
  AuthWrapper,
  StyledAuthDropDown,
  StyledAuthDropDownItem,
  StyledAuthDropDownList,
  StyledAuthList,
  StyledBurger,
  StyledBurgerLine,
  StyledBurgerMenu,
  StyledHeaderWrapper,
  StyledLogo,
  StyledNavWrapper
} from './Header.styled'
import { Button } from '../Button';
import { Nav } from '../Nav';
import { IconArrowRight, IconKey, IconLock } from '../../Icons';
import { Logo } from '../Logo';
import { ContentWrapper } from '../ContentWrapper';
import { theme } from '../../theme';
import { Link } from 'react-router-dom';
import { modalsActions } from '../../store/modals/actions';
import { useDispatch, useSelector } from 'react-redux';
import { getUserIdSelector, getUserRoleSelector } from '../../store/user/selectors';
import { logoutUserRequest } from '../../store/user/actions';


export const Header: React.FC<any> = () => {

  const [isOpen, setIsOpen] = useState(false);

  const isAuth = useSelector(getUserIdSelector);
  const [authIsOpen, setAuthIsOpen] = useState(false)
  const dispatch = useDispatch()
  const handleRegistration = () => {
    dispatch(modalsActions.openModalAction({name: 'registrationModal'}))
  }
  const handleAuth = () => {
    dispatch(modalsActions.openModalAction({name: 'authModal'}))
  }
  const role = useSelector(getUserRoleSelector)
  const scrollWidth = typeof window !== 'undefined' ? window.innerWidth - document.body.clientWidth : 0;

  const handleToggleMenu = () => {
    setIsOpen(!isOpen)
    setAuthIsOpen(false)
  }


  const handleToggleAuth = () => {
    setAuthIsOpen(!authIsOpen)
  }
  const logout = () => {
    setAuthIsOpen(false)
    dispatch(logoutUserRequest())
  }

  useEffect(() => {

    if (isOpen) {
      document.body.classList.add('no-scroll');
      document.body.style.paddingRight = `${scrollWidth}px`;
    } else {
      document.body.classList.remove('no-scroll');
      document.body.style.paddingRight = `0px`;
    }
    return () => {
      document.body.classList.remove('no-scroll');
      document.body.style.paddingRight = `0px`;
    }
  }, [isOpen])

  useEffect(() => {
    setAuthIsOpen(false)
  }, [isAuth]);

  return (
    <ContentWrapper>
      <StyledHeaderWrapper>
        <StyledLogo>
          <Logo/>
        </StyledLogo>
        <StyledNavWrapper>
          <Nav setIsOpen={setIsOpen} mobileHidden isOpen={isOpen}/>
        </StyledNavWrapper>

        <StyledAuthList>
          <AuthWrapper>
            {isAuth ?
              (
                <StyledAuthDropDown authIsOpen={authIsOpen} tabIndex={0} onBlur={() => setAuthIsOpen(false)}>
                  <Button
                    reversed
                    icon={IconArrowRight}
                    background={theme.color.yellow}
                    title={'Привет!'}
                    color={'#fff'}
                    onClick={handleToggleAuth}/>
                  <StyledAuthDropDownList authIsOpen={authIsOpen}>
                    <Link to="/profile">
                      <StyledAuthDropDownItem>
                        Мои профиль
                      </StyledAuthDropDownItem>
                    </Link>
                    {role === 'quiz_finalist' && (
                      <Link to="/publications">
                        <StyledAuthDropDownItem>
                          Мои публикации
                        </StyledAuthDropDownItem>
                      </Link>
                    )
                    }
                    <StyledAuthDropDownItem onClick={logout}>
                      Выход
                    </StyledAuthDropDownItem>
                  </StyledAuthDropDownList>
                </StyledAuthDropDown>
              )
              : (
                <>
                  <Button
                    icon={IconLock}
                    background={'rgba(219, 214, 208, 0.5)'}
                    title={'Вход'}
                    iconColor={'#000'}
                    color={'#000'}
                    onClick={() => handleAuth()}/>

                  <Button
                    icon={IconKey}
                    background={theme.color.yellow}
                    // disabled
                    title={'Регистрация'}
                    color={'#fff'}
                    onClick={() => handleRegistration()}/>
                </>
              )}

          </AuthWrapper>
          <StyledBurgerMenu isOpen={isOpen} onClick={handleToggleMenu}>
            <StyledBurger isOpen={isOpen}>
              <StyledBurgerLine isOpen={isOpen}/>
              <StyledBurgerLine isOpen={isOpen}/>
              <StyledBurgerLine isOpen={isOpen}/>
            </StyledBurger>
          </StyledBurgerMenu>
        </StyledAuthList>

      </StyledHeaderWrapper>
    </ContentWrapper>
  );
};

