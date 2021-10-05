import React from 'react';
import { StyledBox, StyledInput, StyledInputContainer, StyledLabel } from './InputCheckbox.styled';
import { FieldRenderProps } from "react-final-form";
import { IconCheck } from "../../../Icons";
import { ErrorTip } from "../../ErrorTip";

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
    input, meta, label,
  } = props
  const {name, type, value, checked, onChange} = input;

  const error = !meta?.visited && meta?.data?.error ? meta?.data?.error : null;
  const handleClick = () => {
    if (type === 'checkbox') {
      onChange(!checked)
    }
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
