import { createSelector } from "reselect";

import { AppState } from "../store.types";

const getPublications = (state: AppState) => state.publicationsList.publications;

export const getPublicationsSelector = createSelector(getPublications, (publications) => publications);

export const publicationsSelector = {
  getPublicationsSelector
};
