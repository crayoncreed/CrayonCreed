import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import './App.css';
import Layout from './Components/Common/Layout/Layout';

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          {/* {routes.map((route, i) => {
            return <Route
              key={i}
              path={route.path}
              exact={route.exact}
              // strict={route.strict}
              render={(props: RouteComponentProps<any>) => (
                <route.component
                  name={route.name}
                  {...props}
                  {...route.props} />
              )}
            />
          })} */}
          <Route path="/" strict={true} render={props => <Layout {...props} />} />
          <Redirect to="/404" from="*" />
        </Switch>
      </Suspense>
    </>
  );
}

export default App;
