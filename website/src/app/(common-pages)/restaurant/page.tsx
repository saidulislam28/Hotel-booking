"use client";
import GenericSwiper from "@/component/home/GenericSwiper";
import useHomeData from "@/component/hooks/useHomeData";
import AboutRestaurant from "@/component/restaurant/AboutRestaurant";
import Menus from "@/component/restaurant/Menus";
import MenuShowcase from "@/component/restaurant/MenuShowcase";
import RestaurantBanner from "@/component/restaurant/RestaurantBanner";
import Schedule from "@/component/restaurant/Schedule";
import ReviewCard from "@/component/ReviewCard";
import { GetData } from "@/services/api/api";
import TitleHelmet from "@/utils/Helmet";
import PageTitle from "@/utils/PageTitle";
import { useQuery } from "@tanstack/react-query";
const title = "The King Restaurant";
const Restaurant = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["rooms-data"],
    queryFn: () => GetData("/web-data/foods"),
    staleTime: 0,
    select(data) {
      return data?.data ?? [];
    },
  });

  const { data: foodData, isLoading: foodLoading } = useHomeData();

  if (isLoading) {
    return <div>Loading......</div>;
  }
  if (foodLoading) {
    return <div>Loading......</div>;
  }

  return (
    <>
      <TitleHelmet title={title} />
      <PageTitle
        breadcrumbs={[
          { title: "Home", href: "/" },
          { title: "Restaurant & Bar", href: "/restaurant-bar" },
          { title: title },
        ]}
        title={title}
      />
      <div className="max-w-7xl mx-auto p-5">
        <RestaurantBanner />
        <Schedule />
        <AboutRestaurant />
        <MenuShowcase />
        <Menus data={data} />
        <GenericSwiper
          data={foodData?.foodTestimonial}
          CardComponent={ReviewCard}
          perView={2}
          title="Every stay has a story"
          isButtonShow={false}
        />
      </div>
    </>
  );
};

export default Restaurant;
