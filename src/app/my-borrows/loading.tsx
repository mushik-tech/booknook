import { Skeleton } from "@heroui/react";

export default function MyBorrowsLoading() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10 lg:px-8">
      {/* Header Skeleton */}
      <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div className="space-y-3">
          <Skeleton animationType="shimmer" className="h-9 w-64 rounded-lg" />
          <Skeleton
            animationType="shimmer"
            className="h-4 w-80 max-w-full rounded-lg"
          />
        </div>

        {/* Total Borrows */}
        <div className="w-50 space-y-3 rounded-xl border p-5">
          <Skeleton animationType="shimmer" className="h-4 w-24 rounded-lg" />
          <Skeleton animationType="shimmer" className="h-7 w-12 rounded-lg" />
        </div>
      </div>

      {/* Borrowed Books Table */}
      <div className="overflow-x-auto rounded-2xl border">
        <table className="w-full min-w-175 text-left text-sm">
          <thead className="border-b bg-default-100">
            <tr>
              {["Book", "Borrow Date", "Return Date", "Actions"].map(
                (heading) => (
                  <th key={heading} className="px-5 py-4">
                    <Skeleton
                      animationType="shimmer"
                      className="h-4 w-20 rounded-md"
                    />
                  </th>
                ),
              )}
            </tr>
          </thead>

          <tbody>
            {Array.from({ length: 5 }).map((_, index) => (
              <tr key={index} className="border-b last:border-b-0">
                {/* Book */}
                <td className="px-5 py-4">
                  <div className="flex items-center gap-3">
                    <Skeleton
                      animationType="shimmer"
                      className="h-12 w-12 shrink-0 rounded-lg"
                    />
                    <Skeleton
                      animationType="shimmer"
                      className="h-4 w-32 rounded-md"
                    />
                  </div>
                </td>

                {/* Borrow Date */}
                <td className="px-5 py-4">
                  <Skeleton
                    animationType="shimmer"
                    className="h-4 w-28 rounded-md"
                  />
                </td>

                {/* Return Date */}
                <td className="px-5 py-4">
                  <Skeleton
                    animationType="shimmer"
                    className="h-4 w-28 rounded-md"
                  />
                </td>

                {/* Actions */}
                <td className="px-5 py-4">
                  <div className="flex justify-center">
                    <Skeleton
                      animationType="shimmer"
                      className="h-9 w-24 rounded-lg"
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
