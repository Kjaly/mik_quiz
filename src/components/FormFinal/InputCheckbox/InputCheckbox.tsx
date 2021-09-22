import React, { useState } from 'react';
import { StyledBox, StyledInput, StyledInputContainer, StyledLabel } from './InputCheckbox.styled';
import { FieldRenderProps } from "react-final-form";
import { IconCheck } from "../../../Icons";
import { ErrorTip } from "../../ErrorTip";
import { onFocus } from "@reduxjs/toolkit/dist/query/core/setupListeners";

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
    input, meta, placeholder, label,
  } = props
  const {name, type, value, checked, onChange} = input;

  const error = !meta?.visited && meta?.data?.error ? meta?.data?.error : null;
  const handleClick = (e: React.MouseEvent<HTMLLabelElement, MouseEvent>) => {
    onChange(!checked)
  }
  return (
    <StyledInputContainer onClick={handleClick}>
      <StyledInput
        id={name}
        value={value}
        type={type}
        onChange={onChange}
        name={name}
      />
      <StyledBox checked={checked}>
        <IconCheck/>
      </StyledBox>
      <StyledLabel checked={checked}>{label}</StyledLabel>
      <ErrorTip error={error}/>
    </StyledInputContainer>
  );
};
