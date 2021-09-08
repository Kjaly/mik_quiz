import React from 'react';
import { StyledExpertSection, StyledDecorativeWrapper } from './ExpertSection.styled';
import { Slider } from "../Slider";
import { ContentWrapper } from "../ContentWrapper";
import { Title } from "../Typography/Title";
import { theme } from "../../theme";
import { SwiperSlide } from "swiper/react";
import { ExpertCard } from "./ExpertCard";
import { DecorativeLines } from "../DecorativeLines";

export const ExpertSection: React.FC<any> = (props) => {
  const {aboutPage} = props

  const slides = [
    {
      name: 'Ирина Иванова',
      description: 'Генеральный директор ООО “Челябинские путешественники”'
    },
    {
      name: 'Екатерина Иванова',
      description: 'Генеральный директор ООО “Челябинские путешественники”'
    },
    {
      name: 'Андрей Иванов',
      description: 'Генеральный директор ООО “Челябинские путешественники”'
    },
    {
      name: 'Настя Иванова',
      description: 'Генеральный директор ООО “Челябинские путешественники”'
    },
    {
      name: 'Андрей Иванов',
      description: 'Генеральный директор ООО “Челябинские путешественники”'
    },
    {
      name: 'Настя Иванова',
      description: 'Генеральный директор ООО “Челябинские путешественники”'
    },
    {
      name: 'Андрей Иванов',
      description: 'Генеральный директор ООО “Челябинские путешественники”'
    },
    {
      name: 'Настя Иванова',
      description: 'Генеральный директор ООО “Челябинские путешественники”'
    },
  ]
  return (
    <StyledExpertSection aboutPage={aboutPage}>
      <ContentWrapper>
        <Title color={theme.color.blue} customMargin={'0 0 40px 0'}>
          Эксперты
        </Title>
        <Slider>
          {slides.map((item, key) => {
            return (
              <SwiperSlide key={key}>
                <ExpertCard name={item.name} description={item.description}/>
              </SwiperSlide>
            )
          })}
        </Slider>
        <StyledDecorativeWrapper>
          <DecorativeLines opacity={0.3} color={theme.color.blue}/>
        </StyledDecorativeWrapper>
      </ContentWrapper>
    </StyledExpertSection>
  );
};
