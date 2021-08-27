import { CLOSE_MODAL, OPEN_MODAL } from "./actionTypes";
import { ModalPayload, TCloseModal, TOpenModal, } from "./types";


export const openModalAction = (
  payload: ModalPayload
): TOpenModal => ({
  type: OPEN_MODAL,
  payload,
});
export const closeModalAction = (): TCloseModal => ({
  type: CLOSE_MODAL,
});

export const modalsActions = {
  openModalAction,
  closeModalAction
}