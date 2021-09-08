import styled from 'styled-components';

export const StyledProfileWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`
export const StyledProfile = styled.div`
  width: 100%;
  padding: 100px 20px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const StyledProfileForm = styled.div`
  display: grid;
  max-width: 730px;
  width: 100%;
  grid-template-columns:repeat(2, 1fr);
  grid-gap: 20px 30px;
  
`


export const StyledAvatarInput = styled.div`
  visibility: hidden;
  position: absolute;
  z-index: -1;
`
export const StyledImgWrapper = styled.div`
  position: relative;
  width: 250px;
  height: 200px;
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
