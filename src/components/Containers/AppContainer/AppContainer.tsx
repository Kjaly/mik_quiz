import React from 'react';
import {StyledWrapper} from './AppContainer.styled'
export const AppContainer:React.FC = (props) => {
  const {children} = props
  return (
    <StyledWrapper>
      {children}
    </StyledWrapper>
  );
};
