import { FETCH_PARTNERS_FAILURE, FETCH_PARTNERS_REQUEST, FETCH_PARTNERS_SUCCESS, } from './actionTypes';
import {
  FetchPartnersFailure,
  FetchPartnersFailurePayload,
  FetchPartnersRequest,
  FetchPartnersSuccess,
  FetchPartnersSuccessPayload
} from "./types";

export const fetchPartnersRequest = (): FetchPartnersRequest => ({
  type: FETCH_PARTNERS_REQUEST,
});

export const fetchPartnersSuccess = (
  payload: FetchPartnersSuccessPayload
): FetchPartnersSuccess => ({
  type: FETCH_PARTNERS_SUCCESS,
  payload,
});

export const fetchPartnersFailure = (
  payload: FetchPartnersFailurePayload
): FetchPartnersFailure => ({
  type: FETCH_PARTNERS_FAILURE,
  payload,
});

