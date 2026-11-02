"use client";

import { IBook } from "@/types/book.types";
import { toast } from "@heroui/react";

import { Envelope } from "@gravity-ui/icons";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { useState } from "react";
import { useSession } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

interface BorrowButtonProps {
  book: IBook;
}

const BorrowButton = ({ book }: BorrowButtonProps) => {
  const isDisabled = Number(book.copies) <= 0;

  const router = useRouter();

  const { data: session } = useSession();

  const handleBorrow = async () => {
    try {
      const borrowInfo = {
        bookId: book._id,
        bookTitle: book.name,
        bookImage: book.image,
        userName: session?.user.name,
        userEmail: session?.user.email,
      };

      const res = await fetch(`${process.env.NEXT_PUBLIC_API}/api/borrows`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(borrowInfo),
      });

      const data = await res.json();

      if (!data.success) {
        toast.danger(data.message);
        return;
      }

      toast.success("Book Borrowed!! Return within 7 Days");

      router.push(`/books/${book._id}`);
    } catch (error) {
      console.error(error);
      toast.danger("Something went wrong. Please try again.");
    }
  };

  return (
    <Modal>
      <Button
        variant="primary"
        className="w-full font-semibold sm:w-fit sm:min-w-48"
        isDisabled={isDisabled}
      >
        {isDisabled ? "No Copies Available" : "Borrow This Book"}
      </Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Heading>Borrow "{book.name}"</Modal.Heading>
              <p className="mt-1.5 text-sm leading-5 text-muted">
                You can keep this book for 7 Days
              </p>
            </Modal.Header>
            <Modal.Body className="">
              <Surface variant="default">
                <form className="flex flex-col gap-4">
                  <TextField
                    className="w-full"
                    name="name"
                    type="text"
                    variant="secondary"
                    isReadOnly
                    value={session?.user.name}
                  >
                    <Label>Name</Label>
                    <Input placeholder="Enter your name" />
                  </TextField>
                  <TextField
                    className="w-full"
                    name="email"
                    type="email"
                    variant="secondary"
                    isReadOnly
                    value={session?.user.email}
                  >
                    <Label>Email</Label>
                    <Input placeholder="Enter your email" />
                  </TextField>
                </form>
              </Surface>
            </Modal.Body>
            <Modal.Footer>
              <Button slot="close" variant="secondary">
                Cancel
              </Button>
              <Button onClick={handleBorrow} slot="close">
                Borrow Book
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default BorrowButton;
