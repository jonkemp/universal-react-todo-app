import React from 'react';
import { Route, IndexRoute } from 'react-router';
import IndexPage from '../components/indexPage';

const routes = (
  <Route path="/">
    <IndexRoute component={IndexPage}/>
  </Route>
);

export default routes;
