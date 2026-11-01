import Image from "next/image";
import Link from "next/link";
import { products } from "../../../public/data/data";
import DealCard from "../shared/DealCard";

const DealsOfTheDay = () => {
  return (
    <section className="py-12 lg:py-20">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-10 lg:mb-0">
          <h2 className="text-xl font-bold uppercase t sm:text-2xl">
            Deals of the Day
          </h2>
        </div>

        {/* Main Layout */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 lg:items-center lg:gap-8">
          {/* Featured Product Details */}
          <div className="flex flex-col items-center text-center lg:items-end  lg:text-right">
            <h3 className="max-w-lg text-6xl ">Sprite Yoga Straps</h3>

            {/* Pricing */}
            <div className="mt-5 flex flex-col items-center gap-1 lg:items-end">
              <span className="text-lg italic text-[#858585] line-through">
                $38.00
              </span>

              <span className="text-3xl italic text-[#20aaa9] sm:text-4xl">
                $36.00
              </span>
            </div>

            <p className="mt-8 max-w-md text-base leading-7 text-[#555555] sm:text-lg">
              Long printed dress with thin adjustable straps. V-neckline and
              wiring under the bust with ruffles at the bottom of the dress.
            </p>

            {/* Countdown */}
            <div
              className="mt-8 grid w-full max-w-md grid-cols-4 gap-2 sm:gap-3 lg:max-w-none"
              aria-label="Time remaining in the deal"
            >
              <div className="flex flex-col items-center">
                <div className="flex h-14 w-full items-center justify-center rounded-md border text-2xl sm:text-3xl">
                  1
                </div>

                <span className="mt-1.5 text-xs text-[#777777] sm:text-sm">
                  Days
                </span>
              </div>

              <div className="flex flex-col items-center">
                <div className="flex h-14 w-full items-center justify-center rounded-md border text-2xl sm:text-3xl">
                  20
                </div>

                <span className="mt-1.5 text-xs text-[#777777] sm:text-sm">
                  Hrs
                </span>
              </div>

              <div className="flex flex-col items-center">
                <div className="flex h-14 w-full items-center justify-center rounded-md border text-2xl sm:text-3xl">
                  10
                </div>

                <span className="mt-1.5 text-xs text-[#777777] sm:text-sm">
                  Mins
                </span>
              </div>

              <div className="flex flex-col items-center">
                <div className="flex h-14 w-full items-center justify-center rounded-md border text-2xl sm:text-3xl">
                  12
                </div>

                <span className="mt-1.5 text-xs text-[#777777] sm:text-sm">
                  Secs
                </span>
              </div>
            </div>
          </div>

          {/* Featured Product Image */}
          <div>
            <Link
              href="/books"
              aria-label="Explore Sprite Yoga Straps"
              className="group flex h-95 items-center justify-center border-2 p-8 border-[#20aaa9] sm:h-120 lg:h-140 lg:p-12 dark:border-gray-700"
            >
              <div className="relative h-full w-full max-w-[320px] transition-transform duration-500 hover:scale-[1.03]">
                <Image
                  src="https://images.unsplash.com/photo-1543002588-bfa74002ed7e"
                  alt="Sprite Yoga Straps"
                  fill
                  className="object-contain drop-shadow-2xl"
                />
              </div>
            </Link>
          </div>

          {/* Other Deals */}
          <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-x-8 sm:gap-y-10">
            {products.map((product) => (
              <DealCard key={product.id} product={product}></DealCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DealsOfTheDay;
