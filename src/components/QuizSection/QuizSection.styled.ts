import styled from "styled-components";
import { device } from "../../theme/devices";

export const StyledQuizBlock = styled.div`
  position: relative;
  margin: 30px 0 50px;

  ${device.tablet} {
    margin: 50px 0 80px;

  }

  ${device.desktop} {
    margin: 70px 0 100px;
  }
`

export const StyledQuizWrapper = styled.div`
  position: relative;
  z-index: 1;
`
export const StyledQuizHeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  flex-direction: column;

  ${device.tablet} {
    flex-direction: row;
    align-items: center;

  }

`
export const StyledQuizTitle = styled.div`
  margin-bottom: 10px;

  ${device.tablet} {
    margin-bottom: 0;
  }
`
export const StyledQuizBullets = styled.div`
  display: flex;
  column-gap: 10px;

`
export const StyledBulletItem = styled.div<{ isEnabled?: boolean, active?: boolean }>`
  height: 7px;
  width: 7px;
  background-color: ${({theme, isEnabled, active}) => !isEnabled && !active ? theme.color.blue : theme.color.yellow};
  opacity: ${({isEnabled, active}) => !isEnabled && !active && 0.2};
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  transform: ${({active}) => active && 'scale(1.2)'};

  :hover {
    transform: scale(1.2);
  }
`
export const StyledQuizMainSection = styled.div`
  width: 100%;
  background-color: #fff;
  box-shadow: 0 22px 66px -13px rgba(104, 62, 0, 0.15);
  padding: 20px;

  .swiper-container {
    height: 100%;
  }

  .swiper-slide {
    display: flex;
    flex-direction: column;
    height: auto;
  }

  ${device.desktop} {
    padding: 40px;
  }

`
export const StyledQuizQuestion = styled.div`
  position: relative;
  padding-bottom: 30px;
  margin-bottom: 30px;

  ::after {
    position: absolute;
    content: '';
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: ${({theme}) => theme.color.darkgray};
    opacity: 0.2;
  }
`
export const StyledQuizAnswers = styled.div`
  display: grid;
  grid-template-columns:repeat(1, 1fr);
  grid-gap: 20px;
  margin-bottom: 40px;
  flex: 100%;

  ${device.desktop} {
    grid-template-columns:repeat(2, 1fr);
  }
`
export const StyledButtonBlock = styled.div<{ firstSlide?: boolean }>`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  column-gap: 10px;

`
export const StyledButton = styled.div<{ reversed?: boolean }>`
  max-width: 140px;

  > div {
    > div {
      transform: rotate(${({reversed}) => reversed && '180deg'})
    }
  }
`

export const StyledTextarea = styled.div`
  margin-bottom: 40px;
  min-height: 228px;
`

export const StyledDecorativeWrapper = styled.div<{ lineId?: number }>`
  display: none;

  ${device.tablet} {
    display: block;
    position: absolute;
    content: '';
    left: ${({lineId}) => lineId === 2 ? '90%' : '-40%'};
    top: ${({lineId}) => lineId === 2 ? '20%' : '100%'};
    z-index: 0;
    transform:${({lineId}) => lineId === 2 ? 'rotate(45deg) scale(1, -1) translate(-185px, 120px)' : 'rotate(-45deg) scale(-1, -1) translate(-115px, 50px)'} ;
  }
`
