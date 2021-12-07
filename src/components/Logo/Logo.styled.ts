import styled from 'styled-components';

export const StyledLogo = styled.div<{ logo: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: ${({ logo }) => {
    return {
      default: '210px',
      nationalProjects: 'auto',
    }[logo];
  }};
  height: ${({ logo }) => {
    return {
      default: '54px',
      nationalProjects: 'auto',
    }[logo];
  }};
  max-width: ${({ logo }) => {
    return {
      default: 'auto',
      nationalProjects: '140px',
    }[logo];
  }};
  cursor: pointer;
  > img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;
