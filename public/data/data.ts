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
    name: "Rival Messenger",
    price: 40,
    oldPrice: 45,
    image:
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=500&q=85",
  },
  {
    id: 2,
    name: "Voyage Yoga Bag",
    price: 30,
    oldPrice: 32,
    image:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=500&q=85",
  },
  {
    id: 3,
    name: "Impulse Duffle",
    price: 70,
    oldPrice: 74,
    image:
      "https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&w=500&q=85",
  },
  {
    id: 4,
    name: "Compete Track Tote",
    price: 32,
    oldPrice: 36,
    image:
      "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=500&q=85",
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
