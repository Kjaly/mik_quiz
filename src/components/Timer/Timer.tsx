import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react';
import { IconClock } from "../../Icons";
import { modalsActions } from "../../store/modals/actions";
import { useDispatch } from "react-redux";
import { alertsActions } from "../../store/alerts/actions";

interface ITimerProps {
  startTime?: string
}


export const Timer: React.FC<ITimerProps> = (props) => {

  const {startTime} = props

  const startDate = dayjs(startTime).unix();
  const currentDate = dayjs().unix();
  const finishTime = startDate + (60 * 90)
  const thirtyMinutes = 60 * 30
  const fifteenMinutes = 60 * 15
  const fiveMinutes = 60 * 5
  const dispatch = useDispatch();
  const [seconds, setSeconds] = useState(finishTime - currentDate);


  useEffect(() => {
    setSeconds(finishTime - currentDate)
  }, [startTime]);


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
    if (seconds > 0) {
      timer = setTimeout(() => setSeconds(seconds - 1), 1000);
    }


    if (seconds <= 0) {
      dispatch(modalsActions.openModalAction({
        name: 'quizAlertModal',
        props: {
          text: 'Время прохождения Викторины истекло!',
          isEnded: true,
        }
      }))
      if (timer) {
        clearTimeout(timer)
      }
    }
    return () => {
      clearTimeout(timer);
    };
  });


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

  return (
    <>
      <IconClock/>{getTime(seconds)}
    </>
  );
};
