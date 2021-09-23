import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = (route: any): JSX.Element => {
  const {component: Component, isAuth, ...rest} = route
  const hasToken = localStorage.getItem('access_token')
  return (
    <Route
      {...rest}
      render={props => !isAuth && !hasToken ? <Redirect to="/"/> : <Component {...props} />}
    />
  );
}
export default PrivateRoute;
