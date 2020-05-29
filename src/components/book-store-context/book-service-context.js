import React from 'react';

const {
  Provider: BookStoreServiceProvider,
  Comsumer: BookStoreServiceConsumer
} = React.createContext();

export {
  BookStoreServiceProvider,
  BookStoreServiceConsumer
};