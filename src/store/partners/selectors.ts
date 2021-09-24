import { createSelector } from 'reselect';

import { AppState } from '../store.types';

const getPending = (state: AppState) => state.partners.pending;

const getPartners = (state: AppState) => state.partners.partnersList;

const getErrors = (state: AppState) => state.partners.errors;
const getMessage = (state: AppState) => state.partners.message;

export const getPartnersSelector = createSelector(getPartners, (partners) => partners);

export const getPendingSelector = createSelector(
  getPending,
  (pending) => pending
);

export const getErrorsSelector = createSelector(getErrors, (error) => error);
export const getMessageSelector = createSelector(getMessage, (message) => message);

