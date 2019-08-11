import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from './pages/Main/Main';
import Details from './pages/Details/Details';

const App = () => (
  //   const url = new URL(document.location);
  //   const hasId = url.searchParams.has('id');
  //   console.log(url.searchParams.get('id'));

  //   if (hasId) {
  //     return <Details id={url.searchParams.get('id')} />;
  //   }

  <Switch>
    <Route exact path="/" component={Main} />
    <Route exact path="/:id" component={Details} />
  </Switch>
);

export default App;
