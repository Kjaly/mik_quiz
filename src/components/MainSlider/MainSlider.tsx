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
  StyledIconsBlockTop
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
import { SliderDescription } from './SliderDescription';

SwiperCore.use([Pagination, Autoplay]);

interface ISliderItem {
  title: string,
  buttonText: string
  img?: string
  description?: JSX.Element
}

const sliders: Array<ISliderItem> = [
  {
    title: `Участвуй в онлайн-викторине!
    Запиши видеоролик!
    Путешествуй по России!`,
    buttonText: 'Учавствовать',
    img: mainImage,
  },
  {
    title: `Участвуй в онлайн-викторине!
    Запиши видеоролик!
    Путешествуй по России!`,
    buttonText: 'Учавствовать',
    img: mainImage2,
  },
  {
    title: `Участвуй в онлайн-викторине!
    Запиши видеоролик!
    Путешествуй по России!`,
    buttonText: 'Учавствовать',
    description: <SliderDescription/>,
  },
]


export const MainSlider: React.FC = () => {

  const [activeSlideIndex, setActiveSlideIndex] = useState(0);


  return (
    <StyledMainWrapper>
      <StyledMainSlider>
        {sliders.map((item, index) => (
          <StyledBackImg key={index} active={index === activeSlideIndex}>
            {item.img && (
              <img
                src={item.img}
                alt=""/>
            )}

            {item?.description && <StyledItemDescription>{item.description}</StyledItemDescription>}
          </StyledBackImg>
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
            autoplay={{ delay: 5000 }}
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
