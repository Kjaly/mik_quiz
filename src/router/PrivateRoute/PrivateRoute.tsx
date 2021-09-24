import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = (route: any): JSX.Element => {
  const {component: Component, isAuth, isFinalist, finalist, ...rest} = route
  const hasToken = localStorage.getItem('access_token')
  console.log(finalist)
  return (
    <>
      {finalist ? (
        <Route
          {...rest}
          render={props => !isFinalist ? <Redirect to="/"/> : <Component {...props} />}
        />
      ) : (
        <Route
          {...rest}
          render={props => !isAuth && !hasToken ? <Redirect to="/"/> : <Component {...props} />}
        />
      )}
    </>

  );
}
export default PrivateRoute;
