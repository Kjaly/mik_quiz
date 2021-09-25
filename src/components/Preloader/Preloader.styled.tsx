import styled from 'styled-components';

export const StyledPreloader = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(61, 79, 135, 0.2);
  > svg{
    width: 100%;
    height: 100%;
    max-width: 64px;
    object-fit: contain;
  }
`
