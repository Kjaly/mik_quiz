import React from 'react';
import { StyledInput } from './InputText.styled';
import { StyledInputContainer } from './InputText.styled';
import { FieldRenderProps } from "react-final-form";
import { ErrorTip } from "../../ErrorTip";

interface IInputTextProps {
  placeholder?: string;
  value: string;
}

type IFormFinalInputTextProps = IInputTextProps &
  FieldRenderProps<string | number>

export const InputText: React.FC<IFormFinalInputTextProps> = (props) => {
  const {
    input,
    placeholder,
    meta,
    ...customProps
  } = props
  const {onChange, name, value, type, onBlur, onFocus} = input;
  const error = !meta?.visited && !meta?.touched && meta?.data?.error ? meta?.data?.error : null;

  return (
    <StyledInputContainer>
      <StyledInput
        onFocus={onFocus}
        onBlur={onBlur}
        error={error}
        autoComplete={'off'}
        view={customProps?.view}
        type={type}
        onChange={onChange}
        name={name}
        placeholder={placeholder}
        value={value}/>
      <ErrorTip error={error}/>

    </StyledInputContainer>
  );
};
