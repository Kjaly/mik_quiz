import React from 'react';
import { InputCheckbox } from "../../FormFinal/InputCheckbox";
import { Field } from "react-final-form";
import { StyledQuizItem } from './QuizSectionItem.styled';
import { IOption } from "../../../store/quiz/types";

interface IQuizSectionItemProps {
  answer: IOption;
  questionId: number;
  activeValue: number;
}

export const QuizSectionItem: React.FC<IQuizSectionItemProps> = (props) => {

  const {answer, questionId} = props
  return (
    <StyledQuizItem>
      <Field
        name={`quest_${questionId}`}
        component={InputCheckbox}
        type="radio"
        label={answer.text}
        value={answer.id.toString()}
      />
    </StyledQuizItem>
  );
};
