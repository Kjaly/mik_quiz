import styled from 'styled-components';
import { device } from '../../../theme/devices';

export const StyledRemovePublication = styled.div`
  background-color: #fff;
  padding: 30px;
  max-width: 560px;
  width: 100%;

  > p {
    margin-right: 1em;
    width: 100%;
    white-space: pre-wrap;
  }

  ${device.tablet} {
    font-size: 20px;
  }
`;

export const StyledCloseIcon = styled.div`
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }

  > svg {
    width: 20px;

    > path {
      fill: ${({theme}) => theme.color.black};
      opacity: 0.2;
    }
  }

`;


export const StyledTitle = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 30px;
  font-size: 20px;
  color: ${({theme}) => theme.color.blue};

  ${device.tablet} {
    font-size: 30px;
  }
`;

export const StyledButtonsBlock = styled.div`
  display: flex;
  column-gap: 1em;

`;
export const StyledButton = styled.div`
  flex: 0.5;
`;
