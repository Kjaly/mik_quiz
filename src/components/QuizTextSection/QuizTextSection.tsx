import React from 'react';
import {
  StyledItemTitle,
  StyledQuizTextDescription,
  StyledQuizTextSection,
  StyledQuizTextTitle,
  StyledTextItem,
  StyledTextWrapper
} from "./QuizTextSection.styled";
import { useSelector } from "react-redux";
import { routerSelectors } from "../../store/route";

interface IQuizTextProps {
  isQuizStarted?: boolean
}

export const QuizTextSection: React.FC<IQuizTextProps> = (props) => {

  const {isQuizStarted} = props
  const currentPathname = useSelector(routerSelectors.getLocationPathName)


  const isEssay = currentPathname.includes('essay')
  if (isQuizStarted && !isEssay) return null;
  return (
    <StyledQuizTextSection>
      {isEssay ? (
        <>
          <StyledItemTitle>
            Напишите эссе на одну из двух предложенных тем. Объем письменной работы – не более 800 знаков.
          </StyledItemTitle>
          <StyledTextWrapper>
            <StyledTextItem isEssay={isEssay}>
              <StyledQuizTextTitle>
                Тема 1
              </StyledQuizTextTitle>
              <StyledQuizTextDescription>
                Среди первых переселенцев в Калининградскую область были жители десятков областей Советского Союза, в
                том
                числе, и Псковской. Напишите, как вы думаете, что подвигло этих людей бросить свои родные земли и
                отправиться
                в неизвестность, на чужую землю, где, к тому же, еще жили их вчерашние враги - немцы. Почему, на ваш
                взгляд,
                они остались после переезда в Калининградской области и как они жили в первые послевоенные годы?
              </StyledQuizTextDescription>
            </StyledTextItem>
            <StyledTextItem isEssay={isEssay}>
              <StyledQuizTextTitle>
                Тема 2
              </StyledQuizTextTitle>
              <StyledQuizTextDescription>
                На протяжении многих веков Псков выступал западной окраиной Русской земли. Равным образом сегодня
                Калининград
                – самый западный регион России. Напишите эссе, нацеленное на сравнении того, как близость к западу
                осмысляется
                сегодня в обоих регионах? Какие исторические образы, примеры и события активно используются для
                осмысления
                своего окраинного положения?
              </StyledQuizTextDescription>
            </StyledTextItem>
          </StyledTextWrapper>
        </>
      ) : (
        <StyledTextItem>
          <StyledQuizTextDescription>
            Дорогой участник викторины по истории России! Ты зарегистрировался и можешь
            перейти к заданиям. Обрати внимание на то, что на ответы и выполнение творческой
            части викторины у тебя есть всего 90 минут. Мы подготовили 20 вопросов,
            затрагивающих восемь столетий истории Отечества, а также предлагаем поразмыслить на
            одну из двух тем, подготовленных нашими экспертами. У тебя есть всего одна попытка,
            чтобы ответить правильно. Эссе не должно быть слишком длинным – не более 800 знаков.
            <br/>
            Желаем удачи!
          </StyledQuizTextDescription>
        </StyledTextItem>
      )
      }


    </StyledQuizTextSection>
  );
};
