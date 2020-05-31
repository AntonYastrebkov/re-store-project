
const booksLoaded = (newBooks) => {
  return {
    type: 'FETCH_BOOKS_SUCCESS',
    payload: newBooks
  };
};

const booksRequested = () => {
  return {
    type: 'FETCH_BOOKS_REQUEST'
  };
};

const booksError = (error) => {
  return {
    type: 'FETCH_BOOKS_FAILURE',
    payload: error
  };
};

const bookAddedtoCart = (id) => {
  return {
    type: 'BOOK_ADDED_TO_CART',
    payload: id
  };
};

const bookRemovedFromCart = (bookId) => {
  return {
    type: 'BOOK_REMOVED_FROM_CART',
    payload: bookId
  };
};

const allBookRemovedFromCart = (bookId) => {
  return {
    type: 'ALL_BOOKS_REMOVED_FROM_CART',
    payload: bookId
  };
};

// const fetchBooksOld = (bookStoreService, dispatch) => () => {
//   dispatch(booksRequested()); 
//   bookStoreService.getBooks()
//     .then((data) => dispatch(booksLoaded(data)))
//     .catch((err) => dispatch(booksError(err)));
// }

const fetchBooks = (bookStoreService) => () => (dispatch) => {
  dispatch(booksRequested()); 
  bookStoreService.getBooks()
    .then((data) => dispatch(booksLoaded(data)))
    .catch((err) => dispatch(booksError(err)));
};

export {
  fetchBooks,
  bookAddedtoCart,
  bookRemovedFromCart,
  allBookRemovedFromCart
};