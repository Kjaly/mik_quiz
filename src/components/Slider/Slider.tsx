import React from 'react';
import { Swiper } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper'
import {
  StyledSwiper,
  StyledMobileNavigation,
  StyledDesktopNavigation
} from './Slider.styled'
import { SwiperNavigationButton } from '../SwiperNavigationButton';

SwiperCore.use([Navigation])
export const Slider: React.FC = (props) => {
  const {children} = props
  return (
    <StyledSwiper>
      <StyledMobileNavigation>
        <SwiperNavigationButton name={'prev'} reversed/>
        <SwiperNavigationButton name={'next'}/>
      </StyledMobileNavigation>
      <StyledDesktopNavigation>
        <SwiperNavigationButton name={'prev'} reversed/>
      </StyledDesktopNavigation>
      <Swiper
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
          },
          10280: {
            slidesPerView: 4,
          },
        }}
        navigation={{
          prevEl: '.prev',
          nextEl: '.next',
        }}
        slidesPerView={1}
        spaceBetween={30}
      >
        {children}
      </Swiper>
      <StyledDesktopNavigation>
        <SwiperNavigationButton name={'next'}/>
      </StyledDesktopNavigation>
    </StyledSwiper>
  );
};
