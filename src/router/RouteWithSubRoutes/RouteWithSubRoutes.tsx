import React from 'react';
import { Route } from 'react-router-dom';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import { useSelector } from 'react-redux';
import { getUserIdSelector, getUserRoleSelector } from '../../store/user/selectors';


// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const RouteWithSubRoutes = (route: any,) => {
  const {path, exact, component: Component, routes, auth, finalist} = route
  const role = useSelector(getUserRoleSelector)
  const isAuth = useSelector(getUserIdSelector);

  const isFinalist = role === 'quiz_finalist'
  return (
    <>
      {
        finalist ? (
            <PrivateRoute
              path={path}
              exact={exact}
              isAuth={isAuth}
              finalist
              isFinalist={isFinalist}
              component={(props: JSX.IntrinsicAttributes) => <Component {...props} routes={routes}/>}
            />
          ) :
          auth ? (
              <PrivateRoute
                path={path}
                exact={exact}
                isAuth={isAuth}
                isFinalist={isFinalist}
                component={(props: JSX.IntrinsicAttributes) => <Component {...props} routes={routes}/>}
              />
            ) :
            (
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
