import styled from 'styled-components';

export const StyledPhotoDropZone = styled.div<{ isDragActive: boolean }>`
  width: 100%;
  height: 100px;
  background-color: ${({theme}) => theme.color.darkwhite};
  border: 1px dashed ${({theme}) => theme.color.darkgray};
  padding: 30px;
  display: flex;
  filter: brightness(${({isDragActive}) => isDragActive && 0.9});

`
export const StyledButton = styled.div`
  max-width: 150px;
  margin-right: 33px;

  > div {
    height: 40px;
    padding: 15px 20px;

    > a {
      font-size: 12px;
    }
  }
`
export const StyledTextZone = styled.div`
  > p {
    font-size: 11px;
    font-weight: 500;
    text-transform: lowercase;
  }

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`
export const StyledAccepted = styled.div`
  font-size: 10px;
  opacity: 0.8;
  margin-right: 10px;
`
export const StyledSettings = styled.div`
  display: flex;
`
