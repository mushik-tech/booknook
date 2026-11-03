import { Skeleton } from "@heroui/react";

export default function MyBooksLoading() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div className="space-y-3">
          <Skeleton animationType="shimmer" className="h-9 w-48 rounded-lg" />
          <Skeleton
            animationType="shimmer"
            className="h-4 w-72 max-w-full rounded-lg"
          />
        </div>

        {/* Total Books */}
        <div className="w-40 space-y-3 rounded-xl border p-5">
          <Skeleton animationType="shimmer" className="h-4 w-20 rounded-lg" />
          <Skeleton animationType="shimmer" className="h-7 w-12 rounded-lg" />
        </div>
      </div>

      {/* Books Table */}
      <div className="overflow-x-auto rounded-2xl border">
        <table className="w-full min-w-175 text-left text-sm">
          <thead className="border-b bg-default-100">
            <tr>
              {["Book", "Author", "Category", "Copies", "Actions"].map(
                (heading) => (
                  <th key={heading} className="px-5 py-4">
                    <Skeleton
                      animationType="shimmer"
                      className="h-4 w-16 rounded-md"
                    />
                  </th>
                ),
              )}
            </tr>
          </thead>

          <tbody>
            {Array.from({ length: 5 }).map((_, index) => (
              <tr key={index} className="border-b last:border-b-0">
                <td className="px-5 py-5">
                  <Skeleton
                    animationType="shimmer"
                    className="h-4 w-32 rounded-md"
                  />
                </td>

                <td className="px-5 py-5">
                  <Skeleton
                    animationType="shimmer"
                    className="h-4 w-24 rounded-md"
                  />
                </td>

                <td className="px-5 py-5">
                  <Skeleton
                    animationType="shimmer"
                    className="h-4 w-20 rounded-md"
                  />
                </td>

                <td className="px-5 py-5">
                  <Skeleton
                    animationType="shimmer"
                    className="h-4 w-10 rounded-md"
                  />
                </td>

                <td className="px-5 py-5">
                  <div className="flex justify-center gap-2">
                    <Skeleton
                      animationType="shimmer"
                      className="h-8 w-16 rounded-lg"
                    />
                    <Skeleton
                      animationType="shimmer"
                      className="h-8 w-16 rounded-lg"
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
