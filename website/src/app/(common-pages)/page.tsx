import Banner from "@/component/home/Banner";
import OfferSection from "@/component/home/OffersSection";
import SectionTitle from "@/component/SectionTitle";

export default async function Home() {
  return (
    <>
      <Banner />
      <div className="max-w-7xl mx-auto">
        <SectionTitle title={"Offers to inspire you"} />
        <OfferSection />
      </div>
    </>
  );
}
