import React from 'react';
import { ModalTemplate } from '../ModalTemplate';

import {
  StyledMailConfirmModal,
  StyledCloseIcon,
  StyledHeader,
  StyledIcon,
  StyledMailConfirmTitle,
  StyledDescription,
} from './MailConfirmModal.styled'
import { TModalProps } from '../../../store/modals/types';
import { IconCross, IconMail } from '../../../Icons';
import { modalsSelectors } from '../../../store/modals/selectors';
import { useSelector } from 'react-redux';

export const MailConfirmModal: React.FC<TModalProps> = (props) => {
  const {closeModal} = props
  const {text} = useSelector(modalsSelectors.getModalProps)

  const handleClose = () => {
    closeModal()
  }
  return (
    <ModalTemplate>
      <StyledMailConfirmModal>
        <StyledHeader>
          <StyledMailConfirmTitle>
            Подтверждение регистрации
          </StyledMailConfirmTitle>
          <StyledCloseIcon onClick={handleClose}>
            <IconCross/>
          </StyledCloseIcon>
        </StyledHeader>
        <StyledDescription>
          <StyledIcon>
            <IconMail/>
          </StyledIcon>{text || 'Письмо подтверждения регистрации отправлено на ваш Email адрес. Проверьте свою электронную почту и завершите регистрацию.'}
        </StyledDescription>
      </StyledMailConfirmModal>
    </ModalTemplate>
  );
};
