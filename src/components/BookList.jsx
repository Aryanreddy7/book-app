import React from "react";
import BookCard from "./BookCard";
import "./BookList.css";

function BookList({ books, onBookClick }) {
  return (
    <div className="book-list">
      {books.map((book, index) => (
        <BookCard key={index} book={book} onClick={onBookClick} />
      ))}
    </div>
  );
}

export default BookList;
