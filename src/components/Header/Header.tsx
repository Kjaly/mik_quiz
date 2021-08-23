import React from 'react';
import {
  StyledHeaderWrapper, StyledNavWrapper,
  StyledAuthList
} from './Header.styled'
import { Button } from "../Button";
import { Nav } from "../Nav";
import { IconLock } from "../../Icons/IconLock";

export const Header: React.FC = (props) => {
  const {} = props
  return (
    <StyledHeaderWrapper>
      <StyledNavWrapper>
        <Nav/>
      </StyledNavWrapper>
      <StyledAuthList>
        <Button
          // icon={IconLock}
          background={'#3D4F87'}
          title={'Войти'}
          onClick={() => {
          console.log('Логин')
        }}/>
        <Button background={'#FFB801'} title={'Регистрация'} onClick={() => {
          console.log('Регистрация')
        }}/>
      </StyledAuthList>
    </StyledHeaderWrapper>
  );
};

