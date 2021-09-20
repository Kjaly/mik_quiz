import React from "react";
import { Route } from "react-router-dom";
import PrivateRoute from "../PrivateRoute/PrivateRoute";


// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const RouteWithSubRoutes = (route: any,) => {
  const {path, exact, component: Component, routes, auth} = route
  console.log(route)
  // TODO поменять isAuth на данные с бэка
  return (
    <>
      {
        auth ? (
          <PrivateRoute
            path={path}
            exact={exact}

            isAuth={true}
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
