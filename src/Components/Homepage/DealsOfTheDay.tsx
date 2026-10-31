import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShoppingBag } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Rival Messenger",
    price: 40,
    oldPrice: 45,
    image:
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=500&q=85",
  },
  {
    id: 2,
    name: "Voyage Yoga Bag",
    price: 30,
    oldPrice: 32,
    image:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=500&q=85",
  },
  {
    id: 3,
    name: "Impulse Duffle",
    price: 70,
    oldPrice: 74,
    image:
      "https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&w=500&q=85",
  },
  {
    id: 4,
    name: "Compete Track Tote",
    price: 32,
    oldPrice: null,
    image:
      "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=500&q=85",
  },
];

const featuredProduct = {
  name: "Sprite Yoga Straps",
  price: 36,
  oldPrice: 38,
  description:
    "Long printed dress with thin adjustable straps. V-neckline and wiring under the bust with ruffles at the bottom of the dress.",
  image:
    "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=800&q=85",
};

const DealsOfTheDay = () => {
  return (
    <section className="py-12 lg:py-20">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-10 lg:mb-0">
          <h2 className="text-xl font-bold uppercase text-[#373737] sm:text-2xl">
            Deals of the Day
          </h2>
        </div>

        {/* Main Layout */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 lg:items-center lg:gap-8">
          {/* Featured Product Details */}
          <div className="flex flex-col items-center text-center lg:items-end  lg:text-right">
            <h3 className="max-w-lg text-6xl text-[#363636]">
              {featuredProduct.name}
            </h3>

            {/* Pricing */}
            <div className="mt-5 flex flex-col items-center gap-1 lg:items-end">
              <span className="text-lg italic text-[#858585] line-through">
                ${featuredProduct.oldPrice.toFixed(2)}
              </span>

              <span className="text-3xl italic text-[#20aaa9] sm:text-4xl">
                ${featuredProduct.price.toFixed(2)}
              </span>
            </div>

            <p className="mt-8 max-w-md text-base leading-7 text-[#555555] sm:text-lg">
              {featuredProduct.description}
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
              aria-label={`Explore ${featuredProduct.name}`}
              className="group flex h-95 items-center justify-center border-2 border-[#ff9800] p-8 transition-colors duration-300 hover:border-[#20aaa9] sm:h-120 lg:h-140 lg:p-12"
            >
              <div className="relative h-full w-full max-w-[320px] transition-transform duration-500 group-hover:scale-[1.03]">
                <Image
                  src={featuredProduct.image}
                  alt={featuredProduct.name}
                  fill
                  sizes="(max-width: 1024px) 80vw, 30vw"
                  className="object-contain drop-shadow-2xl"
                />
              </div>
            </Link>
          </div>

          {/* Other Deals */}
          <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-x-8 sm:gap-y-10">
            {products.map((product) => (
              <Link
                key={product.id}
                href="/books"
                className="group flex min-w-0 flex-col items-center text-center"
              >
                {/* Product Image */}
                <div className="relative h-48 w-full max-w-47.5 sm:h-60">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 640px) 40vw, (max-width: 1024px) 25vw, 15vw"
                    className="object-contain drop-shadow-lg transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Product Name */}
                <h4 className="mt-4 line-clamp-2 text-base text-[#414141] transition-colors group-hover:text-[#20aaa9] sm:text-lg">
                  {product.name}
                </h4>

                {/* Product Price */}
                <div className="mt-1 flex flex-wrap items-center justify-center gap-2">
                  <span className="text-lg italic text-[#ff782f] sm:text-xl">
                    ${product.price.toFixed(2)}
                  </span>

                  {product.oldPrice && (
                    <span className="text-sm italic text-[#999999] line-through sm:text-base">
                      ${product.oldPrice.toFixed(2)}
                    </span>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DealsOfTheDay;
