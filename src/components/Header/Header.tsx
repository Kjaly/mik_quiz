import React, { useEffect, useState } from 'react';
import {
  StyledHeaderWrapper, StyledNavWrapper,
  StyledAuthList,
  StyledBurger,
  StyledBurgerLine,
  StyledBurgerMenu,
  AuthWrapper,
  StyledLogo,
  StyledAuthDropDown,
  StyledAuthDropDownItem,
  StyledAuthDropDownList
} from './Header.styled'
import { Button } from '../Button';
import { Nav } from '../Nav';
import { IconArrowRight, IconLock } from '../../Icons';
import { IconKey } from '../../Icons';
import { Logo } from '../Logo';
import { ContentWrapper } from '../ContentWrapper';
import { theme } from '../../theme';
import { Link } from 'react-router-dom';
import { modalsActions } from "../../store/modals/actions";
import { useDispatch } from "react-redux";


export const Header: React.FC<any> = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [isAuth, setIsAuth] = useState(false);
  const [authIsOpen, setAuthIsOpen] = useState(false)
  const dispatch = useDispatch()
  const handleRegistration = () => {
    dispatch(modalsActions.openModalAction({name: 'registrationModal'}))
  }
  const handleAuth = () => {
    dispatch(modalsActions.openModalAction({name: 'authModal'}))
  }

  const scrollWidth = typeof window !== 'undefined' ? window.innerWidth - document.body.clientWidth : 0;

  const handleToggleMenu = () => {
    setIsOpen(!isOpen)
    setAuthIsOpen(false)
  }
  const handleToggleAuth = () => {
    setAuthIsOpen(!authIsOpen)
  }

  useEffect(() => {
    setAuthIsOpen(false)
  }, [isAuth]);


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
                    title={'Имя'}
                    color={'#fff'}
                    onClick={handleToggleAuth}/>
                  <StyledAuthDropDownList authIsOpen={authIsOpen}>
                    <Link to="/profile">
                      <StyledAuthDropDownItem>
                        Мои профиль
                      </StyledAuthDropDownItem>
                    </Link>
                    <Link to="/publications">
                      <StyledAuthDropDownItem>
                        Мои публикации
                      </StyledAuthDropDownItem>
                    </Link>
                    <StyledAuthDropDownItem onClick={() => setIsAuth(false)}>
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
                    title={'Регистрация'}
                    color={'#fff'}
                    onClick={()=>handleRegistration()}/>
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

