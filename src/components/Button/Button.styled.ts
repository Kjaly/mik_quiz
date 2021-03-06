import styled from 'styled-components';
import { IButtonProps } from './Button';
import { device } from '../../theme/devices';


export const StyledIcon = styled.div<Partial<IButtonProps>>`
  margin: ${({reversed}) => reversed ? '0 0 0 10px' : '0 10px 0 0'};
  flex: 1 0 auto;
  height: 24px;
  width: 24px;
  max-width: 24px;
  background: ${({view, borderColor}) => view === 'bordered' ? borderColor || '#fff' : '#fff'};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  & svg {
    height: 12px;
    width: 12px;

    > path {
      fill: ${({
        view,
        color,
        theme,
        iconColor,
      }) => iconColor ? iconColor : view === 'bordered' && color || theme.color.yellow};
    }
  }
`;
export const StyledTitle = styled.a`
  font-weight: 700;
  font-size: 15px;`;

export const StyledButton = styled.div<Partial<IButtonProps>>`
  display: flex;
  flex-direction: ${({reversed}) => reversed ? 'row-reverse' : 'row'};
  align-items: center;
  justify-content: center;
  padding: 15px 20px;
  color: ${({color}) => color ? color : '#000'};
  height: 54px;
  cursor: pointer;
  transition: all .2s ease-in;
  background: ${({background}) => background};
  border: ${({view, borderColor}) => view === 'bordered' && `1px solid ${borderColor || '#000'}`};
  opacity: ${({disabled}) => disabled ? 0.5 : 1};
  text-decoration: none;

  :hover {
    background: ${({view, color}) => view === 'bordered' && color};
    color: ${({view}) => view === 'bordered' && '#fff'};

    filter: brightness(0.9);

    ${StyledIcon} {
      path {
        fill: ${({view, color, iconColor}) => iconColor ? color : view === 'bordered' && '#fff'};
      }
    }
  }

  ${device.tablet} {
    padding: 15px 30px;
  }
`;
