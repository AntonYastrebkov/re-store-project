import React from 'react';

import './book-item.css';

const BookItem = ({ book, onAddedToCart }) => {
  const { title, author, price, coverImage } = book;
  return (
    <div className="book-item">
      <div className="book-cover">
        <img alt="cover"
            src={coverImage}/>
      </div>
      <div className="book-details">
        <span className="book-title">{title}</span>
        <div className="book-author">{author}</div>
        <div className="book-price">${price}</div>
        <button 
            onClick={onAddedToCart}
            className="btn btn-info add-to-cart">
          Add to cart
        </button>
      </div>

    </div>
  );
};

export default BookItem;