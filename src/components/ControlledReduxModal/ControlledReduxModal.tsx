import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { modalsSelectors } from "../../store/modals/selectors";
import { Action } from "redux";
import { modalsActions } from "../../store/modals/actions";
import { VideoModal } from "../Modals/VideoModal";
import { PhotoModal } from "../Modals/PhotoModal";
import { RegistrationFormModal } from "../Modals/RegistrationForm";
import { AuthFormModal } from "../Modals/AuthFormModal";
import { AddPublicationModal } from "../Modals/AddPublicationModal";
import { QuizAlertModal } from "../Modals/QuizAlertModal";
import { MailConfirmModal } from '../Modals/MailConfirmModal';

export const ControlledReduxModal: React.FC = () => {

  const modalName = useSelector(modalsSelectors.getModalName);
  const dispatch = useDispatch();
  const closeModal = (): Action => dispatch(modalsActions.closeModalAction());

  switch (modalName) {
    case 'videoGallery' :
      return <VideoModal closeModal={closeModal}/>;
    case 'photoGallery' :
      return <PhotoModal closeModal={closeModal}/>;
    case 'registrationModal' :
      return <RegistrationFormModal closeModal={closeModal}/>;
      case 'authModal' :
      return <AuthFormModal closeModal={closeModal}/>;
    case 'addPublicationModal' :
      return <AddPublicationModal closeModal={closeModal}/>;
    case 'quizAlertModal' :
      return <QuizAlertModal closeModal={closeModal}/>;
      case 'mailConfirmModal' :
      return <MailConfirmModal closeModal={closeModal}/>;
    default:
      return null;
  }

};
