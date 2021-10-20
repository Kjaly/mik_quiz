import { createSelector } from 'reselect';

import { AppState } from '../store.types';



const getMeta = (state: AppState) => state.pages.pagesList?.meta;
const getContent = (state: AppState) => state.pages.pagesList?.content;



export const getMetaSelector = createSelector(getMeta, (meta) => meta);
export const getContentSelector = createSelector(getContent, (content) => content);

