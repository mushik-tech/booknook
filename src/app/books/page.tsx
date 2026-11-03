import BookCard from "@/Components/Books/BookCard";
import EmptyBooks from "@/Components/Books/EmptyBooks";
import { IBook } from "@/types/book.types";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "BookNook | All Books",
  description: "Browse Book By it's category",
};

const getAllBooks = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API}/api/books`);
  const data = await res.json();

  return data;
};

const AllBooksPage = async () => {
  const booksInfo = await getAllBooks();
  const books: IBook[] = booksInfo.data;

  return (
    <div className="mx-auto max-w-7xl px-7 md:px-0 my-12">
      {/* Heading */}
      <div className="mb-6 flex gap-3 items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold">Explore Books</h1>
          <p className="mt-2 text-sm text-gray-500">
            Discover your next favorite read.
          </p>
        </div>

        <div className="flex items-center gap-2 rounded-full bg-white dark:bg-black dark:border-2 px-4 py-2 shadow-sm">
          <span className="text-sm text-gray-500 dark:text-white">
            Total Books
          </span>
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#f2f1e9] px-2 text-sm font-bold text-gray-900">
            {books.length}
          </span>
        </div>
      </div>

      {books.length <= 0 ? (
        <EmptyBooks />
      ) : (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {books.map((book) => (
            <BookCard key={book._id} book={book} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AllBooksPage;
