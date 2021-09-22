import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react';
import { IconClock } from "../../Icons";
import { modalsActions } from "../../store/modals/actions";
import { useDispatch, useSelector } from "react-redux";
import { routerSelectors } from "../../store/route";

// interface ITimerProps {
// }

export const Timer: React.FC<any> = (props) => {

  const currentDate = dayjs().unix();
  const finishTime = currentDate + (60 * 90)
  const dispatch = useDispatch();
  const [seconds, setSeconds] = useState(finishTime - currentDate);



  useEffect(() => {
    setSeconds(finishTime - currentDate)
  }, []);


  useEffect(() => {
    let timer:ReturnType<typeof setTimeout>;
    if (seconds > 0) {
      timer = setTimeout(() => setSeconds(seconds - 1), 1000);
    }
    if (seconds === 0) {
      dispatch(modalsActions.openModalAction({
        name: 'quizAlertModal',
        props: {
          text: 'Дорогой участник викторины по истории России! Время для прохождения викторины окончено',
          isEnded: true,
        }
      }))
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
