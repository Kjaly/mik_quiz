import React from 'react';
import { ModalTemplate } from '../ModalTemplate';

import {
  StyledMailConfirmModal,
  StyledCloseIcon,
  StyledHeader,
  StyledIcon,
  StyledMailConfirmTitle,
  StyledDescription,
  StyledButton,
  StyledMobileIcon,
  StyledText,
} from './MailConfirmModal.styled'
import { TModalProps } from '../../../store/modals/types';
import { IconCross, IconMail } from '../../../Icons';
import { modalsSelectors } from '../../../store/modals/selectors';
import { useSelector } from 'react-redux';
import { Button } from '../../Button';
import { theme } from '../../../theme';
import { history } from '../../../store'

export const MailConfirmModal: React.FC<TModalProps> = (props) => {
  const {closeModal} = props
  const {text, title, noMail} = useSelector(modalsSelectors.getModalProps)

  const handleClose = () => {
    closeModal()
  }
  return (
    <ModalTemplate>
      <StyledMailConfirmModal>
        <StyledHeader>
          {!noMail && (
            <StyledMobileIcon>
              <IconMail/>
            </StyledMobileIcon>
          )}
          <StyledMailConfirmTitle>
            {title || 'Подтверждение регистрации'}
          </StyledMailConfirmTitle>
          <StyledCloseIcon onClick={handleClose}>
            <IconCross/>
          </StyledCloseIcon>
        </StyledHeader>
        <StyledDescription>
          {!noMail && (
            <StyledIcon>
              <IconMail/>
            </StyledIcon>
          )}
          <StyledText
            dangerouslySetInnerHTML={{__html: text || 'Письмо подтверждения регистрации отправлено на ваш Email адрес. Проверьте свою электронную почту и завершите регистрацию.'}}/>

        </StyledDescription>
        {noMail && (
          <StyledButton>
            <Button
              background={theme.color.yellow}
              title={'Профиль'}
              color={'#fff'}
              onClick={() => {
                history.push('/profile')
                handleClose()
              }}/>
          </StyledButton>
        )}
      </StyledMailConfirmModal>
    </ModalTemplate>
  );
};
