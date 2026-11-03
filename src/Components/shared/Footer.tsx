"use client";

import Link from "next/link";
import { BookOpen, Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";
import { Icon } from "@iconify/react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-12 border-t border-[#e5e5dc] bg-[#f2f1e9] dark:bg-black dark:border-gray-700 text-[#293a32]">
      <div className="mx-auto max-w-7xl px-6 pt-14 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          {/* Brand */}
          <div className="space-y-5">
            <Link
              href="/"
              className="inline-flex items-center gap-2"
              aria-label="BookNook homepage"
            >
              <BookOpen
                size={30}
                strokeWidth={1.7}
                className="dark:text-white"
              />

              <span className="text-2xl font-semibold dark:text-white">
                BookNook
              </span>
            </Link>

            <p className="max-w-xs text-sm leading-7 text-[#66736b]">
              Your next favorite book is waiting for you. Discover new stories,
              share your collection, and make every page count with BookNook.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-1">
              <a
                aria-label="Facebook"
                className="rounded-full border border-[#d8ded4] p-2.5 transition-all duration-300 hover:border-[#293a32] hover:bg-[#293a32] hover:text-white"
              >
                <Icon icon="devicon:facebook" />
              </a>

              <a
                aria-label="Instagram"
                className="rounded-full border border-[#d8ded4] p-2.5 transition-all duration-300 hover:border-[#293a32] hover:bg-[#293a32] hover:text-white"
              >
                <Icon icon="devicon:google" />
              </a>

              <a
                aria-label="X"
                className="rounded-full dark:bg-white border border-[#d8ded4] p-2.5 transition-all duration-300 hover:border-[#293a32] hover:bg-[#293a32] hover:text-white"
              >
                <Icon icon="devicon:twitter" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-sm font-bold uppercase dark:text-white">
              Explore
            </h3>

            <ul className="space-y-3.5 text-sm text-[#66736b]">
              <li>
                <Link
                  href="/"
                  className="transition-colors hover:text-[#293a32]"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/books"
                  className="transition-colors hover:text-[#293a32]"
                >
                  All Books
                </Link>
              </li>

              <li>
                <Link
                  href="/books/add"
                  className="transition-colors hover:text-[#293a32]"
                >
                  Add a Book
                </Link>
              </li>

              <li>
                <Link
                  href="/my-books"
                  className="transition-colors hover:text-[#293a32]"
                >
                  My Books
                </Link>
              </li>

              <li>
                <Link
                  href="/my-borrows"
                  className="transition-colors hover:text-[#293a32]"
                >
                  My Borrows
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-sm font-bold uppercase dark:text-white">
              Get in Touch
            </h3>

            <ul className="space-y-4 text-sm text-[#66736b]">
              <li className="flex items-start gap-3">
                <Mail size={18} className="mt-0.5 shrink-0 text-[#293a32]" />
                <a
                  href="mailto:support@booknook.com"
                  className="transition-colors hover:text-[#293a32]"
                >
                  support@booknook.com
                </a>
              </li>

              <li className="flex items-start gap-3">
                <Phone size={18} className="mt-0.5 shrink-0 text-[#293a32]" />
                <a
                  href="tel:+8801700000000"
                  className="transition-colors hover:text-[#293a32]"
                >
                  +880 1700-000000
                </a>
              </li>

              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-[#293a32]" />
                <span>Dhaka, Bangladesh</span>
              </li>
            </ul>
          </div>

          {/* Newsletter / CTA */}
          <div>
            <h3 className="mb-5 text-sm font-bold uppercase dark:text-white">
              Keep Exploring
            </h3>

            <p className="mb-5 text-sm leading-7 text-[#66736b]">
              Great books open new worlds. Start exploring your next read today.
            </p>

            <Link
              href="/books"
              className="inline-flex items-center gap-2 rounded-xl bg-[#293a32] dark:bg-black dark:border-2 px-5 py-3 text-sm font-semibold text-white"
            >
              Discover Books
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 pb-8 border-t border-[#d8ded4] dark:border-gray-700 pt-6">
        <p className="text-sm text-[#66736b] text-center">
          © {currentYear} BookNook. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
