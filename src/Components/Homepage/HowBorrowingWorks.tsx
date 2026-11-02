import { Card } from "@heroui/react";
import { borrowingSteps } from "../../../public/data/data";

const HowBorrowingWorks = () => {
  return (
    <section className="bg-[#f2f1e9] dark:bg-black px-5 py-16">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className=" max-w-2xl mx-auto text-center mb-7">
          <h2 className="text-3xl font-bold lg:text-5xl">
            How Borrowing Works
          </h2>

          <p className="mx-auto mt-2 max-w-xl text-gray-600">
            Your next great read is just a few steps away. Discover books,
            borrow your favorites, and enjoy a world of knowledge with BookNook.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:grid-cols-4 lg:gap-6">
          {borrowingSteps.map((step) => {
            const Icon = step.icon;

            return (
              <Card
                key={step.number}
                className="flex flex-col rounded-2xl border border-[#e5e7df] p-6 sm:p-7"
              >
                {/* Number & Icon */}
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#edf3e9] text-[#3c5945] transition-all duration-300 group-hover:bg-[#293a32] group-hover:text-white">
                    <Icon size={23} />
                  </div>
                  <h3 className="text-xl font-semibold">
                    {step.title}
                  </h3>
                </div>

                <p className="mt-3 h-full text-sm leading-7 text-[#707a72]">
                  {step.description}
                </p>

                {/* Bottom Accent */}
                <div className="mt-6 h-2 w-10 rounded-full bg-[#dce5d9]" />
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowBorrowingWorks;
