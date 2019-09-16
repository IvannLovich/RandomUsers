import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from './pages/Main/Main';
import Details from './pages/Details/Details';

const App = () => (
  <Switch>
    <Route exact path="/" component={Main} />
    <Route exact path="/:id" component={Details} />
  </Switch>
);

export default App;
