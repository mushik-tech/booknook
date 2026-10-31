import { Button } from "@heroui/react";
import React from "react";

const CTA = () => {
  return (
    <div className="px-2 md:px-0 mt-12 ">
      <div className="flex flex-col items-center justify-between gap-6 rounded-2xl bg-[#293a32] py-10 text-center max-w-7xl mx-auto ">
        <div>
          <h3 className="text-xl md:text-3xl font-semibold text-white">
            Ready to discover your next favorite book?
          </h3>

          <p className="mt-2 md:text-[17px] text-xs leading-6 text-white/70">
            Start exploring our collection and find your next great read.
          </p>
        </div>

        <Button size="lg" className="rounded-xl bg-[#f2f1e9] text-[#293a32]">
          Browse Books
        </Button>
      </div>
    </div>
  );
};

export default CTA;
