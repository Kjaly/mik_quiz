import styled from 'styled-components';

export const StyledAlert = styled.div<{ isShown?: boolean }>`
  position: fixed;
  top: 3%;
  right: ${({isShown}) => isShown ? '5%' : '-50%'};
  background-color: ${({theme}) => theme.color.green};
  padding: 15px 30px;
  border-radius: 5px;
  color: #fff;
  z-index: 5;

  transform: ${({isShown}) => isShown ? 'skew(0deg, 0deg)' : 'skew(50deg, 0deg)'};
  transition: all .3s ease-in-out;
`
