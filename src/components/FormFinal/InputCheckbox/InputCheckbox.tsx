import React, { useState } from 'react';
import { StyledInputContainer, StyledInput, StyledBox } from './InputCheckbox.styled';
import { FieldRenderProps } from "react-final-form";

interface IInputCheckboxProps {
  label?: string;
  value: string;
  type: string,
  checked: boolean,
  onChange?: () => void,
}

type IFormFinalCheckboxRadioProps = IInputCheckboxProps &
  FieldRenderProps<string>;

export const InputCheckbox: React.FC<IFormFinalCheckboxRadioProps> = (props) => {
  const {
    input, meta, placeholder, label, checked, onChange,
  } = props
  const {name, type, value} = input;

  const error = !meta?.visited && !meta?.touched && meta?.data?.error ? meta?.data?.error : null;

  console.log(name);
  return (
    <StyledInputContainer>
      <StyledInput
        value={value}
        type={type}
        checked={checked}
        onChange={onChange}
        name={name}
        placeholder={placeholder}/>
      <StyledBox/>
      {label}
    </StyledInputContainer>
  );
};
