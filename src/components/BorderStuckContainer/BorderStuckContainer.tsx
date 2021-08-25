import React from 'react';
import { StyledBorderStuck } from './BorderStuckContainer.styled';

interface IBorderStuckContainerProps {
  inversed?: boolean;
}
export const BorderStuckContainer: React.FC<IBorderStuckContainerProps> = (props) => {
  const {children, inversed} = props;
  return (
    <StyledBorderStuck inversed={inversed}>
      {children}
    </StyledBorderStuck>
  );
};
