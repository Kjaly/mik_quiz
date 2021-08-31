import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { modalsSelectors } from "../../store/modals/selectors";
import { Action } from "redux";
import { modalsActions } from "../../store/modals/actions";
import { VideoModal } from "../Modals/VideoModal";
import { PhotoModal } from "../Modals/PhotoModal";
import { RegistrationFormModal } from "../RegistrationForm";
import { AddPublicationModal } from "../Modals/AddPublicationModal";

export const ControlledReduxModal: React.FC = () => {

  const modalName = useSelector(modalsSelectors.getModalName);
  const dispatch = useDispatch();
  const closeModal = (): Action => dispatch(modalsActions.closeModalAction());

  console.log(modalName);
  switch (modalName) {
    case 'videoGallery' :
      return <VideoModal closeModal={closeModal}/>;
    case 'photoGallery' :
      return <PhotoModal closeModal={closeModal}/>;
    case 'registrationModal' :
      return <RegistrationFormModal closeModal={closeModal}/>;
      case 'addPublicationModal' :
      return <AddPublicationModal closeModal={closeModal}/>;
    default:
      return null;
  }

};
