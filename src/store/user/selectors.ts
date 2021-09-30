import { createSelector } from 'reselect';

import { AppState } from '../store.types';

const getPending = (state: AppState) => state.user.pending;

const getUser = (state: AppState) => state.user;
const getUserId = (state: AppState) => state.user.id;

const getErrors = (state: AppState) => state.user.errors;
const getMessage = (state: AppState) => state.user.message;
const getUserRole = (state: AppState) => state.user?.roles?.[0]?.slug;
const getUploadStatus = (state: AppState) => state.user.uploadStatus;

export const getUserSelector = createSelector(getUser, (users) => users);

export const getPendingSelector = createSelector(
  getPending,
  (pending) => pending
);

export const getErrorsSelector = createSelector(getErrors, (error) => error);
export const getMessageSelector = createSelector(getMessage, (message) => message);
export const getUserIdSelector = createSelector(getUserId, (id) => id)
export const getUserRoleSelector = createSelector(getUserRole, (Role) => Role)
export const getUserUploadStatusSelector = createSelector(getUploadStatus, (status) => status)

