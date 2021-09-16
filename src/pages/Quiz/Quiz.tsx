import React from 'react';
import { StyledQuiz, StyledTitleDescription } from './Quiz.styled';
import { TitleBanner } from '../../components/TitleBanner';

import titleBackground from '../../assets/images/about/titleBackground.png'
import { ContentWrapper } from "../../components/ContentWrapper";
import { QuizSection } from "../../components/QuizSection";

const questions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]

export const Quiz: React.FC = () => {


  return (
    <StyledQuiz>
      <TitleBanner img={titleBackground}>Заголовок
        <StyledTitleDescription>
          Значимость этих проблем настолько очевидна, что начало повседневной работы по формированию позиции влечет за
          собой процесс внедрения и модернизации новых предложений.
        </StyledTitleDescription>
      </TitleBanner>
      <ContentWrapper>
        <QuizSection questions={questions}/>
      </ContentWrapper>

    </StyledQuiz>
  );
};
