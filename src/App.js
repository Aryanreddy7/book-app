import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import BookList from "./components/BookList";
import BookModal from "./components/BookModal";
import "./App.css";

function App() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedBook, setSelectedBook] = useState(null);

  const handleSearch = async (query) => {
    if (!query.trim()) return;
    setLoading(true);
    setError("");
    setBooks([]);

    try {
      const response = await fetch(
        `https://openlibrary.org/search.json?title=${query}`
      );
      if (!response.ok)
        throw new Error("Failed to fetch books. Try again later!");
      const data = await response.json();

      if (data.docs.length === 0)
        setError("No books found. Try a different title!");
      else setBooks(data.docs.slice(0, 12));
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      <header className="header">
        <h1 className="title">📚 Book Finder</h1>
        <p className="subtitle">Discover books instantly from OpenLibrary</p>
      </header>

      <SearchBar onSearch={handleSearch} />

      {loading && <div className="loader"></div>}
      {error && <p className="error">{error}</p>}

      {!loading && !error && (
        <BookList books={books} onBookClick={setSelectedBook} />
      )}

      {selectedBook && (
        <BookModal book={selectedBook} onClose={() => setSelectedBook(null)} />
      )}
    </div>
  );
}

export default App;
