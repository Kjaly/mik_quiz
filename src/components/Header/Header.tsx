import React from 'react';
import {
  StyledHeaderWrapper, StyledNavWrapper,
  StyledAuthList
} from './Header.styled'
import { Button } from "../Button";
import { Nav } from "../Nav";
import { IconLock } from "../../Icons/IconLock";
import { IconKey } from "../../Icons/IconKey";
import { Logo } from "../Logo";

export const Header: React.FC = (props) => {
  const {} = props
  return (
    <StyledHeaderWrapper>
      <StyledNavWrapper>
        <Logo/>
        <Nav/>
      </StyledNavWrapper>
      <StyledAuthList>
        <Button
          icon={IconLock}
          background={'#3D4F87'}
          title={'Войти'}
          onClick={() => {
            console.log('Логин')
          }}/>
        <Button
          icon={IconKey}
          background={'#FFB801'}
          title={'Регистрация'}
          onClick={() => {
            console.log('Регистрация')
          }}/>
      </StyledAuthList>
    </StyledHeaderWrapper>
  );
};

