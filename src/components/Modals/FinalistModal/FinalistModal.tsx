import React, { useState } from 'react';
import { ModalTemplate } from '../ModalTemplate';

import {
  StyledCloseIcon,
  StyledFinalistModal,
  StyledFinalistConfirmTitle,
  StyledTextBlock,
  StyledImgBlock,
  StyledImgText,
  StyledImg,
  StyledImgView,
  StyledImgWrapper,
  StyledButton,
} from './FinalistModal.styled';
import { TModalProps } from '../../../store/modals/types';
import { IconArrowRight, IconCross } from '../../../Icons';
import { useDispatch, useSelector } from 'react-redux';
import { getUserSelector } from '../../../store/user/selectors';
import { PhotoDropzone } from '../../PhotoDropzone';
import { Button } from '../../Button';
import { theme } from '../../../theme';
import { updateUserRequest } from '../../../store/user/actions';

export const FinalistModal: React.FC<TModalProps> = (props) => {
  const {closeModal} = props;
  const user = useSelector(getUserSelector);
  const [files, setFiles] = useState<Array<File>>([]);
  const dispatch = useDispatch();
  const customClose = () => {
      let currentData: any = {is_finalist_accepted: true}
      if (files.length) {
        currentData = {...currentData, photo: files[0]}
      }
      dispatch(updateUserRequest({user, data: {...currentData}}));
    }
  ;
  const handleClose = () => {
    if (user.photo_id || files.length) {
      customClose();
    }
    closeModal();
  };
  return (
    <ModalTemplate customClose={customClose}>
      <StyledFinalistModal>
        <StyledFinalistConfirmTitle>
          <p>Поздравляем {user.first_name}!</p>
          <StyledCloseIcon onClick={handleClose}>
            <IconCross/>
          </StyledCloseIcon>
        </StyledFinalistConfirmTitle>

        <StyledTextBlock>
          Вы стали одним из финалистов викторины! Теперь вы можете добавлять свои публикации.
        </StyledTextBlock>

        {!user.photo_id ? (
          <StyledImgBlock>
            <p>Чтобы вас увидели, загрузите свою фотографию здесь:</p>
            {!files.length ? (
              <PhotoDropzone
                files={files}
                setFiles={setFiles}
                name={'dropzone'}/>
            ) : (
              <StyledImgView>
                <StyledImgText>
                  Спасибо! Ваша фотография успешно загружена.Теперь вы можете добавить свои публикации.
                </StyledImgText>
                <StyledImgWrapper>
                  <StyledImg src={URL.createObjectURL(files[0])}/>
                </StyledImgWrapper>
              </StyledImgView>
            )}

          </StyledImgBlock>
        ) : null}
        <StyledButton>
          <Button
            reversed
            icon={IconArrowRight}
            disabled={!files.length && !user.photo_id}
            background={theme.color.yellow}
            title={'Добавить публикацию'}
            color={'#fff'}
            href={'/publications'}
            onClick={handleClose}
          />
        </StyledButton>
      </StyledFinalistModal>
    </ModalTemplate>

  );
};
