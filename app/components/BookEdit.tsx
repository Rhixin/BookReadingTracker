import React, { useState } from "react";

const BookEdit = ({ book, onCancel, onEdit }) => {
  const [newTitle, setNewTitle] = useState(book.title);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (newTitle == book.title || newTitle == "") {
      return;
    }

    onEdit(book.id, newTitle);
    onCancel();
  };
  const handleChange = (event) => {
    setNewTitle(event.target.value);
  };
  return (
    <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
      <input
        value={newTitle}
        onChange={(event) => {
          handleChange(event);
        }}
        className="input input-neutral"
      ></input>
      <div className="space-x-4">
        <button className="btn btn-primary" onClick={onCancel}>
          Cancel
        </button>
        <button type="submit" className="btn btn-success">
          Save
        </button>
      </div>
    </form>
  );
};

export default BookEdit;
