export interface IBorrowBook {
  _id: string;
  bookId: string;
  bookTitle: string;
  bookImage: string;
  userName: string;
  userEmail: string;
  borrowAt: Date;
  returnAt: Date;
}
