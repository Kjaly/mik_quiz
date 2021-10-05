import React from 'react';
import { ModalTemplate } from '../ModalTemplate';

import {
  StyledButton,
  StyledButtonsBlock,
  StyledCloseIcon,
  StyledRemovePublication,
  StyledTitle,
} from './RemovePublicationModal.styled';
import { TModalProps } from '../../../store/modals/types';
import { IconCross } from '../../../Icons';
import { modalsSelectors } from '../../../store/modals/selectors';
import { useSelector } from 'react-redux';
import { Button } from '../../Button';
import { theme } from '../../../theme';

export const RemovePublicationModal: React.FC<TModalProps> = (props) => {
  const {closeModal} = props;
  const {text, remove} = useSelector(modalsSelectors.getModalProps);

  const handleClose = () => {
    closeModal();
  };
  const handleRemove = () => {
    remove();
    closeModal();
  };
  return (
    <ModalTemplate>
      <StyledRemovePublication>
        <StyledTitle>

          <p>
            {text || 'Вы уверены что хотите удалить публикацию?'}
          </p>
          <StyledCloseIcon onClick={handleClose}>
            <IconCross/>
          </StyledCloseIcon>
        </StyledTitle>

        <StyledButtonsBlock>
          <StyledButton>
            <Button
              reversed
              background={theme.color.yellow}
              title={'Да'}
              color={'#fff'}
              onClick={handleRemove}/>
          </StyledButton>

          <StyledButton>
            <Button
              reversed
              background={theme.color.blue}
              title={'Нет'}
              color={'#fff'}
              onClick={handleClose}/>
          </StyledButton>

        </StyledButtonsBlock>
      </StyledRemovePublication>

    </ModalTemplate>

  );
};
