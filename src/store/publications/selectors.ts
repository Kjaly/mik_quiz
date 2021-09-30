import { createSelector } from "reselect";

import { AppState } from "../store.types";

const getPublications = (state: AppState) => state.publications.publicationsList;
const getCategories = (state: AppState) => state.publications.categories;

export const getPublicationsSelector = createSelector(getPublications, (publications) => publications);
export const getCategoriesSelector = createSelector(getCategories, (categories) => categories);

export const publicationsSelector = {
  getPublicationsSelector,
  getCategoriesSelector
};
