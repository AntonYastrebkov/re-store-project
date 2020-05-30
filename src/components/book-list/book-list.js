import React, { Component } from 'react';
import { connect } from 'react-redux';

import BookItem from '../book-item';
import { withBookStoreService } from '../hoc';
import { booksLoaded } from '../../actions';
import { compose } from '../../utils';

import './book-list.css';

class BookList extends Component {

  componentDidMount() {
    const { bookStoreService, booksLoaded } = this.props;
    const books = bookStoreService.getBooks();

    booksLoaded(books);
  }

  render() {
    const { books } = this.props;

    return (
      <ul>
        {
          books.map((book) => {
            return <li key={book.id}><BookItem book={book}/></li>
          })
        }
      </ul>
    );
  }
};

const mapStateToProps = ({ books }) => {
  return { books };
};

const mapDispatchToProps = {
  booksLoaded
};

export default compose(
  withBookStoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookList);