import styled from 'styled-components';

export const StyledFileViewer = styled.div`
  display: grid;
  width: 100%;
  grid-gap: 15px;
  grid-template-columns: repeat(auto-fill, 45px);
  justify-content: space-between;

`
export const StyledFileItem = styled.div`
  height: 45px;
  width: 45px;
  background-color: ${({theme}) => theme.color.darkwhite};
  position: relative;
  border-radius: 5px;
  transition: all .2s ease-in-out;

  &:hover {
    filter: brightness(0.9);
  }
`
export const StyledFileImg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;

`
export const StyledFileRemove = styled.div<any>`
  width: 16px;
  height: 16px;
  background: ${({theme}) => theme.color.darkgray};
  border-radius: 50%;
  position: absolute;
  right: -5px;
  top: -5px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease-in;

  &:hover {
    transform: scale(1.1);
  }

  > svg {
    width: 10px;

    > path {
      fill: #fff;
    }
  }
`
