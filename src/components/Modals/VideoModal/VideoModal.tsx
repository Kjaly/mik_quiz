import React from 'react';
import { ModalTemplate } from '../ModalTemplate';

import {
  StyledVideoModal,
  StyledVideoTitle,
  StyledVideoDescription,
  StyledCloseIcon,
  StyledPlayer
} from './VideoModal.styled'
import { TModalProps } from "../../../store/modals/types";
import { IconCross } from "../../../Icons";
import YouTube from "react-youtube";
import { useSelector } from "react-redux";
import { modalsSelectors } from "../../../store/modals/selectors";

export const VideoModal: React.FC<TModalProps> = (props) => {
  const {closeModal} = props
  const modalProps = useSelector(modalsSelectors.getModalProps)


  const opts = {
    height: '100%',
    width: '100%',
  }


  return (
    <ModalTemplate>
      <StyledVideoModal>
        <StyledPlayer>
          <StyledCloseIcon onClick={closeModal}>
            <IconCross/>
          </StyledCloseIcon>
          <YouTube
            videoId={modalProps.videoId}
            opts={opts}
          />
        </StyledPlayer>
        <StyledVideoTitle>Заголовок</StyledVideoTitle>
        <StyledVideoDescription>Lorem ipsum dolor sit amet.</StyledVideoDescription>
      </StyledVideoModal>
    </ModalTemplate>

  );
};
