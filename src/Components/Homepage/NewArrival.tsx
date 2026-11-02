import { IBook } from "@/types/book.types";
import React from "react";
import BookCard from "../Books/BookCard";
import { Button } from "@heroui/react";
import Link from "next/link";

const getNewArrivalBooks = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API}/api/new-arrivals`);
  const data = await res.json();

  return data;
};

const NewArrival = async () => {
  const booksData = await getNewArrivalBooks();

  const books: IBook[] = booksData.data;

  return (
    <div className="max-w-7xl mx-auto my-12">
      <h1 className="text-3xl mb-6">New Arrival</h1>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {books.map((book) => (
          <BookCard book={book} key={book._id}></BookCard>
        ))}
      </div>

      <div className="text-center mt-6">
        <Link href={"/books"}>
          <Button className="rounded-lg px-12">See All Books</Button>
        </Link>
      </div>
    </div>
  );
};

export default NewArrival;
