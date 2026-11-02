import { IBook } from "@/types/book.types";
import { Card, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

export interface BookCardProps {
  book: IBook;
}

const BookCard = ({ book }: BookCardProps) => {

  return (
    <Card className="flex flex-row">
      {/* Book Image */}
      <div className="md:aspect-9/12">
        <Image
          src={book.image}
          alt={book.name}
          width={160}
          height={160}
          className=""
          loading="eager"
        />

        <span className="absolute left-3 top-3 rounded-full bg-[#f2f1e9] px-3 py-1 text-xs font-semibold shadow-sm capitalize dark:bg-black">
          {book.category}
        </span>
      </div>

      <div className="space-y-4 mt-6">
        <Card.Header>
          <Card.Title className="text-lg font-bold">{book.name}</Card.Title>

          <Card.Description>By {book.author}</Card.Description>
        </Card.Header>
        <Card.Content />
        <Card.Footer>
          <Link href={`/books/${book._id}`}>
            <Button>View Details</Button>
          </Link>
        </Card.Footer>
      </div>
    </Card>
  );
};

export default BookCard;
