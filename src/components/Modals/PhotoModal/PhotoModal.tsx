import React from 'react';
import { ModalTemplate } from '../ModalTemplate';

import { StyledCloseIcon, StyledPhotoModal } from './PhotoModal.styled'
import { TModalProps } from "../../../store/modals/types";
import { IconCross } from "../../../Icons";

export const PhotoModal: React.FC<TModalProps> = (props) => {
  const {closeModal} = props
  return (
    <ModalTemplate>
      <StyledPhotoModal>
        <div>
          <StyledCloseIcon onClick={closeModal}>
            <IconCross/>
          </StyledCloseIcon>
        </div>
      </StyledPhotoModal>
    </ModalTemplate>

  );
};
