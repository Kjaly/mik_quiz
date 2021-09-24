import { FETCH_PARTNERS_FAILURE, FETCH_PARTNERS_REQUEST, FETCH_PARTNERS_SUCCESS } from "./actionTypes";


export interface IPartner {
  name: string;
  description: string;
  photo: { url:string };
}

export interface PartnersState  {
  partnersList:Array<IPartner>
  pending: boolean,
  errors: string | null,
  message: string | null,
}

export interface FetchPartnersSuccessPayload {
  partnersList: Array<IPartner>;
}


export interface FetchPartnersFailurePayload {
  errors: Record<string, Array<string>>;
}

export interface FetchPartnersRequest {
  type: typeof FETCH_PARTNERS_REQUEST;
}

export type FetchPartnersSuccess = {
  type: typeof FETCH_PARTNERS_SUCCESS;
  payload: FetchPartnersSuccessPayload;
};

export type FetchPartnersFailure = {
  type: typeof FETCH_PARTNERS_FAILURE;
  payload: FetchPartnersFailurePayload;
};


export type PartnersActions =
  | FetchPartnersRequest
  | FetchPartnersSuccess
  | FetchPartnersFailure
  