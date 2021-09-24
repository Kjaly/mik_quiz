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
import utc from 'dayjs/plugin/utc';

import titleBackground from '../../assets/images/about/titleBackground.png'
import { ContentWrapper } from "../../components/ContentWrapper";
import { QuizSection } from "../../components/QuizSection";
import { IconArrowRight } from "../../Icons";
import { QuizTextSection } from '../../components/QuizTextSection';
import dayjs from "dayjs";
import { Button } from "../../components/Button";
import { theme } from "../../theme";
import { useDispatch, useSelector } from "react-redux";
import { modalsActions } from "../../store/modals/actions";
import { Timer } from "../../components/Timer";
import { routerSelectors } from "../../store/route";
import { fetchQuizRequest } from "../../store/quiz/actions";
import { getQuizSelector } from "../../store/quiz/selectors";


export const Quiz: React.FC = () => {
  dayjs.extend(utc);

  const dispatch = useDispatch()
  const [isQuizStarted, setIsQuizStarted] = useState(false);
  const startDate = dayjs('2021-09-25T06:00:00.000Z').unix();
  const finishDate = dayjs('2021-09-25T18:00:00.000Z').unix();

  const currentPathname = useSelector(routerSelectors.getLocationPathName)
  const quiz = useSelector(getQuizSelector)

  const isEssay = currentPathname.includes('essay')

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

  console.log(dayjs().unix());
  console.log(dayjs.utc(), 'test');
  console.log(1)
  const handleStartQuiz = () => {
    const isTestPage = currentPathname.includes('/test')
    if (dayjs().unix() < startDate && !isTestPage) {
      return dispatch(modalsActions.openModalAction({
        name: 'quizAlertModal',
        props: {text: 'Дорогой участник викторины по истории России! Доступ для регистрации и участия в викторине будет открыт 25 сентября с 9:00 до 21:00 (время московское)'}
      }))
    }
    if (dayjs().unix() > finishDate && !isTestPage) {
      return dispatch(modalsActions.openModalAction({
        name: 'quizAlertModal',
        props: {text: 'Время прохождения Викторины истекло!'}
      }))
    }
    if (!quiz.id) {
      dispatch(fetchQuizRequest())
    }
  }


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
                <Timer startTime={quiz?.user_answer?.created_at}/>
              </StyledQuizTimer>
              <QuizSection isEssay={isEssay} questions={quiz?.questions} id={quiz?.id}/>
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
