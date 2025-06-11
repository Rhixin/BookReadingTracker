import React from "react";
import BookCard from "./BookCard";

const BookList = ({ books, onDelete, onEdit }) => {
  const renderBooks = () => {
    return books.map((book) => (
      <BookCard
        key={book.id}
        book={book}
        onDelete={onDelete}
        onEdit={onEdit}
      ></BookCard>
    ));
  };

  return (
    <div className="flex-1 p-4 space-y-2">
      <div className="w-full text-left m-4 ml-0">
        <h1 className="text-5xl font-bold text-black">List of Books Read</h1>
      </div>
      {renderBooks()}
    </div>
  );
};

export default BookList;
