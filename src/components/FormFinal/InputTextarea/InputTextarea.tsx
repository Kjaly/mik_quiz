import React, { useEffect, useState } from 'react';
import { StyledTextareaContainer, StyledTextarea, StyledTextCounter } from './InputTextarea.styled';
import { FieldRenderProps } from "react-final-form";

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
    meta,
    placeholder,
    rows = 3,
    maxCount = 800,
    ...customProps
  } = props


  const {onChange, name, value} = input;
  const [letterCount, setLetterCount] = useState(0);
  const [spaceCount, setSpaceCount] = useState(0);
  useEffect(() => {
    if (typeof value === 'string') {
      setLetterCount(value.length - spaceCount)
    }
  }, [value]);


  const handleChange = (e: React.KeyboardEvent) => {
    const target = e.target as HTMLTextAreaElement
    if (letterCount === maxCount && target.value.length >= letterCount) {
      return null;
    }
    setSpaceCount(target?.value?.match(/\s/g)?.length || 0)
    const currentValue = target.value.substr(0, maxCount + spaceCount)
    const currentEvent = {...e, target: {...e.target, value: currentValue}}
    onChange(currentEvent)
  }

  return (
    <StyledTextareaContainer>
      <StyledTextarea rows={rows} onChange={handleChange} name={name} placeholder={placeholder} value={value}/>
      <StyledTextCounter>{letterCount} / {maxCount}</StyledTextCounter>
    </StyledTextareaContainer>
  );
};
