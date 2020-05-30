import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { HomePage, CartPage } from '../pages';
import Spinner from '../spinner';

import './app.css';

const App = () => {
  return (
    <div>
      <h1>Here will be books</h1>
      <Switch>
        <Route
            path="/"
            exact
            component={HomePage}/>
        <Route
            path="/cart"
            component={CartPage}/>
        
        <Route render={() => (
            <div>
              <h2>404: page not found</h2>
              <Spinner />
            </div>
        )} />
      </Switch>
    </div>
  );
};

export default App;