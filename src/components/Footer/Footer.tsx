import React from 'react';
import {
  StyledDescriptionWrapper,
  StyledFooterBackground,
  StyledFooterDescription,
  StyledFooterNav,
  StyledFooterWrapper,
  StyledLogo,
  StyledNavWrapper,
  StyledFooterCopyrightWrapper,
  StyledFooterCopyrightLogo,
  StyledFooterCopyrightrDescription,
} from './Footer.styled';
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
              <Logo white />
            </StyledLogo>
            <StyledNavWrapper>
              <Nav isFooter />
            </StyledNavWrapper>
          </StyledFooterNav>
          <StyledFooterNav>
            <StyledLogo>
              <Logo
                logo="nationalProjects"
                onClick={(e): void => {
                  window.open('https://xn--80aapampemcchfmo7a3c9ehj.xn--p1ai/', '_blank');
                }}
              />
            </StyledLogo>
          </StyledFooterNav>
          <StyledDescriptionWrapper>
            <StyledFooterDescription>
              <p>
                По всем техническим вопросам обращайтесь на{' '}
                <a href="mailto: support@future-of-russia.ru">support@future-of-russia.ru</a>
              </p>
              <p>
                © 2021 Все материалы данного сайта являются объектами авторского права (в том числе
                дизайн). Запрещается копирование, распространение (в том числе путем копирования на
                другие сайты и ресурсы в Интернете) или любое иное использование информации и
                объектов без предварительного согласия правообладателя.
              </p>
            </StyledFooterDescription>
          </StyledDescriptionWrapper>{' '}
          <StyledFooterCopyrightWrapper>
            <StyledFooterCopyrightLogo>
              <StyledLogo>
                <Logo
                  logo="itspecial"
                  onClick={(e): void => {
                    window.open('https://itspecial.net/', '_blank');
                  }}
                />
              </StyledLogo>
            </StyledFooterCopyrightLogo>
            <StyledFooterCopyrightrDescription>
              <p>
                © ITSpecial company, 2021
                <br /> Создание и поддержка сайта
              </p>
            </StyledFooterCopyrightrDescription>
          </StyledFooterCopyrightWrapper>
        </StyledFooterWrapper>
      </ContentWrapper>
    </StyledFooterBackground>
  );
};
