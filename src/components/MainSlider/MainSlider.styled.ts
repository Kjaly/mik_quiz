import styled from "styled-components";

export const StyledMainSlider = styled.div`
  height: 500px;
  margin-bottom: 20px;
  width: 100%;
  background: ${({theme}) => theme.color.blue};
  position: relative;
  z-index: 1;


  .swiper-container {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }


  .swiper-pagination-bullet {
    width: 7px;
    height: 7px;
    text-align: center;
    line-height: 20px;
    font-size: 12px;
    background: #fff;
    border-radius: 0;
    transition: all 0.2s ease-in;
  }

  .swiper-pagination-bullet-active {
    transform: scale(1.4);
    margin: 0 10px;
    color: #fff;
    background: ${({theme}) => theme.color.yellow};
  }

`
