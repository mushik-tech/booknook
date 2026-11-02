import { CircleXmark } from "@gravity-ui/icons";

const EmptyBooks = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center bg-[#f2f1e9] dark:bg-black dark:border-slate-700 dark:border-2 rounded-2xl">
      <div className="mb-4">
        <CircleXmark className="size-10" />
      </div>

      <h2 className="text-xl font-bold ">No Books Found</h2>

      <p className="mt-2 max-w-sm text-sm text-gray-500">
        There are no books available right now. Check back later or add a new
        book to get started.
      </p>
    </div>
  );
};

export default EmptyBooks;
