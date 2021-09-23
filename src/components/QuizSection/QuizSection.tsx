import React, { useEffect, useState } from 'react';
import {
  StyledBulletItem, StyledButton,
  StyledButtonBlock,
  StyledQuizAnswers,
  StyledQuizBlock,
  StyledQuizBullets,
  StyledQuizHeaderSection,
  StyledQuizMainSection,
  StyledQuizQuestion,
  StyledDecorativeWrapper,
  StyledQuizTitle,
  StyledTextarea,
  StyledQuizWrapper
} from "./QuizSection.styled";
import { Title } from "../Typography/Title";
import { theme } from "../../theme";
import { QuizSectionItem } from "./QuizSectionItem";
import { Field, Form } from 'react-final-form';
import { Swiper, SwiperSlide } from "swiper/react";
import { Button } from "../Button";
import { IconArrowRight } from "../../Icons";
import { InputTextarea } from "../FormFinal/InputTextarea";
import { history } from '../../store'
import { useDispatch, useSelector } from "react-redux";
import { routerSelectors } from "../../store/route";
import { DecorativeLines } from "../DecorativeLines";
import { IQuestion } from "../../store/quiz/types";
import { submitQuizRequest } from "../../store/quiz/actions";


interface IQuizSectionProps {
  questions: Array<IQuestion> | null;
  isEssay: boolean;
  id: number | null;
}

export const QuizSection: React.FC<IQuizSectionProps> = (props) => {
  const {questions, isEssay, id} = props
  const currentPathname = useSelector(routerSelectors.getLocationPathName)

  const [activeQuestion, setActiveQuestion] = useState(0);
  const [swiper, setSwiper] = useState<any>()
  const [step, setStep] = useState(0);
  const [maxEnabled, setMaxEnabled] = useState(0);
  const dispatch = useDispatch()


  const isLastQuestion = questions && activeQuestion === questions?.length - 1;

  const handleNavigation = ({isPrev}: { isPrev?: boolean; }): void => {
    if (swiper) {
      if (isPrev) {
        return swiper?.slidePrev();
      }
      if (isLastQuestion) {
        history.push(`${currentPathname}/essay`);
        return setStep(1)
      }
      return swiper?.slideNext();
    }
  };

  useEffect(() => {
    if (isEssay) {
      setStep(1)
    }
  }, [isEssay]);


  useEffect(() => {
    if (swiper) {
      swiper.slideTo(activeQuestion)
    }
    if (activeQuestion > maxEnabled) {
      setMaxEnabled(activeQuestion)
    }
  }, [activeQuestion]);

  const submitHandler = (values: any) => {
    if (id) {

      // eslint-disable-next-line prefer-const
      let {essay, ...currentValues} = values;
      console.log(currentValues)
      currentValues = Object.values(values).map((item, key) => (
        {
          question_id: key + 1,
          answer: [
            item,
          ]
        }
      ))
      console.log(currentValues)
      dispatch(submitQuizRequest({id, answers: currentValues, essay}))
    }

  }

  return (

    <StyledQuizBlock>
      <StyledDecorativeWrapper>
        <DecorativeLines opacity={0.3} color={theme.color.blue}/>
      </StyledDecorativeWrapper>
      <StyledDecorativeWrapper lineId={2}>
        <DecorativeLines opacity={0.3} color={theme.color.yellow}/>
      </StyledDecorativeWrapper>
      <Form
        initialValues={{}}
        onSubmit={submitHandler}
        render={(renderProps): JSX.Element => {
          const {values, handleSubmit} = renderProps;
          return (
            <>
              {step === 0 ? (
                <StyledQuizWrapper>
                  <StyledQuizHeaderSection>
                    <StyledQuizTitle>
                      <Title color={theme.color.blue}>
                        Вопрос {activeQuestion + 1}
                      </Title>
                    </StyledQuizTitle>
                    <StyledQuizBullets>
                      {questions?.map((item, key) => {
                        return (
                          <StyledBulletItem
                            // onClick={() => handleClick(key)}
                            active={key === activeQuestion}
                            isEnabled={key < maxEnabled}
                            key={key}/>
                        )
                      })}
                    </StyledQuizBullets>
                  </StyledQuizHeaderSection>
                  <StyledQuizMainSection>
                    <Swiper
                      onSwiper={setSwiper}
                      onSlideChange={(swiper) => setActiveQuestion(swiper.activeIndex)}
                      allowTouchMove={false}
                    >
                      {questions?.map((item) => {
                        return (
                          <SwiperSlide key={item.id}>
                            <StyledQuizQuestion>
                              {item.question}
                            </StyledQuizQuestion>
                            <StyledQuizAnswers>
                              {item.options.map((answer, key) => {
                                return <QuizSectionItem
                                  activeValue={values[`question_id_${item.id}`]}
                                  key={`${item.id}${key}`}
                                  answer={answer}
                                  questionId={item.id}/>
                              })}
                            </StyledQuizAnswers>
                            <StyledButtonBlock>
                              {/*{activeQuestion !== 0 &&*/}
                              {/*<StyledButton reversed>*/}
                              {/*  <Button*/}
                              {/*    icon={IconArrowRight}*/}
                              {/*    background={theme.color.yellow}*/}
                              {/*    title={'Назад'}*/}
                              {/*    color={'#fff'}*/}
                              {/*    onClick={() => {*/}
                              {/*      handleNavigation({isPrev: true})*/}
                              {/*    }}*/}
                              {/*  />*/}
                              {/*</StyledButton>*/}
                              {/*}*/}
                              <StyledButton>
                                <Button
                                  reversed
                                  icon={IconArrowRight}
                                  background={theme.color.yellow}
                                  title={isLastQuestion ? 'Продолжить' : 'Далее'}
                                  disabled={!values[`quest_${item.id}`]}
                                  color={'#fff'}
                                  onClick={() => {
                                    if (values[`quest_${item.id}`]) {
                                      handleNavigation({isPrev: false})
                                    }
                                  }}/>
                              </StyledButton>
                            </StyledButtonBlock>
                          </SwiperSlide>
                        )
                      })}
                    </Swiper>
                  </StyledQuizMainSection>
                </StyledQuizWrapper>
              ) : (
                <StyledQuizMainSection>
                  <StyledTextarea>
                    <Field
                      name="essay"
                      component={InputTextarea}
                      rows={10}
                      placeholder="Текстовое поле"
                    />
                  </StyledTextarea>
                  <StyledButton>
                    <Button
                      reversed
                      icon={IconArrowRight}
                      background={theme.color.yellow}
                      title={'Отправить'}
                      color={'#fff'}
                      onClick={handleSubmit}/>
                  </StyledButton>
                </StyledQuizMainSection>
              )}
            </>
          )
        }}/>


    </StyledQuizBlock>
  );
};
