import React, { Component } from 'react';
import { connect } from 'react-redux';

import BookItem from '../book-item';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import { withBookStoreService } from '../hoc';
import { fetchBooks } from '../../actions';
import { compose } from '../../utils';

import './book-list.css';

const BookList = ({ books }) => {
  return (
    <ul className="book-list">
      {
        books.map((book) => {
          return <li key={book.id}><BookItem book={book}/></li>
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
    const { books, loading, error } = this.props;

    if (loading) {
      return <div align="center"><Spinner /></div>;
    }

    if (error) {
      return <div align="center"><ErrorIndicator /></div>
    }

    return <BookList books={books}/>;
  }
};


const mapStateToProps = ({ books, loading, error }) => {
  return { books, loading, error };
};

const mapDispatchToProps = (dispatch, { bookStoreService}) => {
  return {
    fetchBooks: fetchBooks(bookStoreService, dispatch)
  };
};

export default compose(
  withBookStoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);