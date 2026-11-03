import { Skeleton, Card } from "@heroui/react";

export default function BookDetailsLoading() {
  return (
    <main className="mx-auto my-12 max-w-7xl px-4 animate-pulse">
      {/* Breadcrumb */}
      <div className="mb-6 flex items-center gap-3">
        <Skeleton animationType="shimmer" className="h-4 w-12 rounded-md" />
        <Skeleton animationType="shimmer" className="h-4 w-3 rounded-md" />
        <Skeleton animationType="shimmer" className="h-4 w-32 rounded-md" />
      </div>

      {/* Book Details Card */}
      <Card className="grid grid-cols-1 gap-6 p-5 md:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:gap-12">
        {/* Book Cover */}
        <div className="flex justify-center">
          <Skeleton
            animationType="shimmer"
            className="aspect-3/4 w-full max-w-75 rounded-xl"
          />
        </div>

        {/* Book Information */}
        <div className="col-span-1 flex flex-col justify-center gap-6 py-2 md:col-span-2">
          {/* Title and Author */}
          <div className="space-y-4">
            <Skeleton
              animationType="shimmer"
              className="h-9 w-3/4 rounded-lg"
            />

            <div className="flex items-center gap-2">
              <Skeleton
                animationType="shimmer"
                className="h-4 w-20 rounded-md"
              />
              <Skeleton
                animationType="shimmer"
                className="h-4 w-32 rounded-md"
              />
            </div>

            {/* Category */}
            <div className="flex items-center gap-4">
              <Skeleton
                animationType="shimmer"
                className="h-4 w-16 rounded-md"
              />
              <Skeleton
                animationType="shimmer"
                className="h-8 w-28 rounded-full"
              />
            </div>
          </div>

          {/* Description */}
          <div className="space-y-4 border-t border-default-200 pt-5">
            <Skeleton animationType="shimmer" className="h-6 w-40 rounded-md" />

            <div className="space-y-3">
              <Skeleton
                animationType="shimmer"
                className="h-4 w-full rounded-md"
              />
              <Skeleton
                animationType="shimmer"
                className="h-4 w-full rounded-md"
              />
              <Skeleton
                animationType="shimmer"
                className="h-4 w-5/6 rounded-md"
              />
              <Skeleton
                animationType="shimmer"
                className="h-4 w-4/6 rounded-md"
              />
            </div>
          </div>

          {/* Added By */}
          <div className="space-y-3 rounded-xl bg-default-100 p-4">
            <Skeleton animationType="shimmer" className="h-3 w-20 rounded-md" />
            <Skeleton animationType="shimmer" className="h-5 w-32 rounded-md" />
            <Skeleton
              animationType="shimmer"
              className="h-4 w-48 max-w-full rounded-md"
            />
          </div>

          {/* Borrow Button and Available Copies */}
          <div className="flex flex-col gap-3 md:flex-row md:gap-10">
            <Skeleton
              animationType="shimmer"
              className="h-12 w-full rounded-xl md:w-40"
            />

            <div className="flex items-center gap-3 rounded-2xl border border-default-200 px-4 py-2">
              <Skeleton
                animationType="shimmer"
                className="h-4 w-28 rounded-md"
              />
              <Skeleton
                animationType="shimmer"
                className="h-7 w-10 rounded-full"
              />
            </div>
          </div>
        </div>
      </Card>
    </main>
  );
}
