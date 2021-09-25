import React, { useEffect, useState } from 'react';
import { IconClock } from '../../Icons';
import { modalsActions } from '../../store/modals/actions';
import { useDispatch, useSelector } from 'react-redux';
import { alertsActions } from '../../store/alerts/actions';
import { submitQuizFailure } from '../../store/quiz/actions';
import { getQuizDeadlineSelector } from '../../store/quiz/selectors';

interface ITimerProps {
  startTime?: string
}


export const Timer: React.FC<ITimerProps> = () => {

  const deadline = useSelector(getQuizDeadlineSelector);
  const thirtyMinutes = 60 * 30
  const fifteenMinutes = 60 * 15
  const fiveMinutes = 60 * 5
  const dispatch = useDispatch();
  const [seconds, setSeconds] = useState(deadline || null);


  useEffect(() => {
    if (deadline) {
      setSeconds(deadline)
    }
  }, [deadline]);


  useEffect(() => {

    if (seconds === thirtyMinutes) {
      dispatch(
        alertsActions.openAlertAction({
          text: 'У вас осталось 30 минут!',
          props: {type: 'timer'},
        })
      )
    }

    if (seconds === fifteenMinutes) {
      dispatch(
        alertsActions.openAlertAction({
          text: 'У вас осталось 15 минут!',
          props: {type: 'timer'},
        })
      )
    }

    if (seconds === fiveMinutes) {
      dispatch(
        alertsActions.openAlertAction({
          text: 'У вас осталось 5 минут!',
        })
      )
    }
  }, [seconds]);


  useEffect(() => {
    let timer!: ReturnType<typeof setTimeout>;
    if (seconds !== null && seconds > 0) {
      timer = setTimeout(() => setSeconds(seconds - 1), 1000);
    }

    if (seconds !== null && seconds <= 0) {
      localStorage.removeItem('isQuizStarted')
      localStorage.removeItem('answers')
      dispatch(submitQuizFailure())
      dispatch(modalsActions.openModalAction({
        name: 'quizAlertModal',
        props: {
          text: 'Время прохождения Викторины истекло!',
          isEnded: true,
        }
      }))
      if (timer){
        clearTimeout(timer)
      }
    }
    return () => {
      clearTimeout(timer);
    };
  },[seconds]);


  const getTime = (seconds: number) => {
    let minutes = Math.floor(seconds / 60).toString()
    let remainSeconds = (seconds % 60).toString();
    const zeroSign = '0'
    if (minutes.toString().length < 2) {
      minutes = zeroSign + minutes;
    }
    if (remainSeconds.toString().length < 2) {
      remainSeconds = zeroSign + remainSeconds;
    }
    return `${minutes}:${remainSeconds}`
  }

  if (seconds !== null && seconds <= 0) return null
  return (
    <>
      <IconClock/>{seconds !== null && getTime(seconds)}
    </>
  );
};
