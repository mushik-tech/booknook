import DeleteBook from "@/Components/MyBooks/DeleteBook";
import UpdateBook from "@/Components/MyBooks/UpdateBook";
import { auth } from "@/lib/auth";
import type { IBook } from "@/types/book.types";
import { Button } from "@heroui/react";
import { Metadata } from "next";
import { headers } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "BookNook | My Books",
  description: "Browse Book By it's category",
};

const getMyBooks = async (email: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API}/api/my-books/${email}`,
    {
      cache: "no-store",
    },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch your books.");
  }

  const result = await res.json();

  return result;
};

const MyBooksPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const email = session?.user?.email;

  if (!email) {
    redirect("/login");
  }

  const booksInfo = await getMyBooks(email);

  const books: IBook[] = booksInfo.data;

  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-3xl font-bold">My Books</h1>

          <p className="mt-2">Manage the books you have added to BookNook.</p>
        </div>

        <div className="rounded-xl border px-5 py-3 flex items-center gap-5 w-40">
          <p className="text-sm text-default-500">Total Books</p>
          <p className="text-2xl font-bold">{books.length}</p>
        </div>
      </div>

      {books.length === 0 ? (
        <div className="rounded-2xl border border-dashed p-10 text-center sm:p-16">
          <h2 className="text-xl font-semibold">No books found</h2>

          <p className="mt-2 mb-3 text-default-500">
            You have not added any books yet.
          </p>

          <Link href={'/add-books'}>
            <Button>Add Books</Button>
          </Link>
        </div>
      ) : (
        <div className="overflow-x-auto rounded-2xl border">
          <table className="w-full min-w-175 text-left text-sm">
            <thead className="border-b bg-default-100">
              <tr>
                <th className="px-5 py-4 font-semibold">Book</th>
                <th className="px-5 py-4 font-semibold">Author</th>
                <th className="px-5 py-4 font-semibold">Category</th>
                <th className="px-5 py-4 font-semibold">Copies</th>
                <th className="px-5 py-4 text-center font-semibold">Actions</th>
              </tr>
            </thead>

            <tbody>
              {books.map((book) => (
                <tr
                  key={book._id}
                  className="border-b last:border-b-0 hover:bg-default-50"
                >
                  <td className="px-5 py-4">
                    <div className="font-semibold">{book.name}</div>
                  </td>

                  <td className="px-5 py-4">{book.author}</td>

                  <td className="px-5 py-4 capitalize">{book.category}</td>

                  <td className="px-5 py-4">{book.copies}</td>

                  <td className="px-5 py-4">
                    <div className="flex items-center justify-center gap-2">
                      <UpdateBook book={book}></UpdateBook>
                      <DeleteBook book={book}></DeleteBook>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </main>
  );
};

export default MyBooksPage;
