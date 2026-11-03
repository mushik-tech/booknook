import ReturnBorrowBook from "@/Components/Borrows/ReturnBorrowBook";
import { auth } from "@/lib/auth";
import { IBorrowBook } from "@/types/borrows.types";
import { Button } from "@heroui/react";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

import { Metadata } from "next";
import { getTokenFromServer } from "@/lib/getTokenFromServer";

export const metadata: Metadata = {
  title: "BookNook | Borrows Book",
  description: "Browse Book By it's category",
};

const getMyBorrowedBooks = async (email: string) => {
  const token = await getTokenFromServer();

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API}/api/borrows?email=${email}`,
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
    },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch your books.");
  }

  const result = await res.json();

  return result;
};

const MyBorrowsPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const email = session?.user?.email;

  if (!email) {
    redirect("/login");
  }

  const borrowedInfo = await getMyBorrowedBooks(email);

  const borrowedBook: IBorrowBook[] = borrowedInfo.data;
  return (
    <main className="mx-auto max-w-7xl px-4 py-10 lg:px-8">
      <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-3xl font-bold">My Borrowed Books</h1>

          <p className="mt-2">
            Manage the books you have borrowed from BookNook.
          </p>
        </div>

        <div className="rounded-xl border px-5 py-3 flex items-center gap-5 w-50">
          <p className="text-sm text-default-500">Total Borrows</p>
          <p className="text-2xl font-bold">{borrowedBook.length}</p>
        </div>
      </div>

      {borrowedBook.length === 0 ? (
        <div className="rounded-2xl border border-dashed p-10 text-center sm:p-16">
          <h2 className="text-xl font-semibold">No books found</h2>

          <p className="mt-2 mb-3 text-default-500">
            You have not borrowed any books yet.
          </p>

          <Link href={"/books"}>
            <Button>Borrow Books</Button>
          </Link>
        </div>
      ) : (
        <div className="overflow-x-auto rounded-2xl border">
          <table className="w-full min-w-175 text-left text-sm">
            <thead className="border-b bg-default-100">
              <tr>
                <th className="px-5 py-4 font-semibold">Book</th>
                <th className="px-5 py-4 font-semibold">Borrow Date</th>
                <th className="px-5 py-4 font-semibold">Return Date</th>
                <th className="px-5 py-4 text-center font-semibold">Actions</th>
              </tr>
            </thead>

            <tbody>
              {borrowedBook.map((book) => (
                <tr
                  key={book._id}
                  className="border-b last:border-b-0 hover:bg-default-50"
                >
                  <td className="px-5 py-4 flex items-center gap-2">
                    <Image
                      src={book.bookImage}
                      alt={book.bookTitle}
                      width={40}
                      height={40}
                    ></Image>
                    <div className="font-semibold">{book.bookTitle}</div>
                  </td>

                  <td className="px-5 py-4 capitalize">
                    {new Date(book.borrowAt).toLocaleDateString("en-GB", {
                      dateStyle: "long",
                    })}
                  </td>

                  <td className="px-5 py-4">
                    {new Date(book.returnAt).toLocaleDateString("en-GB", {
                      dateStyle: "long",
                    })}
                  </td>

                  <td className="px-5 py-4">
                    <div className="flex items-center justify-center gap-2">
                      <ReturnBorrowBook borrowedBook={book} />
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

export default MyBorrowsPage;
