import React from "react";
import "./BookModal.css";

const BookModal = ({ book, onClose }) => {
  const coverId = book.cover_i;
  const imageUrl = coverId
    ? `https://covers.openlibrary.org/b/id/${coverId}-L.jpg`
    : "https://via.placeholder.com/150x220?text=No+Cover";

  return (
    <div className="book-modal" onClick={onClose}>
      <div className="book-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          ×
        </button>
        <img src={imageUrl} alt={book.title} />
        <h2>{book.title}</h2>
        <p>
          <strong>Author:</strong>{" "}
          {book.author_name ? book.author_name.join(", ") : "Unknown"}
        </p>
        <p>
          <strong>First Published:</strong> {book.first_publish_year || "N/A"}
        </p>
        <p>
          <strong>Edition Count:</strong> {book.edition_count || "N/A"}
        </p>
      </div>
    </div>
  );
};

export default BookModal;
