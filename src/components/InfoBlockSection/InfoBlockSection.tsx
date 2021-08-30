import React from 'react';
import { ContentWrapper } from "../ContentWrapper";
import {
  StyledDecorativeWrapper,
  StyledInfoBlock,
  StyledInfoDescription,
  StyledInfoImg,
  StyledInfoText,
  StyledInfoWrapper,
  StyledJoinCard,
  StyledJoinCardDescription,
  StyledJoinCardImg,
  StyledJoinCardLeftBlock,
  StyledJoinCardText
} from './InfoBlockSection.styled';
import { Title } from "../Typography/Title";
import { theme } from "../../theme";
import { Button } from "../Button";
import { IconArrowRight } from "../../Icons";
import { DecorativeLines } from "../DecorativeLines";


export const InfoBlockSection: React.FC = () => {
  return (
    <ContentWrapper customMargin={'right'}>
      <StyledInfoWrapper>
        <StyledInfoBlock>
          <StyledInfoImg/>
          <StyledInfoText>
            <Title customMargin={'0 0 20px 0'} size={30} color={theme.color.darkgray}>Заголовок</Title>
            <StyledInfoDescription>Значимость этих проблем настолько очевидна, что начало повседневной работы по
              формированию позиции влечет за собой процесс внедрения и модернизации новых предложений. Задача
              организации,
              в особенности же новая модель организационной деятельности позволяет оценить значение соответствующий
              условий активизации. С другой стороны новая модель организационной деятельности позволяет оценить значение
              дальнейших направлений развития. </StyledInfoDescription>
          </StyledInfoText>
          <StyledDecorativeWrapper>
            <DecorativeLines opacity={0.3} color={theme.color.blue}/>
          </StyledDecorativeWrapper>
        </StyledInfoBlock>
        <StyledJoinCard>
          <StyledJoinCardLeftBlock>
            <StyledJoinCardText>
              Присоединитесь к семинару #1
            </StyledJoinCardText>
            <StyledJoinCardDescription>
              Сейчас онлайн программа Живые уроки, на тему Ваш путь к международной карьере
            </StyledJoinCardDescription>
            <Button
              icon={IconArrowRight}
              background={theme.color.yellow}
              title={'Присоединиться'}
              color={'#fff'}
              reversed
              onClick={() => {
                console.log('Присоединиться')
              }}/>
          </StyledJoinCardLeftBlock>
          <StyledJoinCardImg>
          </StyledJoinCardImg>
        </StyledJoinCard>
        <StyledJoinCard>
          <StyledJoinCardLeftBlock>
            <StyledJoinCardText>
              Присоединитесь к семинару #2
            </StyledJoinCardText>
            <StyledJoinCardDescription>
              Сейчас онлайн программа Живые уроки, на тему Ваш путь к международной карьере
            </StyledJoinCardDescription>
            <Button
              icon={IconArrowRight}
              background={theme.color.yellow}
              title={'Присоединиться'}
              color={'#fff'}
              reversed
              onClick={() => {
                console.log('Присоединиться')
              }}/>
          </StyledJoinCardLeftBlock>
          <StyledJoinCardImg>
          </StyledJoinCardImg>
        </StyledJoinCard>
      </StyledInfoWrapper>

    </ContentWrapper>
  );
};
