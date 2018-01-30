import React, { Component } from 'react';
import { browserHistory, Router } from 'react-router';
import { getRoutes } from './routes';

class App extends Component {

  render() {
    const routes = getRoutes();

    return (
      <Router history={browserHistory}>
        {routes}
      </Router>
    );
  }
}

export default App;
