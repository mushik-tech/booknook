import { IBook } from "@/types/book.types";
import Image from "next/image";
import { Button, Card } from "@heroui/react";
import Link from "next/link";
import BorrowButton from "@/Components/Books/BorrowButton";
import { CircleXmark } from "@gravity-ui/icons";

const getSingleBooks = async (id: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API}/api/books/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return null;
  }

  const data = await res.json();

  return data;
};

const BookDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  const bookInfo = await getSingleBooks(id);

  if (!bookInfo?.data) {
    return (
      <div className="mx-auto my-12 flex min-h-[40vh] max-w-7xl flex-col items-center justify-center px-4 text-center dark:border rounded-2xl bg-[#f2f1e9] dark:bg-black ">
        <CircleXmark className="size-10 mb-3" />

        <h1 className="text-2xl font-bold">Book Not Found</h1>

        <p className="mt-2 text-gray-500">
          This book may have been removed or does not exist.
        </p>

        <Link href="/books" className="mt-5">
          <Button variant="primary" className="rounded-lg">
            Browse Books
          </Button>
        </Link>
      </div>
    );
  }

  const book: IBook = bookInfo.data;

  return (
    <main className="mx-auto max-w-7xl my-12">
      {/* Breadcrumb */}
      <div className="mb-6 text-sm text-gray-500">
        <Link href="/books">Books</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900 dark:text-white">{book.name}</span>
      </div>

      <Card className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 md:gap-8 lg:gap-12 ">
        {/* Book Cover */}
        <div className="flex justify-center">
          <Image
            src={book.image}
            alt={book.name}
            width={300}
            height={300}
            priority
            className="aspect-3/4  rounded-xl object-contain"
          />
        </div>

        {/* Book Information */}
        <div className="flex flex-col justify-center gap-5 py-2 col-span-2">
          <div>
            <h1 className="mt-3 text-3xl font-bold">{book.name}</h1>

            <p className="mt-3 text-base text-gray-500">
              Written by
              <span className="font-semibold text-gray-800 dark:text-white">
                {" "}
                {book.author}
              </span>
            </p>

            <p className="mt-3 text-base text-gray-500">
              Category{" "}
              <span className=" rounded-full border px-8 py-2 text-xs font-semibold capitalize text-gray-800  dark:text-white">
                {book.category}
              </span>
            </p>
          </div>

          {/* Description */}
          <div className="border-t border-gray-200 pt-5">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              About This Book
            </h2>

            <p className="mt-3 text-sm md:text-base leading-7 text-gray-600 dark:text-white/50">
              {book.bio}
            </p>
          </div>

          {/* Added By */}
          <div className="rounded-xl bg-gray-50 dark:bg-black p-4">
            <p className="text-xs font-medium uppercase text-gray-500">
              Added By
            </p>

            <p className="mt-2 font-semibold text-gray-900 dark:text-white">
              {book.userName}
            </p>

            <p className="mt-1 break-all text-sm text-gray-500 dark:text-white">
              {book.userEmail}
            </p>
          </div>

          {/* Borrow Button */}
          <div className="flex gap-10">
            <BorrowButton book={book} />

            {/* Available Copies */}
            <div className="flex items-center gap-3 border rounded-2xl px-4 dark:border-slate-800">
              <span className="text-base text-gray-500 dark:text-white">
                Available Copies
              </span>

              <span className="rounded-full bg-green-50 dark:bg-black dark:text-white px-3 py-1 text-sm font-semibold text-green-700">
                {book.copies}
              </span>
            </div>
          </div>
        </div>
      </Card>
    </main>
  );
};

export default BookDetailsPage;
