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

import titleBackground from '../../assets/images/about/titleBackground.png'
import { ContentWrapper } from "../../components/ContentWrapper";
import { QuizSection } from "../../components/QuizSection";
import { constants } from '../../contsants'
import { IconArrowRight, IconClock } from "../../Icons";
import { QuizTextSection } from '../../components/QuizTextSection';
import dayjs from "dayjs";
import { Button } from "../../components/Button";
import { theme } from "../../theme";
import { useDispatch, useSelector } from "react-redux";
import { modalsActions } from "../../store/modals/actions";
import { Timer } from "../../components/Timer";
import { routerSelectors } from "../../store/route";


export const Quiz: React.FC = () => {

  const dispatch = useDispatch()
  const [isQuizStarted, setIsQuizStarted] = useState(false);
  const [currentDate, setCurrentDate] = useState(dayjs().unix());
  const startDate = dayjs('2021-09-25T06:00:00.000Z').unix();
  // const startDate = dayjs('2021-09-20T11:02:00.000Z').unix();
  const finishDate = dayjs('2021-09-25T18:00:00.000Z').unix();
  // const finishDate = dayjs('2021-09-20T11:05:00.000Z').unix();

  const currentPathname = useSelector(routerSelectors.getLocationPathName)

  const isEssay = currentPathname.includes('essay')


  useEffect(() => {
    setIsQuizStarted(!!localStorage.getItem('isQuizStarted'))
  }, []);




  const handleStartQuiz = () => {

    if (dayjs().unix() < startDate) {
      return dispatch(modalsActions.openModalAction({
        name: 'quizAlertModal',
        props: {text: 'Дорогой участник викторины по истории России! Доступ для регистрации и участия в викторине будет открыт 25 сентября с 9:00 до 21:00 (время московское)'}
      }))
    }
    if (dayjs().unix() > finishDate) {
      return dispatch(modalsActions.openModalAction({
        name: 'quizAlertModal',
        props: {text: 'Доступ для регистрации и участия в викторине закрыт'}
      }))
    }
    localStorage.setItem('isQuizStarted', 'true')
    setIsQuizStarted(true)
  }

  const {questions} = constants
  return (
    <StyledQuiz>
      <TitleBanner img={titleBackground}>Викторина
        <StyledTitleDescription>
          Значимость этих проблем настолько очевидна, что начало повседневной работы по формированию позиции влечет
          за
          собой процесс внедрения и модернизации новых предложений.
        </StyledTitleDescription>
      </TitleBanner>
      <ContentWrapper>
        <QuizTextSection isQuizStarted={isQuizStarted}/>
        {isQuizStarted ? (
          <>
            <StyledQuizWrapper>
              <StyledQuizTimer isEssay={isEssay}>
                <Timer/>
              </StyledQuizTimer>
              <QuizSection isEssay={isEssay} questions={questions}/>
            </StyledQuizWrapper>
          </>) : (
          <StyledEarlySection>
            <StyledButton>
              <Button
                reversed
                icon={IconArrowRight}
                background={theme.color.yellow}
                title={'Учавствовать'}
                color={'#fff'}
                onClick={handleStartQuiz}/>
            </StyledButton>
          </StyledEarlySection>
        )}
      </ContentWrapper>
    </StyledQuiz>
  );
};
