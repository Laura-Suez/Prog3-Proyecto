import React from "react";
import BookItem from "../bookItem/BookItem";

const Books = ({ books, onBookDeleted }) => {
  return (
    <div className="d-flex justify-content-center flex-wrap">
      {books.map((book) => (
        <BookItem
          key={book.id}
          id={book.id}
          title={book.title}
          author={book.author}
          rating={book.rating}
          pageCount={book.pageCount}
          imageUrl={book.imageUrl}
          available={book.available}
          onDelete={onBookDeleted}
        />
      ))}
    </div>
  );
};

export default Books;
