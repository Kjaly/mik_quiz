import React, { useState } from 'react';
import {
  StyledBackImg,
  StyledDecorativeWrapper,
  StyledDescription,
  StyledIconNg,
  StyledIconsBlock,
  StyledInfo,
  StyledItemDescription,
  StyledMainSlider,
  StyledMainWrapper,
  StyledMprf,
  StyledIconsBlockTop,
  StyledSwiperText
} from './MainSlider.styled';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SliderItem } from './SliderItem';

import SwiperCore, { Pagination, Autoplay } from 'swiper/core';
import { ContentWrapper } from '../ContentWrapper';
import { DecorativeLines } from '../DecorativeLines';
import { theme } from '../../theme';
import { Title } from '../Typography/Title';
import { IconMprf, IconNG } from '../../Icons';
import mainImage from '../../assets/images/banner/mainImage.png'
import mainImage2 from '../../assets/images/banner/mainImage2.jpg'
import mainImage3 from '../../assets/images/banner/mainImage3.jpg'
import { SliderDescription } from './SliderDescription';

SwiperCore.use([Pagination, Autoplay]);

interface ISliderItem {
  id:number;
  title: string,
  buttonText: string
  img?: string
  description?: JSX.Element
}

const sliders: Array<ISliderItem> = [
  {
    id:1,
    title: `Участвуй в онлайн-викторине!
    Запиши видеоролик!
    Путешествуй по России!`,
    buttonText: 'Участвовать',
    img: mainImage,
  },
  {
    id:2,
    title: `Участвуй в онлайн-викторине!
    Запиши видеоролик!
    Путешествуй по России!`,
    buttonText: 'Участвовать',
    img: mainImage2,
  },
  {
    id:3,
    title: `Участвуй в онлайн-викторине!
    Запиши видеоролик!
    Путешествуй по России!`,
    buttonText: 'Участвовать',
    img: mainImage3,
    description: <SliderDescription/>,
  },
]


export const MainSlider: React.FC = () => {

  const [activeSlideIndex, setActiveSlideIndex] = useState(0);


  return (
    <StyledMainWrapper>
      <StyledMainSlider>
        {sliders.map((item, index) => (
          <>
            <StyledBackImg key={item.id} active={index === activeSlideIndex}>
              {item.img && (
                <img
                  src={item.img}
                  alt=""/>
              )}

            </StyledBackImg>
            {item?.description && <StyledItemDescription active={index === activeSlideIndex}>{item.description}</StyledItemDescription>}

          </>
        ))}
        <ContentWrapper customMargin={'left'}>
          <StyledIconsBlockTop>
            <StyledMprf>
              <IconMprf/>
              <p>Министерство просвещения<br/>
                Российской Федерации</p>
            </StyledMprf>
          </StyledIconsBlockTop>
          <Swiper
            autoplay={{delay: 5000}}
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
                    buttonText={item.buttonText}/>
                </SwiperSlide>
              )
            })}

            <StyledIconsBlock>
              <StyledIconNg>
                <IconNG/>
              </StyledIconNg>
            </StyledIconsBlock>

          </Swiper>
          <StyledSwiperText>
            75 лет Калининградской области / 800 лет Александру Невскому
          </StyledSwiperText>
        </ContentWrapper>

      </StyledMainSlider>
      <ContentWrapper>
        <StyledInfo>
          <Title size={30} color={theme.color.darkgray}>Славные дороги прошлого – маршрут в будущее России</Title>
          <StyledDescription>Проект «Славные дороги прошлого – маршрут в будущее России» посвящён памятным
            {/* eslint-disable-next-line no-irregular-whitespace */}
            историческим датам - 800 - летие великого князя Александра Невского и 75-летие самой молодой в России
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
