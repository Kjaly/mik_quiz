import React, { useEffect, useState } from 'react';
import {
  StyledButton,
  StyledEarlySection,
  StyledQuiz,
  StyledQuizTimer,
  StyledQuizWrapper,
  StyledTitleDescription
} from './Quiz.styled';
import { TitleBanner } from '../../components/TitleBanner';
import { history } from '../../store'

import titleBackground from '../../assets/images/about/titleBackground.png'
import { ContentWrapper } from '../../components/ContentWrapper';
import { QuizSection } from '../../components/QuizSection';
import { IconArrowRight } from '../../Icons';
import { QuizTextSection } from '../../components/QuizTextSection';
import { Button } from '../../components/Button';
import { theme } from '../../theme';
import { useDispatch, useSelector } from 'react-redux';
import { Timer } from '../../components/Timer';
import { routerSelectors } from '../../store/route';
import { fetchQuizRequest, submitQuizFailure } from '../../store/quiz/actions';
import { getQuizSelector } from '../../store/quiz/selectors';
import { getUserIdSelector } from '../../store/user/selectors';
import { IAnswer } from '../../components/QuizSection/QuizSection';
import { modalsActions } from '../../store/modals/actions';


export const Quiz: React.FC = () => {

  const dispatch = useDispatch()
  const isAuth = useSelector(getUserIdSelector);
  const [isQuizStarted, setIsQuizStarted] = useState(false);
  const [pageIsFocus, setPageIsFocus] = useState(true);

  // const startDate = dayjs('2021-09-25T06:00:00.000Z').unix();
  // const finishDate = dayjs('2021-09-25T18:00:00.000Z').unix();
  window.onblur = () => {
    setPageIsFocus(false)
  };
  window.onfocus = () => {
    setPageIsFocus(true)
  };

  useEffect(() => {
    if (isQuizStarted && pageIsFocus) {
      dispatch(fetchQuizRequest())
    }
  }, [pageIsFocus]);

  const currentPathname = useSelector(routerSelectors.getLocationPathName)
  const quiz = useSelector(getQuizSelector)

  const isEssay = currentPathname.includes('essay')

  useEffect(() => {
    if (!isAuth) {
      setIsQuizStarted(false)
    }
  }, [isAuth]);

  useEffect(() => {
    setIsQuizStarted(!!localStorage.getItem('isQuizStarted'))
    if (!!localStorage.getItem('isQuizStarted') && !quiz.id) {
      dispatch(fetchQuizRequest())
    }
  }, []);

  useEffect(() => {
    if (!isQuizStarted && quiz.id) {
      setIsQuizStarted(true)
    }
  }, [quiz]);


  const handleStartQuiz = () => {
    history.push('/quiz')
      // dispatch(submitQuizFailure())
      // localStorage.removeItem('isQuizStarted')
      // localStorage.removeItem('answers')
      // return dispatch(modalsActions.openModalAction({
      //   name: 'quizAlertModal',
      //   props: {text: 'Время прохождения Викторины истекло!'}
      // }))
    if (!quiz.id) {
      dispatch(fetchQuizRequest())
    }
  }

  const [answers, setAnswers] = useState<Array<IAnswer>>([]);
  const [essay, setEssay] = useState(localStorage.getItem('essay') || '');

  useEffect(() => {
    localStorage.setItem('essay', essay);
  }, [essay]);


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
        {isQuizStarted ? (
          <>
            <StyledQuizWrapper>
              <StyledQuizTimer isEssay={isEssay}>
                <Timer
                  id={quiz?.id}
                  answers={answers}
                  essay={essay}
                  startTime={quiz?.user_answer?.created_at}/>
              </StyledQuizTimer>
              <QuizSection
                isEnded={quiz?.isEnded}
                essay={essay}
                setEssay={setEssay}
                answers={answers}
                setAnswers={setAnswers} isEssay={isEssay} questions={quiz?.questions} id={quiz?.id}/>
            </StyledQuizWrapper>
          </>) : (
          <StyledEarlySection>
            <StyledButton>
              <Button
                reversed
                icon={IconArrowRight}
                background={theme.color.yellow}
                title={'Участвовать'}
                color={'#fff'}
                onClick={handleStartQuiz}/>
            </StyledButton>
          </StyledEarlySection>
        )}
      </ContentWrapper>
    </StyledQuiz>
  );
};
