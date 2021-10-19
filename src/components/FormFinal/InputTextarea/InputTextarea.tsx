import React, { useEffect, useState } from 'react';
import { StyledTextareaContainer, StyledTextarea, StyledTextCounter } from './InputTextarea.styled';
import { FieldRenderProps } from 'react-final-form';
import { ErrorTip } from '../../ErrorTip';

interface IInputTextareaProps {
  placeholder?: string;
  value: string;
  maxCount: number;
}

type IFormFinalInputTextareaProps = IInputTextareaProps &
  FieldRenderProps<string | number>

export const InputTextarea: React.FC<IFormFinalInputTextareaProps> = (props) => {
  const {
    input,
    placeholder,
    rows = 3,
    maxCount = 800,
    customOnChange,
    meta
  } = props


  const {onChange, name, value, onBlur, onFocus} = input;
  const [letterCount, setLetterCount] = useState(0);
  const [spaceCount, setSpaceCount] = useState(0);
  useEffect(() => {
    if (typeof value === 'string') {
      setLetterCount(value.length - spaceCount)
    }
  }, [value]);


  const handleChange = (e: React.KeyboardEvent) => {
    const target = e.target as HTMLTextAreaElement
    setSpaceCount(target?.value?.match(/\s/g)?.length || 0)
    const currentValue = target.value.substr(0, maxCount + (target?.value?.match(/\s/g)?.length || 0))
    const currentEvent = {...e, target: {...e.target, value: currentValue}}
    if (customOnChange) {
      customOnChange(currentValue)
    }
    onChange(currentEvent)
  }
  const error = (meta.modified && meta.error) || (!meta?.visited && !meta?.touched && meta?.data?.error ? meta?.data?.error : null);

  return (
    <StyledTextareaContainer>
      <StyledTextarea
        error={error}
        onFocus={onFocus}
        onBlur={onBlur}
        maxLength={maxCount + spaceCount}
        rows={rows}
        onChange={handleChange}
        name={name}
        placeholder={placeholder}
        value={value}
      />
      <StyledTextCounter>{letterCount} / {maxCount}</StyledTextCounter>
      <ErrorTip error={error}/>

    </StyledTextareaContainer>
  );
};
