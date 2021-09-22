import React, { useRef } from 'react';
import { StyledInput, StyledInputContainer, StyledText } from './InputFile.styled';
import { FieldRenderProps } from 'react-final-form';
import { ErrorTip } from '../../ErrorTip';
import { IconList } from '../../../Icons';

interface IInputTextProps {
  placeholder?: string;
  value: string;
  autoComplete: string;
  uploadText: string;
}

type IFormFinalInputTextProps = IInputTextProps &
  FieldRenderProps<string | number>

export const InputFile: React.FC<IFormFinalInputTextProps> = (props) => {
  const {
    input,
    placeholder,
    uploadText,
    meta,
    completed,
  } = props

  const {onChange, name, value} = input;
  const error = !meta?.visited && !meta?.touched && meta?.data?.error ? meta?.data?.error : null;

  const inputFile = useRef<HTMLInputElement>(null)
  const handleClick = () => {
    inputFile?.current?.click();
  }
  return (
    <StyledInputContainer onClick={handleClick}>
      <StyledInput
        ref={inputFile}
        error={error}
        type={'file'}
        onChange={(e: any) => {
          onChange(e.target.files[0])
        }}
        name={name}
      />
      <StyledText value={!!value || completed}>
        <p>{value || completed ? (uploadText || 'Выбран 1 файл') : (placeholder || 'Выберите файл')}</p><IconList/>

      </StyledText>
      <ErrorTip error={error}/>

    </StyledInputContainer>
  );
};
