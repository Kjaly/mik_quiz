import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = (route: any): JSX.Element => {
  const {component: Component, isAuth, ...rest} = route
  return (
    <Route
      {...rest}
      render={props => !isAuth ? <Redirect to="/"/> : <Component {...props} />}
    />
  );
}
export default PrivateRoute;
