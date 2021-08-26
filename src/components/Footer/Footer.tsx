import React from 'react';
import {
  StyledFooterWrapper,
  StyledNavWrapper,
  StyledFooterBackground,
  StyledAuthList,
  StyledFooterDescription,
  StyledFooterNav
} from './Footer.styled'
import { Button } from "../Button";
import { Nav } from "../Nav";
import { IconLock } from "../../Icons";
import { IconKey } from "../../Icons";
import { Logo } from "../Logo";
import { ContentWrapper } from "../ContentWrapper";
import { StyledBorderStuck } from "../BorderStuckContainer/BorderStuckContainer.styled";
import { theme } from "../../theme";

export const Footer: React.FC = (props) => {
  const {} = props
  return (
    <StyledBorderStuck inversed>
      <StyledFooterBackground>
        <ContentWrapper customMargin={'right'}>
          <StyledFooterWrapper>
            <StyledFooterNav>
              <StyledNavWrapper>
                <Logo/>
                <Nav/>
              </StyledNavWrapper>
              <StyledAuthList>
                <Button
                  icon={IconLock}
                  background={theme.color.blue}
                  color={'#fff'}
                  title={'Войти'}
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
              Запрещается
              копирование, распространение (в том числе путем копирования на другие сайты и ресурсы в Интернете) или
              любое
              иное использование информации и объектов без предварительного согласия правообладателя.
            </StyledFooterDescription>
          </StyledFooterWrapper>
        </ContentWrapper>
      </StyledFooterBackground>
    </StyledBorderStuck>
  );
};

