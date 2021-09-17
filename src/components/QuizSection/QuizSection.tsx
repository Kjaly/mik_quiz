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
  StyledQuizTitle,
  StyledTextarea
} from "./QuizSection.styled";
import { Title } from "../Typography/Title";
import { theme } from "../../theme";
import { QuizSectionItem } from "./QuizSectionItem";
import { Field, Form } from 'react-final-form';
import { Swiper, SwiperSlide } from "swiper/react";
import { Button } from "../Button";
import { IconArrowRight } from "../../Icons";
import { InputTextarea } from "../FormFinal/InputTextarea";

export interface IQuestion {
  id: number,
  question: string,
  answers: Array<string>

}

interface IQuizSectionProps {
  questions: Array<IQuestion>
}

export const QuizSection: React.FC<IQuizSectionProps> = (props) => {
  const {questions} = props

  const [activeQuestion, setActiveQuestion] = useState(0);
  const [swiper, setSwiper] = useState<any>()
  const [step, setStep] = useState(0);
  const [maxEnabled, setMaxEnabled] = useState(0);

  const handleClick = (id: number) => {
    if (id <= maxEnabled) {
      setActiveQuestion(id)
    }
  }
  const isLastQuestion = activeQuestion === questions.length - 1;
  const isFirstQuestion = activeQuestion === 0;

  const handleNavigation = ({isPrev}: { isPrev?: boolean; }): void => {
    if (swiper) {
      if (isPrev) {
        return swiper.slidePrev();
      }
      if (isLastQuestion) {
        return setStep(1)
      }
      return swiper.slideNext();
    }
  };

  useEffect(() => {
    if (swiper) {
      swiper.slideTo(activeQuestion)
    }
    if (activeQuestion > maxEnabled) {
      setMaxEnabled(activeQuestion)
    }
  }, [activeQuestion]);

  const submitHandler = (values: any) => {
    console.log(values)
  }


  return (
    <StyledQuizBlock>
      <Form
        initialValues={{}}
        onSubmit={submitHandler}
        render={(renderProps): JSX.Element => {
          const {values, handleSubmit} = renderProps;
          console.log(values)
          return (
            <>
              {step === 0 ? (
                <>
                  <StyledQuizHeaderSection>
                    <StyledQuizTitle>
                      <Title color={theme.color.blue}>
                        Вопрос {activeQuestion + 1}
                      </Title>
                    </StyledQuizTitle>
                    <StyledQuizBullets>
                      {questions.map((item, key) => {
                        return (
                          <StyledBulletItem
                            onClick={() => handleClick(key)}
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
                      {questions.map((item) => {
                        return (
                          <SwiperSlide key={item.id}>
                            <StyledQuizQuestion>
                              {item.question}
                            </StyledQuizQuestion>
                            <StyledQuizAnswers>
                              {item.answers.map((answer, key) => {
                                return <QuizSectionItem
                                  activeValue={values[`quest_${item.id}`]}
                                  key={`${item.id}${key}`}
                                  answer={answer}
                                  questionId={item.id}/>
                              })}
                            </StyledQuizAnswers>
                            <StyledButtonBlock firstSlide={isFirstQuestion}>
                              {activeQuestion !== 0 &&
                              <StyledButton reversed>
                                <Button
                                  icon={IconArrowRight}
                                  background={theme.color.yellow}
                                  title={'Назад'}
                                  color={'#fff'}
                                  onClick={() => {
                                    handleNavigation({isPrev: true})
                                  }}
                                />
                              </StyledButton>
                              }
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
                </>
              ) : (
                <StyledQuizMainSection>
                  <StyledTextarea>
                    <Field
                      name="description"
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
                      onClick={() => {
                        console.log(1);
                      }}/>
                  </StyledButton>
                </StyledQuizMainSection>
              )}
            </>
          )
        }}/>


    </StyledQuizBlock>

  );
};
