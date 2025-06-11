"use client";
import BookCreate from "./components/BookCreate";
import { useState } from "react";
import BookList from "./components/BookList";

interface Book {
  id: number;
  title: string;
}

export default function Home() {
  const [books, setBooks] = useState<Book[]>([]);

  const generateId = () => {
    return Math.round(Math.random() * 9999);
  };

  const addBook = (title: string) => {
    setBooks((prev) => [...prev, { id: generateId(), title }]);
  };

  const deleteBook = (bookId) => {
    const updatedBooks = books.filter((book) => {
      return book.id !== bookId;
    });

    setBooks(updatedBooks);
  };

  const editBook = (bookId, newTitle) => {
    const updatedBooks = books.map((book) => {
      if (book.id == bookId) {
        return { ...book, title: newTitle };
      }

      return book;
    });

    setBooks(updatedBooks);
  };

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <BookList
        books={books}
        onDelete={deleteBook}
        onEdit={editBook}
      ></BookList>
      <footer className="footer bg-neutral text-neutral-content p-10 items-center">
        <BookCreate onSubmit={addBook} />
      </footer>
    </div>
  );
}
