# BookNook

A community-driven book borrowing platform where readers discover new titles, share books from their own shelves, and manage their borrows — all in one place.

**Live Site:** https://booknook-hazel-nine.vercel.app


## Features

- **Discover and browse books** — A curated homepage with an auto-playing hero slider, new arrivals, and a "Deals of the Day" section, plus a full catalog on the All Books page.
- **Borrow and return books** — Readers can request a book, see it appear in My Borrows with borrow and return dates, and return it when finished, with available copies updated automatically.
- **Share your own collection** — Add books with a title, author, category, description, and cover image (uploaded through ImgBB), then edit or delete them from a personal My Books dashboard.
- **Secure authentication** — Email/password sign-up and sign-in alongside Google OAuth, powered by Better Auth with MongoDB-backed sessions, JWT tokens, and protected account pages.
- **Personal library dashboard** — Dedicated pages for My Books (with a live book count), My Borrows, and My Profile, all requiring an authenticated session.
- **Category-based organization** — Books are grouped into Fiction, Science, History, Kids, and Others so every reader can find their kind of story.
- **Dark and light themes** — A persistent, system-aware theme toggle built with `next-themes`, available from the navigation bar.
- **Responsive, accessible UI** — Mobile-first layouts built with Tailwind CSS v4 and HeroUI, including a collapsible mobile menu, skeleton loading states, and accessible labels.

## Tech Stack

| Layer     | Technologies                                            |
| --------- | ------------------------------------------------------- |
| Framework | Next.js 16 (App Router), React 19, TypeScript           |
| Styling   | Tailwind CSS v4, HeroUI, next-themes,                   |
| Auth      | Better Auth (MongoDB adapter, JWT plugin, Google OAuth) |
| Database  | MongoDB                                                 |
| UI Extras | Swiper, Lucide Icons, Iconify                           |
