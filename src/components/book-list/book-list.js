import React, { Component } from 'react';
import { connect } from 'react-redux';

import BookItem from '../book-item';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import { withBookStoreService } from '../hoc';
import { fetchBooks, bookAddedtoCart } from '../../actions';
import { compose } from '../../utils';

import './book-list.css';

const BookList = ({ books, onAddedToCart }) => {
  return (
    <ul className="book-list">
      {
        books.map((book) => {
          return (
            <li key={book.id}>
              <BookItem 
                  book={book} 
                  onAddedToCart={() => onAddedToCart(book.id)}/>
            </li>
          );
        })
      }
    </ul>
  );
};

class BookListContainer extends Component {

  componentDidMount() {
    this.props.fetchBooks();
  }

  render() {
    const { books, loading, error, onAddedToCart } = this.props;

    if (loading) {
      return <div align="center"><Spinner /></div>;
    }

    if (error) {
      return <div align="center"><ErrorIndicator /></div>
    }

    return <BookList books={books} onAddedToCart={onAddedToCart}/>;
  }
};


const mapStateToProps = ({ bookList: {books, loading, error} }) => {
  return { books, loading, error };
};

const mapDispatchToProps = (dispatch, { bookStoreService}) => {
  return {
    fetchBooks: fetchBooks(bookStoreService, dispatch),
    onAddedToCart: (id) => dispatch(bookAddedtoCart(id))
  };
};

export default compose(
  withBookStoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);