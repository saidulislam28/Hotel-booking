"use client";
import ActivitiesCard from "@/component/ActivitiesCard";
import EventCard from "@/component/EventCard";
import Banner from "@/component/home/Banner";
import DiscountBanner from "@/component/home/DiscountBanner";
import EventHighlights from "@/component/home/EventHighlights";
import GenericSwiper from "@/component/home/GenericSwiper";
import OfferSection from "@/component/home/OffersSection";
import useHomeData from "@/component/hooks/useHomeData";
import OurServiceCard from "@/component/OurServiceCard";
import ReviewCard from "@/component/ReviewCard";
import RoomSingleCard from "@/component/RoomSingleCard";
import SectionTitle from "@/component/SectionTitle";
import { activitiesData, serviceData } from "@/constants/datas";
import TitleHelmet from "@/utils/Helmet";

const roomsData = [
  {
    id: 1,
    title: "Tower Deluxe Room W King Bed",
    category: "Deluxe Room",
    featured: false,
    image: "/banner-min.png",
    rating: 0,
    reviews: 0,
    roomSize: "50sqm",
    beds: "1 beds",
    maxGuests: "1 adults",
    price: 88.0,
    currency: "$",
  },
  {
    id: 2,
    title: "Deluxe King Room With Balcony",
    category: "Double Room",
    featured: true,
    image: "/banner-min.png",
    rating: 4.5,
    reviews: 2,
    roomSize: "50sqm",
    beds: "1 beds",
    maxGuests: "6 adults",
    price: 110.0,
    currency: "$",
  },
  {
    id: 3,
    title: "American Parks Trail End Rapid City",
    category: "Double Room",
    featured: true,
    image: "/banner-min.png",
    rating: 4.7,
    reviews: 3,
    roomSize: "50sqm",
    beds: "2 beds",
    maxGuests: "2 adults",
    price: 308.0,
    currency: "$",
  },
  {
    id: 4,
    title: "Hotel Deluxe Room W King Bed",
    category: "Deluxe Room",
    featured: false,
    image: "/banner-min.png",
    rating: 1,
    reviews: 1,
    roomSize: "50sqm",
    beds: "1 beds",
    maxGuests: "1 adults",
    price: 198.0,
    currency: "$",
  },
  {
    id: 5,
    title: "Premium Suite With Ocean View",
    category: "Suite",
    featured: true,
    image: "/banner-min.png",
    rating: 4.8,
    reviews: 5,
    roomSize: "75sqm",
    beds: "1 beds",
    maxGuests: "4 adults",
    price: 450.0,
    currency: "$",
  },
  {
    id: 6,
    title: "Executive Business Room",
    category: "Executive Room",
    featured: false,
    image: "/banner-min.png",
    rating: 4.2,
    reviews: 8,
    roomSize: "45sqm",
    beds: "1 beds",
    maxGuests: "2 adults",
    price: 275.0,
    currency: "$",
  },
  {
    id: 7,
    title: "Executive Business Room",
    category: "Executive Room",
    featured: false,
    image: "/banner-min.png",
    rating: 4.2,
    reviews: 8,
    roomSize: "45sqm",
    beds: "1 beds",
    maxGuests: "2 adults",
    price: 275.0,
    currency: "$",
  },
  {
    id: 8,
    title: "Executive Business Room",
    category: "Executive Room",
    featured: false,
    image: "/banner-min.png",
    rating: 4.2,
    reviews: 8,
    roomSize: "45sqm",
    beds: "1 beds",
    maxGuests: "2 adults",
    price: 275.0,
    currency: "$",
  },
];

export default function Home() {
  const { data, isLoading } = useHomeData();
  if (isLoading) {
    return <div>Loading.....</div>;
  }

  return (
    <>
      <TitleHelmet title="Home" />
      <Banner />
      <div className="max-w-7xl mx-auto">
        <div className="mt-10 md:mt-22 mb-5 md:mb-10 px-5 md:px-0">
          <SectionTitle title={"Offers to inspire you"} />
        </div>
        <OfferSection data={data?.featuredBlogs} />

        <GenericSwiper
          data={roomsData}
          CardComponent={RoomSingleCard}
          perView={4}
          title="Our rooms & suites"
          isButtonShow={true}
          href="/rooms"
          buttonText="View All Rooms"
        />

        <GenericSwiper
          data={serviceData}
          CardComponent={OurServiceCard}
          perView={3}
          title="Our Services"
          isButtonShow={false}
        />
        <DiscountBanner />
        <EventHighlights />
        <GenericSwiper
          data={activitiesData}
          CardComponent={ActivitiesCard}
          perView={4}
          title="Unwind This Long Weekend"
          isButtonShow={false}
        />
        <GenericSwiper
          data={data?.roomTestimonials}
          CardComponent={ReviewCard}
          perView={2}
          title="Every stay has a story"
          isButtonShow={false}
        />
        <GenericSwiper
          data={data?.localBlogs}
          CardComponent={EventCard}
          perView={3}
          title="Inspiration, guides, stories"
          isButtonShow={true}
          buttonText="View All Blogs"
          href="/blog"
        />
      </div>
    </>
  );
}
