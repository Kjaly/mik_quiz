import React from 'react';
import { BorderStuckContainer } from "../BorderStuckContainer";
import { StyledExpertSection } from './ExpertSection.styled';
import { Slider } from "../Slider";
import { ContentWrapper } from "../ContentWrapper";
import { Title } from "../Typography/Title";
import { theme } from "../../theme";
import { SwiperSlide } from "swiper/react";
import { ExpertCard } from "../ExpertCard";

export const ExpertSection: React.FC = () => {

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
    }
    ]
  return (
    <BorderStuckContainer inversed>
      <StyledExpertSection>
        <ContentWrapper customMargin={'right'}>
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
        </ContentWrapper>

      </StyledExpertSection>
    </BorderStuckContainer>
  );
};
