// src/components/Library.tsx
import React, { useEffect } from "react";
import { useAppSelector } from "../hooks/useAppSelector";
import { useAppDispatch } from "../hooks/useAppDispatch";
import {
  fetchAvailableBooks,
  borrowBook,
  returnBook,
} from "../features/library/librarySlice";

const Library: React.FC = () => {
  const dispatch = useAppDispatch();
  const { availableBooks, borrowedBooks, loading, error } = useAppSelector(
    (state) => state.library
  );

  useEffect(() => {
    dispatch(fetchAvailableBooks());
  }, [dispatch]);

  return (
    <div>
      <h1>📚 Library System (Async Example)</h1>
      {loading && <p>Loading available books...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <h2>Available Books: {availableBooks.join(", ") || "None"}</h2>
      <button onClick={() => dispatch(borrowBook(10))}>Borrow Book 10</button>

      <h2>Borrowed Books: {borrowedBooks.join(", ") || "None"}</h2>
      <button onClick={() => dispatch(returnBook(10))}>Return Book 10</button>
    </div>
  );
};

export default Library;
