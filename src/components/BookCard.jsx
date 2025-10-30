import React from "react";
import "./BookCard.css";

function BookCard({ book, onClick }) {
  const coverId = book.cover_i;
  const imageUrl = coverId
    ? `https://covers.openlibrary.org/b/id/${coverId}-M.jpg`
    : "https://via.placeholder.com/150x200?text=No+Cover";

  return (
    <div className="book-card" onClick={() => onClick(book)}>
      <img src={imageUrl} alt={book.title} />
      <h3>{book.title}</h3>
      <p>{book.author_name?.[0] || "Unknown Author"}</p>
      <p className="year">{book.first_publish_year || "N/A"}</p>
    </div>
  );
}

export default BookCard;
