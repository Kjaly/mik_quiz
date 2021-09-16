import React, { useState } from 'react';
import {
  StyledBulletItem, StyledButton, StyledQuizAnswers,
  StyledQuizBlock,
  StyledQuizBullets,
  StyledQuizHeaderSection, StyledQuizMainSection, StyledQuizQuestion,
  StyledQuizTitle
} from "./QuizSection.styled";
import { Title } from "../Typography/Title";
import { theme } from "../../theme";
import { QuizSectionItem } from "./QuizSectionItem";

interface IQuizSectionProps {
  questions: Array<number>
}

export const QuizSection: React.FC<IQuizSectionProps> = (props) => {
  const {questions} = props

  const [activeQuestion, setActiveQuestion] = useState(0);
  const answers = [
    'За собой процесс внедрения и модернизации новых предложений',
    'Значимость этих проблем настолько очевидна, что начало повседневной работы по формированию позиции влечет',
    'Значимость этих проблем настолько очевидна, что начало повседневной работы по формированию позиции влечет',
    'За собой процесс внедрения и модернизации новых предложений.'
  ]
  const handleClick = (id: number) => {
    setActiveQuestion(id)
  }
  return (
    <StyledQuizBlock>
      <StyledQuizHeaderSection>
        <StyledQuizTitle>
          <Title color={theme.color.blue}>
            Вопрос 1
          </Title>
        </StyledQuizTitle>
        <StyledQuizBullets>
          {questions.map((item, key) => {
            return (
              <StyledBulletItem onClick={() => handleClick(key)} active={key === activeQuestion} isEnabled={key < 9}
                                key={key}/>
            )
          })}
        </StyledQuizBullets>
      </StyledQuizHeaderSection>
      <StyledQuizMainSection>
        <StyledQuizQuestion>
          Значимость этих проблем настолько очевидна, что начало повседневной работы по формированию позиции влечет за
          собой процесс внедрения и модернизации новых предложений.
        </StyledQuizQuestion>
        <StyledQuizAnswers>
          {answers.map((item) => {
            return <QuizSectionItem text={item}/>
          })}
        </StyledQuizAnswers>

        <StyledButton>

        </StyledButton>
      </StyledQuizMainSection>

    </StyledQuizBlock>

  );
};
