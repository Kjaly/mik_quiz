import styled from 'styled-components';
import { device } from '../../theme/devices';

export const StyledFooterBackground = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.color.blue};
`;
export const StyledFooterWrapper = styled.div`
  width: 100%;
  padding: 70px 0;
`;
export const StyledDescriptionWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  margin-bottom: 30px;

  ${device.tablet} {
    flex-direction: row;
  }
`;
export const StyledFooterNav = styled.div`
  padding-bottom: 40px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  ${device.tablet} {
    padding-bottom: 50px;
    flex-direction: row;
  }
`;
export const StyledFooterLogos = styled.div`
  padding-bottom: 40px;

  ${device.tablet} {
    padding-bottom: 50px;
  }
`;

export const StyledLogo = styled.div`
  flex-shrink: 0;
`;
export const StyledNavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 0 1 auto;

  ${device.tablet} {
    flex: 0 1 50%;
    justify-content: flex-end;
    padding: 0 20px;

    > div {
      flex-direction: row;
      align-items: center;
      column-gap: 1em;
    }

    > div > div:not(:last-child)::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 2px;
      opacity: 1;
      background: #ffb801;
      transition: all 0.2s ease-in;
    }
  }
`;

export const StyledAuthListDesktop = styled.div`
  display: none;

  ${device.tabletL} {
    display: flex;
    flex: 0.5;
    justify-content: flex-end;
    align-items: center;

    > div:first-child {
      margin-right: 20px;
    }
  }
`;
export const StyledAuthListMobile = styled(StyledAuthListDesktop)`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 20px;

  ${device.tablet} {
    flex-basis: 50%;
    justify-content: flex-end;

    > div {
      &:first-child {
        margin-right: 20px;
      }
    }
  }

  ${device.tabletL} {
    display: none;
  }
`;

export const StyledFooterDescription = styled.div`
  color: #fff;
  font-size: 12px;
  line-height: 1.5;
  text-align: justify;
  flex-basis: 100%;

  p {
    opacity: 0.4;

    &:first-child {
      opacity: 0.8;
      margin-bottom: 10px;
    }

    > a {
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;

export const StyledFooterCopyrightWrapper = styled.div`
  display: flex;
  color: #fff;
  font-size: 12px;
`;

export const StyledFooterCopyrightLogo = styled.div`
  width: 48px;
  height: 48px;
  margin-right: 15px;
`;

export const StyledFooterCopyrightrDescription = styled.div``;
