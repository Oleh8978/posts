import React, { useEffect, useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { push } from 'connected-react-router';
import { connect, useDispatch } from 'react-redux';

// interfaces
import { IStore } from '../controllers/interfaces';

// routing schema
import RoutingSchema, { IRoute } from './schema';

// components


// Render all routes
const generateRoutes = (routes: IRoute[]) => {
  return routes.map(({ component: Component, ...route }) => (
    <Route
      exact={route.isExact}
      key={route.name}
      path={route.path}
      render={(props: { match: { params: { [s: string]: unknown; } | ArrayLike<unknown>; }; }) => {
        return (
          <Component
            key={route.name + Object.values(props.match.params).join(',')}
            {...props}>
            {route.childRoutes ? (
              <Switch>{generateRoutes(route.childRoutes)}</Switch>
            ) : (
              <></>
            )}
          </Component>
        );
      }}
    />
  ));
};

const Routes = generateRoutes(RoutingSchema.getSchema);

interface Props {
  location: string;
  authStatus?: boolean;
  loader: boolean;
}

const Routing: React.FC<Props> = (props) => {

  const dispatch = useDispatch();

  useEffect(() => {

  }, []);


    return (
        <>
          <Switch>
           {Routes}
          </Switch>
        </>
    );
};

export default connect(
  (state: IStore) => ({

  }),
  {
    push,
  },
)(Routing);
