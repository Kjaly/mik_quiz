import React from 'react';
import {
  StyledFooterWrapper,
  StyledNavWrapper,
  StyledFooterContainer,
  StyledAuthList,
  StyledFooterDescription,
  StyledFooterNav
} from './Footer.styled'
import { Button } from "../Button";
import { Nav } from "../Nav";
import { IconLock } from "../../Icons/IconLock";
import { IconKey } from "../../Icons/IconKey";
import { Logo } from "../Logo";
import { ContentWrapper } from "../ContentWrapper";

export const Footer: React.FC = (props) => {
  const {} = props
  return (
    <ContentWrapper>
      <StyledFooterWrapper>
        <StyledFooterNav>
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
        </StyledFooterNav>

        <StyledFooterDescription>
          2021 НАШ ГОРОД Все материалы данного сайта являются объектами авторского права (в том числе дизайн).
          Запрещается
          копирование, распространение (в том числе путем копирования на другие сайты и ресурсы в Интернете) или любое
          иное использование информации и объектов без предварительного согласия правообладателя.
        </StyledFooterDescription>
      </StyledFooterWrapper>
      <StyledFooterContainer/>
    </ContentWrapper>
  )
    ;
};

