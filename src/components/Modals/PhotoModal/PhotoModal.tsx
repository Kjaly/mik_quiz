import React from 'react';
import { ModalTemplate } from '../ModalTemplate';

import { StyledCloseIcon, StyledLeftNavigation, StyledPhotoModal, StyledRightNavigation, StyledSlideImg, StyledSwiper } from './PhotoModal.styled';
import { TModalProps } from '../../../store/modals/types';
import { IconCross } from '../../../Icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSelector } from 'react-redux';
import { modalsSelectors } from '../../../store/modals/selectors';
import { IPhoto } from '../../../store/user/types';
import { SwiperNavigationButton } from '../../SwiperNavigationButton';

export const PhotoModal: React.FC<TModalProps> = (props) => {
  const {closeModal} = props;
  const {photos} = useSelector(modalsSelectors.getModalProps);

  return (
    <ModalTemplate>
      <StyledPhotoModal>
        <StyledCloseIcon onClick={closeModal}>
          <IconCross/>
        </StyledCloseIcon>
        <StyledLeftNavigation>
          <SwiperNavigationButton name={'prev-gallery'} reversed/>
        </StyledLeftNavigation>
        <StyledRightNavigation>
          <SwiperNavigationButton name={'next-gallery'}/>
        </StyledRightNavigation>
        <StyledSwiper>
          <Swiper
            navigation={{
              prevEl: '.prev-gallery',
              nextEl: '.next-gallery',
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
