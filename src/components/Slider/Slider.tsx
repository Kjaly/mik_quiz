import React from 'react';
import { Swiper } from "swiper/react";
import SwiperCore, { Navigation } from 'swiper'
import { StyledSwiper } from './Slider.styled'
import { SwiperNavigationButton } from "../SwiperNavigationButton";

SwiperCore.use([Navigation])
export const Slider: React.FC = (props) => {
  const {children} = props
  return (
    <StyledSwiper>
      <SwiperNavigationButton name={'prev'} reversed/>
      <Swiper
        navigation={{
          prevEl: '.prev',
          nextEl: '.next',
        }}
        slidesPerView={4}
        spaceBetween={30}
        slidesPerGroup={4}
      >
        {children}
      </Swiper>
      <SwiperNavigationButton name={'next'}/>
    </StyledSwiper>
  );
};
