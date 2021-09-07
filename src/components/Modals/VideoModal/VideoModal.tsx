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

export const VideoModal: React.FC<TModalProps> = (props) => {
  const {closeModal} = props

  const opts = {
    height: '100%',
    width: '100%',
  }

  const videoUrl = 'https://www.youtube.com/watch?v=20QiX8rmHnU';
  const videoId = videoUrl.split("v=")[1].split("&")[0];

  return (
    <ModalTemplate>
      <StyledVideoModal>
        <StyledPlayer>
          <StyledCloseIcon onClick={closeModal}>
            <IconCross/>
          </StyledCloseIcon>
          <YouTube
            videoId={videoId}
            opts={opts}
          />
        </StyledPlayer>
        <StyledVideoTitle>Заголовок</StyledVideoTitle>
        <StyledVideoDescription>Lorem ipsum dolor sit amet.</StyledVideoDescription>
      </StyledVideoModal>
    </ModalTemplate>

  );
};
