import React, { useEffect, useState } from 'react';
import { StyledModalWrapper } from './ModalTemplate.styled';
import { modalsActions } from '../../../store/modals/actions';
import { useDispatch } from 'react-redux';
import { history } from '../../../store';

interface IModalTemplateProps {
  redirect?: string;
  customClose?: () => void;
}

export const ModalTemplate: React.FC<IModalTemplateProps> = (props) => {
  const {children, redirect, customClose} = props;
  const dispatch = useDispatch();
  const scrollWidth = typeof window !== 'undefined' ? window.innerWidth - document.body.clientWidth : 0;


  const [isShown, setIsShown] = useState(false);
  useEffect(() => {
    setIsShown(true);
    document.body.classList.add('no-scroll');
    document.body.style.paddingRight = `${scrollWidth}px`;
    return () => {
      setIsShown(false);
      document.body.classList.remove('no-scroll');
      document.body.style.paddingRight = `0`;
    };
  }, []);

  const handleClose = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.target === e.currentTarget) {
      if (redirect) {
        history.push(redirect);
      }
      if (customClose) {
        customClose();
      }
      dispatch(modalsActions.closeModalAction());
    }
  };

  return (
    <StyledModalWrapper isShown={isShown} onClick={(e) => handleClose(e)}>
      {children}
    </StyledModalWrapper>
  );
};
