import styled from 'styled-components';

export const StyledProfileImgWrapper = styled.div`
  max-height: 100%;
  max-width: 100%;
  height: 100%;
  width: 100%;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;

  > svg {
    height: 80%;
    fill: ${({theme}) => theme.color.grey};
  }

  ::after {
    position: absolute;
    content: "";
    bottom: 0;
    height: 3px;
    width: 100%;
    background-color: ${({theme}) => theme.color.yellow};
  }
`
export const StyledProfileImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

