export interface IBook {
  _id: string;
  name: string;
  copies: number;
  category: "fiction" | "science" | "history" | "kids" | "others";
  author: string;
  image: string;
  bio: string;
  userName: string;
  userEmail: string;
}
