import React from 'react';
import {
  StyledHeaderWrapper, StyledNavList,
  StyledAuthList
} from './Header.styled'
import { Button } from "../Button";
import { Nav } from "../Nav";

export const Header: React.FC = (props) => {
  const {} = props
  return (
    <StyledHeaderWrapper>
      <Nav/>
      <StyledAuthList>
        <Button title={'Войти'} onClick={() => {
          console.log('Логин')
        }}/>
        <Button title={'Регистрация'} onClick={() => {
          console.log('Регистрация')
        }}/>
      </StyledAuthList>
    </StyledHeaderWrapper>
  );
};

