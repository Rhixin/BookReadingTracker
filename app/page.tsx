"use client";
import BookCreate from "./components/BookCreate";
import { useEffect, useState } from "react";
import BookList from "./components/BookList";
import axios from "axios";

interface Book {
  id: number;
  title: string;
}

export default function Home() {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    const response = await axios.get("http://localhost:3001/books");

    setBooks(response.data);
  };

  const addBook = async (title: string) => {
    const response = await axios.post("http://localhost:3001/books", { title });

    // It will return a new book so add it to the local list
    const updatedBooks = [...books, response.data];

    setBooks(updatedBooks);
  };

  const deleteBook = async (bookId) => {
    await axios.delete(`http://localhost:3001/books/${bookId}`);

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
