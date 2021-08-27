import React, { useEffect } from 'react';
import { StyledModalWrapper } from "./ModalTemplate.styled";

export const ModalTemplate: React.FC = (props) => {
  const {children} = props;
  // const dispatch = useDispatch()
  useEffect(() => {
    document.body.classList.add("no-scroll");
    return () => {
      document.body.classList.remove("no-scroll");
    }
  }, [])

  // const handleClose = () => {
  //   dispatch(modalsActions.closeModalAction())
  // }

  return (
    <StyledModalWrapper >
      {/*<ModalCloseButton onClick={handleClose}> <IconCross/></ModalCloseButton>*/}
      {children}
    </StyledModalWrapper>
  );
};
