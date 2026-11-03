import Link from "next/link";
import { Button } from "@heroui/react";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-100 items-center justify-center my-12 dark:border dark:border-slate-700 rounded-2xl max-w-7xl mx-auto">
      <div className="w-full max-w-lg text-center">
        <div className="mx-auto rounded-full text-5xl bg-danger px-4 py-2 font-bold text-white shadow-lg w-40 text-center bg-primary/10 mb-8">
          404
        </div>

        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-primary">
          Page Not Found
        </p>

        <h1 className="mb-4 text-4xl font-bold md:text-5xl">
          Lost Between Pages?
        </h1>

        <p className="mx-auto mb-7 max-w-md">
          Oops! The page you're looking for doesn't exist or may have been
          moved. Let's help you find your next favorite book.
        </p>

        <div>
          <Link href={"/"}>
            <Button variant="primary" size="lg">
              <Home size={18} />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
