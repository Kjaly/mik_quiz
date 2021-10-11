import styled from 'styled-components';
import { device } from '../../theme/devices';

export const StyledQuizTextSection = styled.div`
  padding: 50px 0;
  transition: all 0.2s ease-in-out;

`;
export const StyledTextItem = styled.div<{ isEssay?: boolean }>`
  flex: 1;
  margin-bottom: 20px;

  ${device.tablet} {
    flex: ${({isEssay}) => isEssay && 0.5};
    margin-bottom: 0;
  }
`;

export const StyledItemTitle = styled.div`
  font-size: 20px;
  margin-bottom: 20px;
`;
export const StyledTextWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  column-gap: 3em;
  overflow: hidden;
  flex-direction: column;

  ${device.tablet} {
    flex-direction: row;
  }
`;
export const StyledQuizTextTitle = styled.div`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 10px;
`;
export const StyledQuizTextDescription = styled.div`
  text-align: justify;
  margin-bottom: 30px;

  > p {
    margin-bottom: 20px;
  }
`;
export const StyledLinksWrapper = styled.div`
  > p {
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 10px;
  }
`;
export const StyledLinkList = styled.div`

`;

export const StyledListItem = styled.div`
  > a {
    color: ${({theme}) => theme.color.blue};
    text-decoration: underline;
    margin-bottom: 5px;
    cursor: pointer;
  }
`;