import React from 'react';
import { StyledBox, StyledInput, StyledInputContainer, StyledLabel } from './InputCheckbox.styled';
import { FieldRenderProps } from "react-final-form";
import { IconCheck } from "../../../Icons";

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

  const error = !meta?.visited && !meta?.touched && meta?.data?.error ? meta?.data?.error : null;
  console.log(checked)
  console.log(input)
  return (
    <StyledInputContainer>
      <StyledInput
        value={value}
        type={type}
        checked={checked}
        onChange={(e) => {
          console.log(e);
          onChange(e)
        }}
        name={name}
        placeholder={placeholder}/>
      <StyledBox checked={checked}>
        <IconCheck/>
      </StyledBox>
      <StyledLabel checked={checked}>{label}</StyledLabel>
    </StyledInputContainer>
  );
};
