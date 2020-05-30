import React, { Component } from 'react';

import BookItem from '../book-item';

import './book-list.css';

class BookList extends Component {

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

export default BookList;