import React from 'react';
import { StyledTextareaContainer, StyledTextarea } from './InputTextarea.styled';
import { FieldRenderProps } from "react-final-form";

interface IInputTextareaProps {
  placeholder?: string;
  value: string;
}

type IFormFinalInputTextareaProps = IInputTextareaProps &
  FieldRenderProps<string | number>

export const InputTextarea: React.FC<IFormFinalInputTextareaProps> = (props) => {
  const {
    onBlur,
    onFocus,
    input,
    meta,
    onKeyDown,
    withHandleKeyDown,
    placeholder,
    rows = 3,
    ...customProps
  } = props

  const {onChange, name, value} = input;
  return (
    <StyledTextareaContainer>
      <StyledTextarea rows={rows} onChange={onChange} name={name} placeholder={placeholder} value={value}/>
    </StyledTextareaContainer>
  );
};
