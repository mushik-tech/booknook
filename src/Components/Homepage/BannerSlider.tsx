"use client";

import Link from "next/link";
import { Button } from "@heroui/react";
import { BookOpen } from "lucide-react";

export interface BannerSliderProps {
  slide: {
    id: number;
    eyebrow: string;
    title: string;
    description: string;
    image: string;
  };
}

const BannerSlider = ({ slide }: BannerSliderProps) => {
  return (
    <div
      className="flex min-h-110 items-center bg-cover bg-center sm:min-h-125 lg:min-h-140"
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(20,35,27,0.92) 0%, rgba(20,35,27,0.76) 45%, rgba(20,35,27,0.25) 100%), url("${slide.image}")`,
      }}
    >
      {/* Content */}
      <div className="max-w-3xl px-6 pb-20 pt-10 sm:px-10 md:px-14 lg:px-16">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border bg-white/10 px-4 py-2">
          <BookOpen size={15} className="text-[#d6e3b5]" />

          <span className="text-xs font-semibold text-white">
            {slide.eyebrow}
          </span>
        </div>

        <h1 className="max-w-2xl text-4xl font-bold text-white sm:text-5xl lg:text-7xl">
          {slide.title}
        </h1>

        <p className="mt-6 max-w-xl text-white/80 lg:text-lg">
          {slide.description}
        </p>

        {/* CTA */}
        <Link href={"/books"}>
          <Button
            size="lg"
            className="rounded-xl bg-[#f2f1e9] text-[#293a32] mt-8"
          >
            Browse Books
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default BannerSlider;
