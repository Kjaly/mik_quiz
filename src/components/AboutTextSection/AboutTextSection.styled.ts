import styled from 'styled-components';

export const StyledTextSection = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 100px 0;
`
export const StyledImg = styled.div`
  max-width: 415px;
  width: 100%;
  height: auto;
  max-height:230px;
  background-color: ${({theme}) => theme.color.blue};
  position: relative;

  ::after {
    position: absolute;
    content: "";
    bottom: 0;
    height: 3px;
    width: 100%;
    background-color: ${({theme}) => theme.color.yellow};
  }
`
export const StyledText = styled.div`
  max-width: 50%;
  margin-left: 60px;

  > p {
    font-size: 15px;
    margin-bottom: 20px;

    :last-child {
      margin-bottom: 0;
    }
  }
`
