import React from 'react';

import { withBookStoreService } from '../hoc';
import Spinner from '../spinner';

import './app.css';

const App = ({ bookStoreService }) => {
  console.log(bookStoreService.getBooks());
  return (
    <div>
      <h1>Here will be books</h1>
      <Spinner />
    </div>
  );
};

export default withBookStoreService()(App);