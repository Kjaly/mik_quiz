import React from 'react';
import { ModalTemplate } from '../ModalTemplate';

import { StyledCloseIcon, StyledPhotoModal, StyledSlideImg, StyledSwiper } from './PhotoModal.styled';
import { TModalProps } from '../../../store/modals/types';
import { IconCross } from '../../../Icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSelector } from 'react-redux';
import { modalsSelectors } from '../../../store/modals/selectors';
import { IPhoto } from '../../../store/user/types';

export const PhotoModal: React.FC<TModalProps> = (props) => {
  const {closeModal} = props;
  const {photos} = useSelector(modalsSelectors.getModalProps);

  return (
    <ModalTemplate>
      <StyledPhotoModal>
        <StyledCloseIcon onClick={closeModal}>
          <IconCross/>
        </StyledCloseIcon>
        <StyledSwiper>
          <Swiper
            navigation={{
              prevEl: '.prev',
              nextEl: '.next',
            }}
          >
            {photos.map((item:IPhoto) => {
              return (
                <SwiperSlide key={item.id}>
                  <StyledSlideImg src={item.url} alt={item.name}/>
                </SwiperSlide>
              );
            })}

          </Swiper>
        </StyledSwiper>
      </StyledPhotoModal>
    </ModalTemplate>

  );
};
