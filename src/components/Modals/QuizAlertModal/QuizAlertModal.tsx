import React from 'react';
import { ModalTemplate } from '../ModalTemplate';

import { StyledQuizModal, StyledCloseIcon } from './QuizAlertModal.styled'
import { TModalProps } from "../../../store/modals/types";
import { IconCross } from "../../../Icons";
import { modalsSelectors } from "../../../store/modals/selectors";
import { useSelector } from "react-redux";
import { history } from '../../../store'

export const QuizAlertModal: React.FC<TModalProps> = (props) => {
  const {closeModal} = props
  const {text, isEnded} = useSelector(modalsSelectors.getModalProps)

  const handleClose = () => {
    if (isEnded) {
      history.push('/')
    }
    closeModal()
  }
  return (
    <ModalTemplate redirect={isEnded && '/'}>
      <StyledQuizModal>
        <p>
          {text}
        </p>

        <StyledCloseIcon onClick={handleClose}>
          <IconCross/>
        </StyledCloseIcon>
      </StyledQuizModal>

    </ModalTemplate>

  );
};
