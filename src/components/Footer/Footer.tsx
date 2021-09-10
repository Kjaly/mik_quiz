import React from 'react';
import {
  StyledAuthList,
  StyledFooterBackground,
  StyledFooterDescription,
  StyledFooterNav,
  StyledFooterWrapper,
  StyledNavWrapper
} from './Footer.styled'
import { Button } from "../Button";
import { Nav } from "../Nav";
import { IconKey, IconLock } from "../../Icons";
import { Logo } from "../Logo";
import { ContentWrapper } from "../ContentWrapper";
import { theme } from "../../theme";

export const Footer: React.FC<any> = () => {
  return (
    <StyledFooterBackground>
      <ContentWrapper customMargin={'right'}>
        <StyledFooterWrapper>
          <StyledFooterNav>
            <StyledNavWrapper>
              <Logo white/>
              <Nav/>
            </StyledNavWrapper>
            <StyledAuthList>
              <Button
                icon={IconLock}
                iconColor={theme.color.blue}
                background={'rgba(255, 255, 255, 0.1)'}
                color={'#fff'}
                title={'Вход'}
                onClick={() => {
                  console.log('Логин')
                }}/>
              <Button
                icon={IconKey}
                background={theme.color.yellow}
                title={'Регистрация'}
                color={'#fff'}
                onClick={() => {
                  console.log('Регистрация')
                }}/>
            </StyledAuthList>
          </StyledFooterNav>

          <StyledFooterDescription>
            2021 НАШ ГОРОД Все материалы данного сайта являются объектами авторского права (в том числе дизайн).
            Запрещается копирование, распространение (в том числе путем копирования на другие сайты и ресурсы в
            Интернете) или любое иное использование информации и объектов без предварительного согласия правообладателя.
          </StyledFooterDescription>
        </StyledFooterWrapper>
      </ContentWrapper>
    </StyledFooterBackground>
  );
};

