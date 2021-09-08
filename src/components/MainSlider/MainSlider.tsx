import React, { useState } from 'react';
import { StyledBackImg, StyledDecorativeWrapper, StyledMainSlider } from "./MainSlider.styled";
import { Swiper, SwiperSlide } from "swiper/react";
import { SliderItem } from "./SliderItem";

import SwiperCore, { Pagination } from 'swiper/core';
import { ContentWrapper } from "../ContentWrapper";
import { DecorativeLines } from "../DecorativeLines";
import { theme } from "../../theme";

SwiperCore.use([Pagination]);


interface ISliderItem {
  title: string,
  description: string
}

const sliders: Array<ISliderItem> = [
  {
    title: 'Заголовок',
    description: 'Значимость этих проблем настолько очевидна, что начало повседневной работы по формированию позиции влечет за собой процесс внедрения и модернизации новых предложений. Задача организации, в особенности же новая модель организационной деятельности позволяет оценить значение соответствующий условий активизации. С другой стороны новая модель организационной деятельности позволяет оценить значение дальнейших направлений развития. ',
  },
  {
    title: 'Заголовок2',
    description: 'Значимость этих проблем настолько очевидна, что начало повседневной работы по формированию позиции влечет за собой процесс внедрения и модернизации новых предложений. Задача организации, в особенности же новая модель организационной деятельности позволяет оценить значение соответствующий условий активизации. С другой стороны новая модель организационной деятельности позволяет оценить значение дальнейших направлений развития. ',
  },
  {
    title: 'Заголовок3',
    description: 'Значимость этих проблем настолько очевидна, что начало повседневной работы по формированию позиции влечет за собой процесс внедрения и модернизации новых предложений. Задача организации, в особенности же новая модель организационной деятельности позволяет оценить значение соответствующий условий активизации. С другой стороны новая модель организационной деятельности позволяет оценить значение дальнейших направлений развития. ',
  },
  {
    title: 'Заголовок4',
    description: 'Значимость этих проблем настолько очевидна, что начало повседневной работы по формированию позиции влечет за собой процесс внедрения и модернизации новых предложений. Задача организации, в особенности же новая модель организационной деятельности позволяет оценить значение соответствующий условий активизации. С другой стороны новая модель организационной деятельности позволяет оценить значение дальнейших направлений развития. ',
  },
]

export const MainSlider: React.FC = () => {

  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const images = [
    'https://www.lancaster.ac.uk/media/lancaster-university/content-assets/images/alumni/new-alumni-website/LUJMedical02.jpg',
    'https://ctfimages.intoglobal.com/xw2h6mjophtz/731sOVK2X4DrG83SK4jXAf/395ba54e3dc059a2fbb5b1fa5ca33cf3/Contentful_-_Campus_LifeUOM.jpg',
    'https://i.guim.co.uk/img/media/10776732e4de44ac526313d88d7090cd5a82461d/19_52_1259_755/master/1259.jpg?width=1200&quality=85&auto=format&fit=max&s=3511729fb28b5130b4a69f27b2082481',
    'http://www.purdue.edu/purdue/images/audience/about-banner.jpg',
  ]
  return (
    <>
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
                    description={item.description}/>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </ContentWrapper>
      </StyledMainSlider>
      <StyledDecorativeWrapper>
        <DecorativeLines color={theme.color.yellow}/>
      </StyledDecorativeWrapper>
    </>
  );
};
