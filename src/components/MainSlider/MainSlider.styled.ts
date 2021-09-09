import styled from "styled-components";


export const StyledMainWrapper = styled.div`
  width: 100%;
  height: 100%;`
export const StyledMainSlider = styled.div`
  height: 500px;
  margin-bottom: 20px;
  width: 100%;
  background: linear-gradient(90deg, ${({theme}) => theme.color.blue} 90%, rgba(0, 0, 0, 0) 50%);;
  position: relative;
  z-index: 2;


  .swiper-container {
    width: 100%;
    height: 100%;
    margin-left: -76px;
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
    align-items: flex-start;
    margin-top: 60px;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .swiper-pagination {
    margin-left: 76px;
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

export const StyledIconsBlock = styled.div`
  position: absolute;
  bottom: 40px;
  width: 450px;
  height: 80px;
  display: flex;
  padding-left: 76px;
  margin-top: 50px;
  align-items: center;

`
export const StyledMprf = styled.div`
  font-size: 13px;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-right: 30px;

  > img {
    width: 90px;
    height: 100%;
  }

  > p {
    color: #fff;
    line-height: 1.5;
  }

`
export const StyledIconNg = styled.div`

  > svg {
    width: 72px;
    height: 72px;
  }

  > p {
    color: #fff;
  }

`


export const StyledBackImg = styled.div<{ active: boolean }>`
  position: absolute;
  right: 10%;
  max-width: 50%;
  height: 100%;
  bottom: 0;
  top: 0;
  transition: all 0.5s ease-in;
  opacity: ${({active}) => active ? 1 : 0};

  > img {
    object-fit: cover;
    height: 100%;
    width: 100%;
    mask-image: linear-gradient(to left, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
  }

`

export const StyledDecorativeWrapper = styled.div`
  position: absolute;
  content: '';
  right: 0;
  z-index: 1;
  transform: rotate(45deg) scale(1, -1) translate(-50px, 10px);
`
export const StyledInfo = styled.div`
  width: 100%;
  height: 100%;
  padding: 100px 0;
`
export const StyledDescription = styled.p`
  width: 100%;
  margin-top: 20px;
  line-height: 1.5;
  font-size: 20px;
`


