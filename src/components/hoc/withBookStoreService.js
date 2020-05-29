import React from 'react';

import { BookStoreServiceConsumer } from '../book-store-context';

const withBookStoreService = (mapMethodsToProps) => (Wrapped) => {
  return (props) => {
    return (
      <BookStoreServiceConsumer>
        {
          (bookStoreService) => {
            const bookMethods = mapMethodsToProps(bookStoreService);
            return <Wrapped {...props} {...bookMethods} />;
          }
        }
      </BookStoreServiceConsumer>
    );
  };
};

export default withBookStoreService;