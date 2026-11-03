import AddBook from "@/Components/Books/AddBook";
import { Description, Fieldset, Surface } from "@heroui/react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "BookNook | Add Books",
  description: "Browse Book By it's category",
};

const AddBookPage = () => {
  return (
    <div className="mx-auto my-12 w-full max-w-4xl px-4 sm:px-6">
      <Surface className="w-full rounded-3xl bg-surface p-6 shadow-sm sm:p-8 lg:p-10">
        {/* Form Header */}
        <div className=" border-b border-separator mb-5 pb-3">
          <Fieldset.Legend className="text-2xl font-bold tracking-tight sm:text-3xl">
            Add a New Book
          </Fieldset.Legend>

          <Description className="text-sm text-muted">
            Share a book with the BookNook community. Fill in the details below
            to add it to your collection.
          </Description>
        </div>

        <AddBook />
      </Surface>
    </div>
  );
};

export default AddBookPage;
