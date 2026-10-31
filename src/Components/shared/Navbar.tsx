"use client";

import { useState } from "react";
import { Button } from "@heroui/react";
import { BookOpen, Menu, X, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "All Books", href: "/books" },
  { name: "Add Book", href: "/add-books" },
  { name: "My Books", href: "/my-books" },
  { name: "My Borrows", href: "/my-borrows" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pathname = usePathname();

  console.log(pathname);

  return (
    <nav className="sticky top-0 z-50">
      <div
        className="max-w-7xl mx-auto pt-2 relative"
        // className="relative mx-auto max-w-[1600px] overflow-hidden rounded-[22px] border border-white/30 shadow-lg"
        // style={{
        //   backgroundImage: `
        //     linear-gradient(
        //       100deg,
        //       rgba(23, 43, 34, 0.70),
        //       rgba(39, 63, 49, 0.42),
        //       rgba(23, 43, 34, 0.65)
        //     ),
        //     url('https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=2000&q=85')
        //   `,
        //   backgroundSize: "cover",
        //   backgroundPosition: "center",
        // }}
      >
        {/* Main Navbar */}
        <header className="flex h-16 items-center justify-between px-6">
          <div className="flex items-center gap-4">
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>

            <div className="flex items-center gap-3">
              {/* logo */}
              <Link
                href="/"
                aria-label="BookNook homepage"
                className="flex items-center gap-1"
              >
                <span>
                  <BookOpen size={25} strokeWidth={1.6} />
                </span>

                <span className="text-2xl font-semibold tracking-tight">
                  BookNook
                </span>
              </Link>
            </div>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden items-center gap-1 rounded-xl border bg-[#f2f1e9]/60 p-1.5 lg:flex">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`${pathname === item.href ? "bg-[#dfe5d7]" : ""} rounded-xl px-3 py-3 text-sm font-semibold tracking-wide text-[#293a32] transition-all duration-300 hover:bg-[#dfe5d7] xl:px-4`}
              >
                {item.name}
              </Link>
            ))}
          </ul>

          {/* Authentication Actions */}
          <div className="flex items-center gap-2 ">
            <Button variant="primary" className="rounded-md ">
              Login
            </Button>

            <Button variant="outline" className="rounded-md">
              Register
            </Button>
          </div>
        </header>

        {/* Responsive Menu */}
        {isMenuOpen && (
          <div className="absolute -left-3 right-0 top-15 z-50 px-4 pt-3 w-70 md:hidden">
            <div className="rounded-md border border-white/50 bg-[#f2f1e9]/95 p-3 shadow-xl backdrop-blur-xl">
              <ul className="flex flex-col gap-1">
                {navLinks.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="flex w-full rounded-xl px-4 py-3 text-sm font-medium text-[#293a32] transition-colors hover:bg-[#dfe5d7]"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
