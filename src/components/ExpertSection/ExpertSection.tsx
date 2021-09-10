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
      name: 'Марина Эдуардовна Оргеева',
      description: 'Председатель Калининградской областной Думы',
      img:'https://gazetazt.ru/media/rss-087d9b7596dce2b61908decbc87b532c/rssimg-c6ffa427fedea3bdd864c36ee108fa4d.jpeg',
    },
    {
      name: 'Андрей Викторович Ермак',
      description: 'Министр по культуре и туризму Калининградской области',
      img:'https://gov39.ru/upload/iblock/525/52505b5f90e41672df4df294b013d531.JPG',
    },
    {
      name: 'Денис Алексеевич Миронюк',
      description: 'Заместитель министра по культуре и туризму Калининградской области',
      img:'https://www.global-kaliningrad.ru/usr/person/big-person-16114835361.jpg'
    },
    {
      name: 'Михаил Галимханович Бадамшин',
      description: 'Заведующий музея «Бункер»',
      img:'https://westrussia.org/wp-content/uploads/2021/03/dsc_5430-1.jpg'
    },

  ]
  return (
    <StyledExpertSection aboutPage={aboutPage}>
      <ContentWrapper>
        <Title color={theme.color.blue} customMargin={'0 0 40px 0'}>
          Жюри, эксперты и наставники
        </Title>
        <Slider>
          {slides.map((item, key) => {
            return (
              <SwiperSlide key={key}>
                <ExpertCard name={item.name} description={item.description} img={item.img}/>
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
