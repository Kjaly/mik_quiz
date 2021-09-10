import styled from "styled-components";


export const StyledPreview = styled.div<{ isEmpty: boolean }>`
  display: ${({isEmpty}) => isEmpty ? 'flex' : 'none'};
  height: 100%;
  justify-content: flex-start;
  position: relative;
  margin-left: 80px;

  > p {
    font-size: 20px;
    font-weight: 700;
    max-width: 255px;

  }

`
export const StyledUploadFile = styled.div`
  display: flex;
  align-items: flex-start;
  color: ${({theme}) => theme.color.blue};
  width: 100%;
`

export const StyledButtonWrapper = styled.div`
  height: 168px;
  width: 100%;
  max-width: 255px;
  background-color: rgba(61, 79, 135, 0.07);
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transition: all .2s ease-in-out;
  cursor: pointer;

  :hover {
    transform: scale(0.98);
    box-shadow: 0 5px 10px 2px rgba(34, 60, 80, 0.2) inset;


  }

  > svg {
    height: 40px;
    width: 40px;

    > g {
      path {
        fill: ${({theme}) => theme.color.blue};
      }
    }
  }

  > p {
    margin-top: 6px;
    color: ${({theme}) => theme.color.blue};
    font-size: 15px;
    text-align: center;
  }

`

export const StyledIcon = styled.div`
  width: 120px;
  margin: 0 10px 0 50px;
  transition: all 0.2s ease-in;
  position: absolute;
  bottom: -80px;
  left: -90px;
`
