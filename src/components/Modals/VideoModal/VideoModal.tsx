import React, { useState } from 'react';
import { ModalTemplate } from '../ModalTemplate';

import {
  StyledVideoModal,
  StyledVideoTitle,
  StyledVideoDescription,
  StyledCloseIcon,
  StyledPlayer,
  StyledLoader,
} from './VideoModal.styled';
import { TModalProps } from '../../../store/modals/types';
import { IconCross } from '../../../Icons';
import YouTube from 'react-youtube';
import { useSelector } from 'react-redux';
import { modalsSelectors } from '../../../store/modals/selectors';
import { Preloader } from '../../Preloader';

export const VideoModal: React.FC<TModalProps> = (props) => {
  const {closeModal} = props;
  const modalProps = useSelector(modalsSelectors.getModalProps);
  const [isLoad, setIsLoad] = useState(false);

  const opts = {
    height: '100%',
    width: '100%',
  };

  return (
    <ModalTemplate>
      <StyledVideoModal>
        <StyledPlayer>
          {!isLoad ? (
            <StyledLoader>
              <Preloader/>
            </StyledLoader>
          ) : (
            <StyledCloseIcon onClick={closeModal}>
              <IconCross/>
            </StyledCloseIcon>
          )}
          <YouTube
            videoId={modalProps.videoId}
            opts={opts}
            onReady={() => setIsLoad(true)}
          />

        </StyledPlayer>
        <StyledVideoTitle>{modalProps?.name}</StyledVideoTitle>
        <StyledVideoDescription>{modalProps?.description}</StyledVideoDescription>
      </StyledVideoModal>
    </ModalTemplate>

  );
};
