import React, { useState } from 'react';
import {
  StyledBackImg,
  StyledDecorativeWrapper,
  StyledDescription,
  StyledIconNg,
  StyledIconsBlock,
  StyledInfo,
  StyledMainSlider,
  StyledMainWrapper,
  StyledMprf
} from "./MainSlider.styled";
import { Swiper, SwiperSlide } from "swiper/react";
import { SliderItem } from "./SliderItem";

import SwiperCore, { Pagination } from 'swiper/core';
import { ContentWrapper } from "../ContentWrapper";
import { DecorativeLines } from "../DecorativeLines";
import { theme } from "../../theme";
import { Title } from "../Typography/Title";
import { IconMprf, IconNG } from "../../Icons";
import bannerImage from '../../assets/images/banner/bannerImage.png'

SwiperCore.use([Pagination]);


interface ISliderItem {
  title: string,
  description?: string
  buttonText: string
}

const sliders: Array<ISliderItem> = [
  {
    title: `Участвуй в онлайн-викторине!
    Запиши видеоролик!
    Путешествуй по России!`,
    buttonText: 'Учавствовать'
  },
  // {
  //   title: `Участвуй в онлайн-викторине!
  //   Запиши видеоролик!
  //   Путешествуй по России!`,
  //   buttonText: 'Учавствовать'
  // },

]

export const MainSlider: React.FC = () => {

  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const images = [
    bannerImage,
  ]

  return (
    <StyledMainWrapper>
      <StyledMainSlider>
        {images.map((item, index) => (
          <StyledBackImg key={index} active={index === activeSlideIndex}>
            <img
              src={images[index]}
              alt=""/>
          </StyledBackImg>
        ))}
        <ContentWrapper customMargin={'left'}>
          <Swiper
            pagination={{clickable: true}}
            slidesPerView={1}
            onSlideChange={(value): void => {
              setActiveSlideIndex(value?.realIndex);
            }}
          >
            {sliders?.map((item, key) => {
              return (
                <SwiperSlide key={key}>
                  <SliderItem
                    title={item.title}
                    description={item.description}
                    buttonText={item.buttonText}/>
                </SwiperSlide>
              )
            })}

            <StyledIconsBlock>
              <StyledMprf>
                <IconMprf/>
                <p>Министерство просвещения<br/>
                  Российской Федерации</p>
              </StyledMprf>
              <StyledIconNg>
                <IconNG/>
              </StyledIconNg>
            </StyledIconsBlock>
          </Swiper>
        </ContentWrapper>

      </StyledMainSlider>
      <ContentWrapper>
        <StyledInfo>
          <Title size={30} color={theme.color.darkgray}>Славные дороги прошлого – маршрут в будущее России</Title>
          <StyledDescription>Проект «Славные дороги прошлого – маршрут в будущее России» посвящён памятным
            историческим датам - <br/> 800-летие великого князя Александра Невского и 75-летие самой молодой в России
            Калининградской области.
            Участие в проекте даёт возможность старшеклассникам двух приграничных областей нашей страны -
            Калининградской и Псковской, погрузиться в изучение истории родного края не по учебникам, а вживую. Приняв
            участие в онлайн-викторине и став полуфиналистами проекта, отправиться на военно-исторические экскурсии,
            пройти маршрутами знаменитых земляков, больше узнать о великих экспедициях и ратных подвигах. Участвуя в
            создании видеолетописи западных форпостов России, победить в конкурсе видеороликов и отправиться в
            путешествие по родной стране!</StyledDescription>
        </StyledInfo>
      </ContentWrapper>
      <StyledDecorativeWrapper>
        <DecorativeLines color={theme.color.yellow}/>
      </StyledDecorativeWrapper>
    </StyledMainWrapper>
  )
    ;
};
