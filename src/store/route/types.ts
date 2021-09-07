interface IRouterActionOptions {
  isDisabledLowerCasePathTransform?: boolean;
  isShallow?: boolean;
}

export interface IRouteActionPayload {
  path: string;
  options?: IRouterActionOptions;
}

export interface IRouteActionBackPayload {
  isRedirectDisabled?: boolean;
}

export type IRouterQuery<P = Record<string, string | number | Array<string> | undefined>> = P;

export type TRouterLocation = {
  pathname: string;
  hash: string;
  search: string;
  query?: IRouterQuery;
  key?: string;
};
export type TRouterAction = 'POP' | 'PUSH' | 'REPLACE' | string;

export interface IRouterState {
  location: TRouterLocation;
  action: TRouterAction;
}

export interface IRouteSetLocationParamsActionPayload {
  location: TRouterLocation;
}
