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
import { ContentWrapper } from "../ContentWrapper";
import { theme } from "../../theme";

export const Header: React.FC = (props) => {
  const {} = props
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
            onClick={() => {
              console.log('Логин')
            }}/>
          <Button
            icon={IconKey}
            background={theme.color.yellow}
            title={'Регистрация'}
            onClick={() => {
              console.log('Регистрация')
            }}/>
        </StyledAuthList>
      </StyledHeaderWrapper>
    </ContentWrapper>
  );
};

