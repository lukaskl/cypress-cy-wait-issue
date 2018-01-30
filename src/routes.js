import React from 'react';
import { IndexRoute, Redirect, Route, } from 'react-router';
import { SearchResults, Error404, Home } from './containers';

const searchResultsPath = 'results/:departure-:arrival/:departureDate/(:returnDate/):adults,:children,:infants/';

export const getRoutes = () => (
  <div>
    <Route path="/" component={Home}>
      <IndexRoute />
      <Route component={SearchResults} path={searchResultsPath} />
      <Route path="/404" component={Error404} />
      <Redirect from="*" to="/404" />
    </Route>
  </div>
);
