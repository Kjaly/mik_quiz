import { createSelector } from "reselect";

import { AppState } from "../store.types";

const getPublications = (state: AppState) => state.publications.publicationsList;
const getCategories = (state: AppState) => state.publications.categories;
const getMetas = (state: AppState) => state.publications.meta;

export const getPublicationsSelector = createSelector(getPublications, (publications) => publications);
export const getCategoriesSelector = createSelector(getCategories, (categories) => categories);
export const getMetasSelector = createSelector(getMetas, (meta) => meta);

export const publicationsSelector = {
  getPublicationsSelector,
  getCategoriesSelector,
  getMetasSelector
};
