import React, { useEffect, useState } from 'react';
import { StyledQuiz, StyledTitleDescription } from './Quiz.styled';
import { TitleBanner } from '../../components/TitleBanner';

import titleBackground from '../../assets/images/about/titleBackground.png';
import { ContentWrapper } from '../../components/ContentWrapper';
import { QuizTextSection } from '../../components/QuizTextSection';
import { useDispatch, useSelector } from 'react-redux';
import { fetchQuizRequest } from '../../store/quiz/actions';
import { getQuizSelector } from '../../store/quiz/selectors';
import { getUserIdSelector } from '../../store/user/selectors';


export const Quiz: React.FC = () => {

  const dispatch = useDispatch();
  const isAuth = useSelector(getUserIdSelector);
  const [isQuizStarted, setIsQuizStarted] = useState(false);
  const [pageIsFocus, setPageIsFocus] = useState(true);

  window.onblur = () => {
    setPageIsFocus(false);
  };
  window.onfocus = () => {
    setPageIsFocus(true);
  };

  useEffect(() => {
    if (isQuizStarted && pageIsFocus) {
      dispatch(fetchQuizRequest());
    }
  }, [pageIsFocus]);

  const quiz = useSelector(getQuizSelector);

  useEffect(() => {
    if (!isAuth) {
      setIsQuizStarted(false);
    }
  }, [isAuth]);

  useEffect(() => {
    setIsQuizStarted(!!localStorage.getItem('isQuizStarted'));
    if (!!localStorage.getItem('isQuizStarted') && !quiz.id) {
      dispatch(fetchQuizRequest());
    }
  }, []);

  useEffect(() => {
    if (!isQuizStarted && quiz.id) {
      setIsQuizStarted(true);
    }
  }, [quiz]);





  return (
    <StyledQuiz>
      <TitleBanner img={titleBackground}>Викторина
        <StyledTitleDescription>
          {/*Значимость этих проблем настолько очевидна, что начало повседневной работы по формированию позиции влечет*/}
          {/*за*/}
          {/*собой процесс внедрения и модернизации новых предложений.*/}
        </StyledTitleDescription>
      </TitleBanner>
      <ContentWrapper>
        <QuizTextSection isQuizStarted={isQuizStarted}/>
      </ContentWrapper>
    </StyledQuiz>
  );
};
