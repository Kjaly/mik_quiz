import React, { useState } from 'react';
import { StyledQuiz, StyledQuizTimer, StyledQuizWrapper, StyledTitleDescription } from './Quiz.styled';
import { TitleBanner } from '../../components/TitleBanner';

import titleBackground from '../../assets/images/about/titleBackground.png'
import { ContentWrapper } from "../../components/ContentWrapper";
import { QuizSection } from "../../components/QuizSection";
import { constants } from '../../contsants'
import { IconClock } from "../../Icons";

export const Quiz: React.FC = () => {
  const [timer, setTimer] = useState(Date.now() / 1000 | 0);
  // const [timer, setTimer] = useState(Date.now() / 1000 | 0);
  const timeToAnswer = 60 * 90;

  console.log(timer);
  console.log(timer + timeToAnswer);
  const minutes = Math.floor((timer + timeToAnswer) / 60)
  const seconds = Math.floor((timer + timeToAnswer) % 60)

  console.log()
  console.log(minutes);
  const {questions} = constants
  return (
    <StyledQuiz>
      <TitleBanner img={titleBackground}>Заголовок
        <StyledTitleDescription>
          Значимость этих проблем настолько очевидна, что начало повседневной работы по формированию позиции влечет за
          собой процесс внедрения и модернизации новых предложений.
        </StyledTitleDescription>
      </TitleBanner>
      <ContentWrapper>
        <StyledQuizWrapper>
          <StyledQuizTimer>
            <IconClock/>78:30
          </StyledQuizTimer>
          <QuizSection questions={questions}/>
        </StyledQuizWrapper>

      </ContentWrapper>
    </StyledQuiz>
  );
};
