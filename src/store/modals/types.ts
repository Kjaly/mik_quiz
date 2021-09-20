import {
  CLOSE_MODAL, OPEN_MODAL
} from "./actionTypes";


export interface ModalState {
  name: string;
  error: string | null;
  props: TModalProps;
}

export interface ModalPayload {
  name: string;
  props?: any;
}

export interface TOpenModal {
  type: typeof OPEN_MODAL;
  payload: ModalPayload;

}

export type TModalProps = any;


export type TCloseModal = {
  type: typeof CLOSE_MODAL;
};


export type ModalActions =
  | TOpenModal
  | TCloseModal;
