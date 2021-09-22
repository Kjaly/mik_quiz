import React from 'react';
import { StyledTipError } from './ErrorTip.styled';

export interface IErrorTipProps {
  error: string;
}

export const ErrorTip: React.FC<IErrorTipProps> = (props) => {

  const {error} = props;
  return (
    <StyledTipError isActive={!!error}>
      {error}
    </StyledTipError>
  );
};
