"use client";
import { IBorrowBook } from "@/types/borrows.types";
import { AlertDialog, Button, toast } from "@heroui/react";
import { useRouter } from "next/navigation";

const ReturnBorrowBook = ({ borrowedBook }: { borrowedBook: IBorrowBook }) => {
  const router = useRouter();

  const handleReturnBook = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API}/api/borrows/${borrowedBook._id}`,
      {
        method: "DELETE",
      },
    );
    const data = await res.json();

    if (!data.success) {
      toast.danger("Failed to return book! Try Again");
      return;
    }

    toast.success(data.message);
    router.push("/my-borrows");
  };

  return (
    <AlertDialog>
      <Button className="bg-success-soft text-success-soft-foreground">
        Return Book
      </Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-100">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="success" />
              <AlertDialog.Heading>
                Return "{borrowedBook.bookTitle}" book
              </AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>The book will be removed from your borrow list.</p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Not Yet
              </Button>
              <Button slot="close" variant={"primary"} onClick={handleReturnBook}>
                Return Book
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
};

export default ReturnBorrowBook;
