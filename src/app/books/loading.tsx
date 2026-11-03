import { Skeleton, Card } from "@heroui/react";

export default function AllBooksLoading() {
  return (
    <main className="mx-auto my-12 max-w-7xl px-7 md:px-0">
      {/* Heading */}
      <div className="mb-6 flex items-center justify-between gap-3">
        <div className="space-y-3">
          <Skeleton animationType="shimmer" className="h-10 w-56 rounded-lg" />

          <Skeleton animationType="shimmer" className="h-4 w-64 rounded-md" />
        </div>

        {/* Total Books */}
        <div className="flex items-center gap-3 rounded-full border px-4 py-2">
          <Skeleton animationType="shimmer" className="h-4 w-20 rounded-md" />

          <Skeleton animationType="shimmer" className="h-7 w-7 rounded-full" />
        </div>
      </div>

      {/* Books Grid */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <Card key={index} className="flex flex-row overflow-hidden">
            {/* Book Image */}
            <div className="relative shrink-0">
              <Skeleton
                animationType="shimmer"
                className="h-48 w-36 rounded-none"
              />

              {/* Category Badge */}
              <Skeleton
                animationType="shimmer"
                className="absolute left-3 top-3 h-6 w-16 rounded-full"
              />
            </div>

            {/* Book Information */}
            <div className="flex flex-1 flex-col justify-between gap-4 p-4">
              <div className="space-y-3">
                {/* Book Title */}
                <Skeleton
                  animationType="shimmer"
                  className="h-6 w-full rounded-md"
                />

                <Skeleton
                  animationType="shimmer"
                  className="h-6 w-4/5 rounded-md"
                />

                {/* Author */}
                <Skeleton
                  animationType="shimmer"
                  className="h-4 w-28 rounded-md"
                />
              </div>

              {/* View Details Button */}
              <Skeleton
                animationType="shimmer"
                className="h-10 w-28 rounded-lg"
              />
            </div>
          </Card>
        ))}
      </div>
    </main>
  );
}
