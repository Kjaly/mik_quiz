import { createAction } from 'redux-actions';
import {
  IRouteActionPayload,
  IRouteSetLocationParamsActionPayload,
} from './types';

const pushTrigger = createAction<IRouteActionPayload, IRouteActionPayload>(
  '@@router/push->TRIGGER',
  ({ path, options }) => ({
    path,
    options,
  }),
);


const replaceTrigger = createAction<IRouteActionPayload, IRouteActionPayload>(
  '@@router/replace->TRIGGER',
  ({ path, options }) => ({ path, options }),
);

const routerSetLocationParamsAction = createAction<
  IRouteSetLocationParamsActionPayload,
  IRouteSetLocationParamsActionPayload
>('@@router/SET_LOCATION_PARAMS', ({ location }) => ({ location }));

export const routerActions = {
  pushTrigger,
  replaceTrigger,
  routerSetLocationParamsAction,
};
