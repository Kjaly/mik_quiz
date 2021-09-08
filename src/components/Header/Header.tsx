import React from 'react';
import {
  StyledHeaderWrapper, StyledNavWrapper,
  StyledAuthList
} from './Header.styled'
import { Button } from "../Button";
import { Nav } from "../Nav";
import { IconLock } from "../../Icons";
import { IconKey } from "../../Icons";
import { Logo } from "../Logo";
import { ContentWrapper } from "../ContentWrapper";
import { theme } from "../../theme";
import { modalsActions } from "../../store/modals/actions";
import { useDispatch } from "react-redux";

export const Header: React.FC<any> = () => {
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(modalsActions.openModalAction({name: 'registrationModal'}))
  }
  return (
    <ContentWrapper>
      <StyledHeaderWrapper>
        <StyledNavWrapper>
          <Logo/>
          <Nav/>
        </StyledNavWrapper>
        <StyledAuthList>
          <Button
            icon={IconLock}
            background={theme.color.blue}
            title={'Войти'}
            color={'#fff'}
            onClick={() => {
              console.log('Логин')
            }}/>
          <Button
            icon={IconKey}
            background={theme.color.yellow}
            title={'Регистрация'}
            color={'#fff'}
            onClick={()=>handleClick()}/>
        </StyledAuthList>
      </StyledHeaderWrapper>
    </ContentWrapper>
  );
};

