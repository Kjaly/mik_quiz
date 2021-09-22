import styled from 'styled-components';
import { device } from '../../theme/devices';

export const StyledProfileWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`
export const StyledProfile = styled.div`
  width: 100%;
  padding: 100px 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  ${device.tablet} {
    flex-direction: row;
  }
`

export const StyledProfileFormWrapper = styled.div`
  flex-basis: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  ${device.tablet} {
    flex-basis: 50%;
  }

  ${device.desktop} {
    flex-basis: 70%;
  }

`
export const StyledProfileForm = styled.div`
  > div {
    margin-bottom: 20px;
  }

  width: 100%;

  ${device.desktop} {
    display: grid;
    max-width: 730px;
    grid-template-columns:repeat(2, 1fr);
    grid-gap: 20px 30px;
  }

`

export const StyledButton = styled.div`
  max-width: 140px;
`
export const StyledAvatarInput = styled.div`
  visibility: hidden;
  position: absolute;
  z-index: -1;
`
export const StyledImgWrapper = styled.div`
  position: relative;
  height: 260px;
  margin-bottom: 20px;
  width: 100%;
  background-color: ${({theme}) => theme.color.darkwhite};

  ${device.tablet} {
    flex-basis: 45%;
    height: 200px;
    align-self: flex-start;

  }

  ${device.desktop} {
    flex-basis: 250px;
  }

`
export const StyledIcon = styled.div`
  position: absolute;
  width: 42px;
  height: 42px;
  right: 10px;
  z-index: 1;
  bottom: -15px;
  border-radius: 50%;
  border: 2px solid #fff;
  background: ${({theme}) => theme.color.blue};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all .2s ease-in-out;

  :hover {
    background: ${({theme}) => theme.color.yellow};

  }

  > svg {
    height: 14px;
  }
`
