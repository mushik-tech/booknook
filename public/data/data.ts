import { Search, ClipboardCheck, BookCheck, CheckCircle2 } from "lucide-react";

export const slides = [
  {
    id: 1,
    eyebrow: "YOUR NEXT CHAPTER STARTS HERE",
    title: "Every Book Holds a New Adventure.",
    description:
      "Discover captivating stories, explore new ideas, and find the books that inspire your next great adventure.",
    image:
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=2000&q=85",
  },
  {
    id: 2,
    eyebrow: "A WORLD OF KNOWLEDGE",
    title: "Find Your Next Favorite Read.",
    description:
      "From timeless classics to modern masterpieces, explore a collection that has something for every curious mind.",
    image:
      "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=2000&q=85",
  },
  {
    id: 3,
    eyebrow: "READ MORE. DREAM BIGGER.",
    title: "Good Books. Great Possibilities.",
    description:
      "Build your personal collection, discover hidden gems, and let every page take you somewhere extraordinary.",
    image:
      "https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&w=2000&q=85",
  },
];

export const products = [
  {
    id: 1,
    name: "On the Origin of Species",
    price: 40,
    oldPrice: 45,
    image:
      "https://i.pinimg.com/474x/fb/ef/77/fbef77097f21e64f72f4204d92a5313e.jpg",
  },
  {
    id: 2,
    name: "The Double Helix",
    price: 30,
    oldPrice: 32,
    image:
      "https://i.pinimg.com/736x/3b/4b/3b/3b4b3bd8bb29ab324adfceb0efa1f458.jpg",
  },
  {
    id: 3,
    name: "The Selfish Gene",
    price: 70,
    oldPrice: 74,
    image:
      "https://i.pinimg.com/1200x/a7/45/1d/a7451d52666f9e4f45929c0b76162965.jpg",
  },
  {
    id: 4,
    name: "A Brief History of Time",
    price: 32,
    oldPrice: 36,
    image:
      "https://i.pinimg.com/736x/0e/4a/3b/0e4a3b402a182777a4b3420efbf64be3.jpg",
  },
];

export const borrowingSteps = [
  {
    number: "01",
    title: "Discover a Book",
    description:
      "Explore our collection and find a book that matches your interests, curiosity, and reading goals.",
    icon: Search,
  },
  {
    number: "02",
    title: "Request to Borrow",
    description:
      "Open your favorite book and submit a borrowing request to get started.",
    icon: ClipboardCheck,
  },
  {
    number: "03",
    title: "Get Confirmation",
    description:
      "Wait for your request to be approved and check the borrowing details in your account.",
    icon: CheckCircle2,
  },
  {
    number: "04",
    title: "Enjoy Reading",
    description:
      "Read, learn, and explore new ideas. Return the book on time so another reader can enjoy it.",
    icon: BookCheck,
  },
];
