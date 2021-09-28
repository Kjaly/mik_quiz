import React, { useEffect, useRef } from 'react';
import { StyledInput, StyledInputContainer, StyledLoader, StyledText } from './InputFile.styled';
import { FieldRenderProps } from 'react-final-form';
import { ErrorTip } from '../../ErrorTip';
import { IconList } from '../../../Icons';
import { getUserUploadStatusSelector } from '../../../store/user/selectors';
import { useSelector } from 'react-redux';
import { Preloader } from '../../Preloader';

interface IInputTextProps {
  placeholder?: string;
  value: string;
  autoComplete: string;
  uploadText: string;
  setError: (value: string) => void;
}

type IFormFinalInputTextProps = IInputTextProps &
  FieldRenderProps<string | number>

export const InputFile: React.FC<IFormFinalInputTextProps> = (props) => {
  const {
    input,
    placeholder,
    uploadText,
    meta,
    accept,
    completed,
    setError,
  } = props
  const uploadStatus = useSelector(getUserUploadStatusSelector)
  const {onChange, name, value} = input;
  const error = !meta?.visited && !meta?.touched && meta?.data?.error ? meta?.data?.error : null;

  const inputFile = useRef<HTMLInputElement>(null)
  const handleClick = () => {
    inputFile?.current?.click();
  }

  useEffect(() => {
    console.log(uploadStatus)
  }, [uploadStatus]);

  const handleChange = (e: any) => {
    setError('')
    const file = e.target.files[0]
    const reader = new FileReader();
    reader.onload = function () {
      onChange(file)
    };
    reader?.readAsArrayBuffer(file);
  }
  return (
    <StyledInputContainer onClick={handleClick}>
      {uploadStatus === 'loading' && (
        <StyledLoader>
          <Preloader/>
        </StyledLoader>
      )}
      <StyledInput
        ref={inputFile}
        error={error}
        type={'file'}
        accept={accept}
        onChange={handleChange}
        name={name}
      />
      <StyledText value={!!value || completed}>
        <p>{value || completed ? (uploadText || 'Выбран 1 файл') : (placeholder || 'Выберите файл')}</p><IconList/>

      </StyledText>
      <ErrorTip error={error}/>

    </StyledInputContainer>
  );
};
