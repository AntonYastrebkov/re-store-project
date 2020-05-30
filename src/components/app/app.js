import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { HomePage, CartPage } from '../pages';
import ShopHeader from '../shop-header';
import Spinner from '../spinner';

import './app.css';

const App = () => {
  return (
    <main role="main" className="container">
      <ShopHeader numItems={5} total={142}/>
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
    </main>
  );
};

export default App;