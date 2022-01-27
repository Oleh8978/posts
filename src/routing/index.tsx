import React  from 'react';
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';

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
}

const Routing: React.FC<Props> = () => {

    return (
        <BrowserRouter>
          <Switch>
           {Routes}
           <Redirect to={RoutingSchema.getLink('posts')} />
          </Switch>
        </BrowserRouter>
    );
};

export default Routing
