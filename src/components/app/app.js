import React, { Component } from 'react';

import Spinner from '../spinner';
import ErrorBoundry from '../error-boundry';
import { BookStoreServiceProvider } from '../book-store-context';
import BookStoreService from '../../services/book-store-service';

export default class App extends Component {

  state = {
    bookService: new BookStoreService()
  };

  render() {
    return (
      <ErrorBoundry>
        <BookStoreServiceProvider value={this.state.bookService}>
          <h1>Here will be blood!</h1>
          <Spinner />
        </BookStoreServiceProvider>
      </ErrorBoundry>
    );
  }
}