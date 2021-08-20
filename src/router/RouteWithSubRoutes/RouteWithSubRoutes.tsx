import React from "react";
import { Route } from "react-router-dom";


export const RouteWithSubRoutes = (route:any) => {
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={props => <route.component {...props} routes={route.routes} />}
    />
  );
}