import React, { useEffect, useState } from 'react';
import { StyledAlert } from './Alert.styled';
import { useDispatch, useSelector } from 'react-redux';
import { alertSelectors } from '../../store/alerts/selectors';
import { alertsActions, closeAlertAction } from '../../store/alerts/actions';

export const Alert: React.FC = () => {
  const dispatch = useDispatch()
  const [isShown, setIsShown] = useState(false);

  const alertText = useSelector(alertSelectors.getAlertText)
  useEffect(() => {
    if (alertText) {
      setIsShown(true)
      setTimeout(() => {
        setIsShown(false)
      }, 3000)
    } else {
      setIsShown(false)
    }
    return () => {
      setIsShown(false)
    };
  }, [alertText]);

  useEffect(() => {
    if (!isShown) {
      setTimeout(() => {
        dispatch(alertsActions.closeAlertAction())
      }, 300)
    }
  }, [isShown]);


  if (!alertText) return null
  return (
    <StyledAlert isShown={isShown}>
      {alertText}
    </StyledAlert>
  );
};
