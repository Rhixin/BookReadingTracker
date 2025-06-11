import React, { useState } from "react";

const BookCreate = ({ onSubmit }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (title == "") return;
    onSubmit(title);
    setTitle("");
  };

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  return (
    <div className="flex flex-col w-full">
      <form className="flex w-full space-x-2" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Title"
          value={title}
          className="input input-bordered flex-grow text-black"
          onChange={(event) => handleChange(event)}
        />
        <button type="submit" className="btn btn-primary">
          Add Book
        </button>
      </form>

      <div className="w-full text-center mt-8">
        <h1 className="text-5xl font-bold">
          WELCOME TO MY BOOK READING TRACKER
        </h1>
      </div>
    </div>
  );
};

export default BookCreate;
