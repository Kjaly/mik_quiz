import React from 'react';
import { Route } from 'react-router-dom';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import { useSelector } from 'react-redux';
import { getUserIdSelector } from '../../store/user/selectors';


// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const RouteWithSubRoutes = (route: any,) => {
  const {path, exact, component: Component, routes, auth} = route
  const isAuth = useSelector(getUserIdSelector);
  return (
    <>
      {
        auth ? (
          <PrivateRoute
            path={path}
            exact={exact}
            isAuth={isAuth}
            component={(props: JSX.IntrinsicAttributes) => <Component {...props} routes={routes}/>}
          />
        ) : (
          <Route
            path={path}
            exact={exact}
            render={props => <Component {...props} routes={routes}/>}
          />
        )
      }
    </>
  );
}
