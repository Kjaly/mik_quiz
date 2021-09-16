import React, { useEffect, useState } from 'react';
import { StyledModalWrapper } from "./ModalTemplate.styled";
import { modalsActions } from "../../../store/modals/actions";
import { useDispatch } from "react-redux";

export const ModalTemplate: React.FC = (props) => {
  const {children} = props;
  const dispatch = useDispatch()

  const [isShown, setIsShown] = useState(false);
  useEffect(() => {
    setIsShown(true)
    document.body.classList.add("no-scroll");
    return () => {
      setIsShown(false)
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
    <StyledModalWrapper isShown={isShown} onClick={(e)=>handleClose(e)}>
      {children}
    </StyledModalWrapper>
  );
};
