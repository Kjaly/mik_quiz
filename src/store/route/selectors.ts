
import { TRouterLocation, } from './types';
import { AppState } from '../store.types';

const getLocationProps = (state: AppState): TRouterLocation => state.router.location;

const getLocationPathName = (state: AppState): string =>
  state.router.location.pathname;


const getLocationQuery = (state: AppState): Record<string, string | number | string[] | undefined> | undefined =>
  state.router.location.query;

const getLocationSearch = (state: AppState): string => state.router?.location?.search;
const getLocationHash = (state: AppState): string => state.router.location.hash;

export const routerSelectors = {
  getLocationProps,
  getLocationPathName,
  getLocationQuery,
  getLocationSearch,
  getLocationHash,
};
