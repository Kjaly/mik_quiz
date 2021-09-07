import styled from "styled-components";

export const StyledGalleryItem = styled.div`
  width: 100%;
  height: 180px;
  position: relative;
  z-index: 1;
`

export const StyledItemImgWrapper = styled.div`
  background-color: ${({theme}) => theme.color.blue};
  width: 100%;
  height: calc(100% - 15px);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;

  &:after {
    position: absolute;
    content: '';
    width: 100%;
    height: 5px;
    bottom: 0;
    transform: scale(0);
    background-color: ${({theme}) => theme.color.yellow};
    transition: all 0.2s ease-in-out;
  }

  :hover {
    &:after {
      transform: scale(1);
    }

    & > div {
      border-radius: 30px;
      width: 116px;

      > svg {
        transform: translateX(100px);
      }
    }

    & > div > span {
      left: 50%;
      transform: translateX(-50%);
    }
  }
`

export const StyledItemImg = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  opacity: 0.7;
  z-index: 0;
`
export const StyledItemButton = styled.div`
  height: 42px;
  width: 42px;
  background-color: #fff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  position: relative;
  overflow: hidden;
  z-index: 1;

  > svg {
    transition: all 0.2s ease-in-out;
    width: 21px;
  }

  > span {
    font-size: 12px;
    font-weight: 500;
    color: ${({theme}) => theme.color.yellow};
    transition: all 0.2s ease-in-out;
    position: absolute;
    display: block;
    left: -100px;
  }


`
export const StyledItemUser = styled.div`
  position: absolute;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  bottom: -5px;
  right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  background-color: ${({theme}) => theme.color.blue};
  border: 6px solid ${({theme}) => theme.color.darkwhite};
  transition: all .2s ease-in-out;
  cursor: pointer;

  > svg {
    height: 13px;
  }
  :hover {
    background-color: ${({theme}) => theme.color.yellow};

  }
`
