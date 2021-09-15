import React, { useEffect, useState } from 'react';
import {
  StyledHeaderWrapper, StyledNavWrapper,
  StyledAuthList,
  StyledBurger,
  StyledBurgerLine,
  StyledBurgerMenu,
  AuthWrapper,
  StyledLogo
} from './Header.styled'
import { Button } from '../Button';
import { Nav } from '../Nav';
import { IconLock } from '../../Icons';
import { IconKey } from '../../Icons';
import { Logo } from '../Logo';
import { ContentWrapper } from '../ContentWrapper';
import { theme } from '../../theme';
// import { modalsActions } from '../../store/modals/actions';
// import { useDispatch } from 'react-redux';

export const Header: React.FC<any> = () => {

  const [isOpen, setIsOpen] = useState(false);
  // const dispatch = useDispatch()
  const handleClick = () => {
    // dispatch(modalsActions.openModalAction({name: 'registrationModal'}))
  }
  const scrollWidth = typeof window !== 'undefined' ? window.innerWidth - document.body.clientWidth : 0;

  const handleToggleMenu = () => {
    setIsOpen(!isOpen)

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
            <Button
              icon={IconLock}
              background={'rgba(219, 214, 208, 0.5)'}
              title={'Вход'}
              iconColor={'#000'}
              color={'#000'}
              onClick={() => {
                console.log('Логин')
              }}/>
            <Button
              icon={IconKey}
              background={theme.color.yellow}
              title={'Регистрация'}
              color={'#fff'}
              onClick={() => handleClick()}/>
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

