import React from 'react';
import {
  StyledDescriptionWrapper,
  StyledFooterBackground,
  StyledFooterDescription,
  StyledFooterNav,
  StyledFooterWrapper,
  StyledLogo,
  StyledNavWrapper,
} from './Footer.styled'
import { Nav } from '../Nav';
import { Logo } from '../Logo';
import { ContentWrapper } from '../ContentWrapper';

export const Footer: React.FC<any> = () => {
  return (
    <StyledFooterBackground>
      <ContentWrapper customMargin={'right'}>
        <StyledFooterWrapper>
          <StyledFooterNav>
            <StyledLogo>
              <Logo white/>
            </StyledLogo>
            <StyledNavWrapper>
              <Nav isFooter/>
            </StyledNavWrapper>
          </StyledFooterNav>

          <StyledDescriptionWrapper>
            <StyledFooterDescription>
              <p>По всем техническим вопросам обращайтесь на <span>support@future-of-russia.ru</span></p>
              <p>2021 НАШ ГОРОД Все материалы данного сайта являются объектами авторского права (в том числе дизайн).
              Запрещается копирование, распространение (в том числе путем копирования на другие сайты и ресурсы в
              Интернете) или любое иное использование информации и объектов без предварительного согласия
              правообладателя.</p>
            </StyledFooterDescription>
          </StyledDescriptionWrapper>
        </StyledFooterWrapper>
      </ContentWrapper>
    </StyledFooterBackground>
  );
};

