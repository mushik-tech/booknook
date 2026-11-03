"use client";

import { getTokenFromClient } from "@/lib/getTokenFromClient";
import { IBook } from "@/types/book.types";
import { TrashBin } from "@gravity-ui/icons";
import { AlertDialog, Button, toast } from "@heroui/react";
import { useRouter } from "next/navigation";

const DeleteBook = ({ book }: { book: IBook }) => {
  const router = useRouter();

  const handleBookDelete = async () => {
    const token = await getTokenFromClient();

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API}/api/books/${book._id}`,
      {
        method: "DELETE",
        headers: {
          authorization: `Bearer ${token}`,
        },
      },
    );
    const data = await res.json();

    if (!data.success) {
      toast.danger("Failed to delete book");
      return;
    }

    toast.success(data.message);
    router.push("/my-books");
  };

  return (
    <AlertDialog>
      <Button variant="danger" size="sm">
        <TrashBin />
        Delete
      </Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-100">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>
                Delete book permanently?
              </AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete <strong>{book.name}</strong> and
                all of its data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button onClick={handleBookDelete} slot="close" variant="danger">
                Delete Book
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
};

export default DeleteBook;
