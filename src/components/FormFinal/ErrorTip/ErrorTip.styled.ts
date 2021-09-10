import styled from 'styled-components';

interface IErrorTipProps {
  error?: boolean;
  success?: boolean;
}

export const ErrorTip = styled.div<IErrorTipProps>`
  color: ${({ theme, error, success }): string =>
    error ? theme.color.peach : success ? theme.color.green : theme.color.gray};
  font-size: 12px;
  padding-top: 10px;
`;
