import React from 'react';
import { ModalTemplate } from '../ModalTemplate';

import { StyledQuizModal, StyledCloseIcon, StyledCustomText } from './QuizAlertModal.styled'
import { TModalProps } from "../../../store/modals/types";
import { IconCross } from "../../../Icons";
import { modalsSelectors } from "../../../store/modals/selectors";
import { useSelector } from "react-redux";
import { history } from '../../../store'
import { getUserSelector } from "../../../store/user/selectors";

export const QuizAlertModal: React.FC<TModalProps> = (props) => {
  const {closeModal} = props
  const {text, isEnded, customText} = useSelector(modalsSelectors.getModalProps)
  const user = useSelector(getUserSelector);

  const handleClose = () => {
    if (isEnded) {
      history.push('/')
    }
    closeModal()
  }
  return (
    <ModalTemplate redirect={isEnded && '/'}>
      <StyledQuizModal>
        {customText ? (
          <StyledCustomText>
            <p>
              Спасибо за участие! Результаты онлайн-викторины и список полуфиналистов будут опубликованы на сайте<br/>
              <a href="https://будущеероссии39.рф">https://будущеероссии39.рф</a> 11.10.2021 г. после 12:00 (время московское). Полуфиналисты смогут принять
              участие в региональных слётах и конкурсах видеороликов, о чем мы сообщим по электронной почте.
            </p>
            {!user.is_completed && (
              <p>
                Напоминаем, чтобы твои результаты были учтены, тебе необходимо (если ты совершеннолетний) или твоим
                родителям (опекунам) заполнить форму Согласия на обработку персональных данных и публикацию итогов
                викторины. Для этого распечатай соответствующий бланк, заполни и загрузи его в личном кабинете. Важно!
                Без
                этого документа твои результаты не будут засчитаны. Добавить Согласие можно в течение трех дней после
                завершения онлайн-викторины.
              </p>
            )}
          </StyledCustomText>
        ) : (
          <p>
            {text}
          </p>
        )}

        <StyledCloseIcon onClick={handleClose}>
          <IconCross/>
        </StyledCloseIcon>
      </StyledQuizModal>

    </ModalTemplate>

  );
};
