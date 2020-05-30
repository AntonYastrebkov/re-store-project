import React from 'react';
import { BookStoreServiceConsumer } from '../book-store-context';

const withBookstoreService = () => (Wrapped) => {

  return (props) => {
    return (
      <BookStoreServiceConsumer>
        {
          (bookStoreService) => {
            return (<Wrapped {...props}
                     bookStoreService={bookStoreService}/>);
          }
        }
      </BookStoreServiceConsumer>
    );
  }
};

export default withBookstoreService;