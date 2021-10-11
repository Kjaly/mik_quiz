import React from 'react';
import {
  StyledItemTitle, StyledLinkList, StyledLinksWrapper,
  StyledQuizTextDescription,
  StyledQuizTextSection,
  StyledQuizTextTitle,
  StyledTextItem,
  StyledListItem,
  StyledTextWrapper,
} from './QuizTextSection.styled';
import { useSelector } from 'react-redux';
import { routerSelectors } from '../../store/route';
import { Link } from 'react-router-dom';

interface IQuizTextProps {
  isQuizStarted?: boolean;
}

export const QuizTextSection: React.FC<IQuizTextProps> = (props) => {

  const {isQuizStarted} = props;
  const currentPathname = useSelector(routerSelectors.getLocationPathName);


  const isEssay = currentPathname.includes('essay');
  if (isQuizStarted && !isEssay) return null;
  return (
    <StyledQuizTextSection>
      {isEssay && isQuizStarted ? (
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
                они остались после переезда в Калининградской области, и как они жили в первые послевоенные годы?
              </StyledQuizTextDescription>
            </StyledTextItem>
            <StyledTextItem isEssay={isEssay}>
              <StyledQuizTextTitle>
                Тема 2
              </StyledQuizTextTitle>
              <StyledQuizTextDescription>
                На протяжении многих веков Псков выступал западной окраиной Русской земли. Равным образом сегодня
                Калининград
                – самый западный регион России. Напишите эссе, нацеленное на сравнение того, как близость к Западу
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
            <p>Дорогой участник!</p>
            <p>Поздравляем тебя, ты прошел в следующий этап проекта «Славные дороги прошлого - маршрут в будущее
              России».
              Приглашаем тебя принять участие в межрегиональном слете в г. Калининграде (30 октября) / Пскове (23
              октября
              2021 года). В ходе слета будет проведена конференция, а также организованы бесплатные экскурсии в
              сопровождении экспертов проекта, ты сможешь выбрать или предложить тему видеоролика, посвященного
              военно-историческим туристским маршрутам региона или исторической личности. Ты сможешь получить
              консультацию
              специалистов и наставников по созданию контента.
            </p>
            <p>По результатам этих поездок участники получат задание на
              создание видероликов об исторической личности или месте своего родного края. </p>
            <p>Авторы 10 лучших работ от каждой области получат возможность бесплатно посетить другой регион.</p>
          </StyledQuizTextDescription>

          <StyledLinksWrapper>
            <StyledLinkList>
              <StyledListItem>
                Скачать список{' '}
                <Link to="/files/finalistsKld.docx" target="_blank" download>полуфиналистов
                  Калининграда
                </Link>
              </StyledListItem>
              <StyledListItem>
                Скачать список{' '}
                <Link to="/files/finalistsPskov.docx" target="_blank" download>полуфиналистов
                  Пскова
                </Link>
              </StyledListItem>

            </StyledLinkList>
          </StyledLinksWrapper>
        </StyledTextItem>
      )
      }


    </StyledQuizTextSection>
  );
};
