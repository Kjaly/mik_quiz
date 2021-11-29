import styled from 'styled-components';

export const StyledLogo = styled.div<{ name: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: ${({ name }) => {
    return {
      default: '210px',
      nationalProjects: 'auto',
    }[name];
  }};
  height: ${({ name }) => {
    return {
      default: '54px',
      nationalProjects: 'auto',
    }[name];
  }};
  max-width: ${({ name }) => {
    return {
      default: 'auto',
      nationalProjects: '210px',
    }[name];
  }};
  cursor: pointer;
  > img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;
