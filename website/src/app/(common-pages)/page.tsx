import Banner from "@/component/home/Banner";
import OfferSection from "@/component/home/OffersSection";
import HotelRoomsSwiper from "@/component/home/RoomCard";
import SectionTitle from "@/component/SectionTitle";

export default async function Home() {
  return (
    <>
      <Banner />
      <div className="max-w-7xl mx-auto">
        <div className="mt-22 mb-10">
          <SectionTitle title={"Offers to inspire you"} />
        </div>
        <OfferSection />
        <HotelRoomsSwiper />
      </div>
    </>
  );
}
