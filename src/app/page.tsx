import Banner from "@/Components/Homepage/Banner";
import CTA from "@/Components/Homepage/CTA";
import DealsOfTheDay from "@/Components/Homepage/DealsOfTheDay";
import HowBorrowingWorks from "@/Components/Homepage/HowBorrowingWorks";
import NewArrival from "@/Components/Homepage/NewArrival";
import { Button } from "@heroui/react";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <NewArrival></NewArrival>
      <DealsOfTheDay></DealsOfTheDay>
      <HowBorrowingWorks></HowBorrowingWorks>
      <CTA></CTA>
    </div>
  );
}
