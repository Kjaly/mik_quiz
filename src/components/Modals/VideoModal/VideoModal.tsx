import React from 'react';
import { ModalTemplate } from '../ModalTemplate';

import {
  StyledVideoModal,
  StyledVideoTitle,
  StyledVideoDescription,
  StyledCloseIcon
} from './VideoModal.styled'
import { TModalProps } from "../../../store/modals/types";
import { IconCross } from "../../../Icons";

export const VideoModal: React.FC<TModalProps> = (props) => {
  const {closeModal} = props

  return (
    <ModalTemplate>
      <StyledVideoModal>
        <div>
          <StyledCloseIcon onClick={closeModal}>
            <IconCross/>
          </StyledCloseIcon>
        </div>
        <StyledVideoTitle>Заголовок</StyledVideoTitle>
        <StyledVideoDescription>Lorem ipsum dolor sit amet.</StyledVideoDescription>
      </StyledVideoModal>
    </ModalTemplate>

  );
};
