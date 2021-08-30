import React from 'react';
import { StyledInput } from './InputText.styled';
import { StyledInputContainer } from './InputText.styled';
import { FieldRenderProps } from "react-final-form";

interface IInputTextProps {
  placeholder?: string;
  value: string;
}

type IFormFinalInputTextProps = IInputTextProps &
  FieldRenderProps<string | number>

export const InputText: React.FC<IFormFinalInputTextProps> = (props) => {
  const {
    onBlur,
    onFocus,
    input,
    meta,
    onKeyDown,
    withHandleKeyDown,
    placeholder
  } = props

  const { onChange, name, value, type } = input;

  return (
    <StyledInputContainer>
      <StyledInput type={type} onChange={onChange} name={name} placeholder={placeholder} value={value}/>
    </StyledInputContainer>
  );
};
