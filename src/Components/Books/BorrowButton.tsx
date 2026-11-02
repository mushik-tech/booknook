"use client";

import { IBook } from "@/types/book.types";
import { Button, toast } from "@heroui/react";
import { useState } from "react";

interface BorrowButtonProps {
  book: IBook;
}

const BorrowButton = ({ book }: BorrowButtonProps) => {
  const isDisabled = Number(book.copies) <= 0;

  const handleBorrow = async () => {
    try {
      // TODO: Connect your borrow API here.
      // Example:
      // const res = await fetch(
      //   `${process.env.NEXT_PUBLIC_API}/api/borrows`,
      //   {
      //     method: "POST",
      //     headers: { "Content-Type": "application/json" },
      //     body: JSON.stringify({ bookId }),
      //   }
      // );

      console.log("Borrow requested for book:", book._id);

      toast.success("Borrow functionality is not connected yet.");
    } catch (error) {
      console.error(error);
      toast.danger("Something went wrong. Please try again.");
    }
  };

  return (
    <Button
      variant="primary"
      className="w-full font-semibold sm:w-fit sm:min-w-48"
      isDisabled={isDisabled}
      onPress={handleBorrow}
    >
      {isDisabled ? "No Copies Available" : "Borrow This Book"}
    </Button>
  );
};

export default BorrowButton;
