import React, { useState } from "react";
import BookEdit from "./BookEdit";

const BookCard = ({ book, onDelete, onEdit }) => {
  const [showEdit, setShowEdit] = useState(false);
  const handleDelete = () => {
    onDelete(book.id);
  };

  const toggleEdit = () => {
    setShowEdit(!showEdit);
  };
  return (
    <div key={book.id} className="p-2 bg-gray-100 rounded shadow flex flex-col">
      <div className="flex w-full items-end justify-between mb-4">
        <span className="text-lg font-bold">ID: {book.id}</span>
        <div className="space-x-3">
          {!showEdit && (
            <button onClick={toggleEdit} className="btn btn-warning">
              Edit
            </button>
          )}

          <button onClick={handleDelete} className="btn btn-error">
            Delete
          </button>
        </div>
      </div>

      {!showEdit ? (
        book.title
      ) : (
        <BookEdit book={book} onCancel={toggleEdit} onEdit={onEdit}></BookEdit>
      )}
    </div>
  );
};

export default BookCard;
