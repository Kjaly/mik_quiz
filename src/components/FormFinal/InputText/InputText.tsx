import React from 'react';
import { StyledInput } from './InputText.styled';
import { StyledInputContainer } from './InputText.styled';
import { FieldRenderProps } from 'react-final-form';
import { ErrorTip } from '../../ErrorTip';
import { string } from 'yup';

interface IInputTextProps {
  placeholder?: string;
  value: string;
  autoComplete: string;
  syncRegexValidate?: (value: string) => string | undefined;
}

type IFormFinalInputTextProps = IInputTextProps &
  FieldRenderProps<string>

export const InputText: React.FC<IFormFinalInputTextProps> = (props) => {
  const {
    input,
    placeholder,
    meta,
    autoComplete,
    maxLength,
    min,
    max,
    syncRegexValidate,
    ...customProps
  } = props;

  const {onChange, name, value, type, onBlur, onFocus} = input;
  const error = (meta.modified && meta.error) || (!meta?.visited && !meta?.touched && meta?.data?.error ? meta?.data?.error : null);
  return (
    <StyledInputContainer>
      <StyledInput
        onFocus={onFocus}
        maxLength={maxLength}
        onBlur={onBlur}
        error={error}
        autoComplete={autoComplete}
        view={customProps?.view}
        type={type}
        onChange={onChange}
        name={name}
        min={min}
        max={max}
        placeholder={placeholder}
        value={value}/>
      <ErrorTip error={error}/>

    </StyledInputContainer>
  );
};
