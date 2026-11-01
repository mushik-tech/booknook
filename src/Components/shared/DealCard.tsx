import Image from "next/image";
import Link from "next/link";

export interface DealCardProps {
  product: {
    id: number;
    name: string;
    price: number;
    oldPrice: number;
    image: string;
  };
}

const DealCard = ({ product }: DealCardProps) => {
  return (
    <Link
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
      <h4 className="mt-4 line-clamp-2 text-base sm:text-lg">{product.name}</h4>

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
  );
};

export default DealCard;
