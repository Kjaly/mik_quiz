import React, { useEffect } from 'react';
import { StyledModalWrapper } from "./ModalTemplate.styled";
import { modalsActions } from "../../../store/modals/actions";
import { useDispatch } from "react-redux";

export const ModalTemplate: React.FC = (props) => {
  const {children} = props;
  const dispatch = useDispatch()
  useEffect(() => {
    document.body.classList.add("no-scroll");
    return () => {
      document.body.classList.remove("no-scroll");
    }
  }, [])

  const handleClose = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    if(e.target === e.currentTarget) {
      dispatch(modalsActions.closeModalAction())
    }
  }

  return (
    <StyledModalWrapper onClick={(e)=>handleClose(e)}>
      {children}
    </StyledModalWrapper>
  );
};
