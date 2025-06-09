import GenericSwiper from "@/component/home/GenericSwiper";
import AboutRestaurant from "@/component/restaurant/AboutRestaurant";
import Menus from "@/component/restaurant/Menus";
import MenuShowcase from "@/component/restaurant/MenuShowcase";
import RestaurantBanner from "@/component/restaurant/RestaurantBanner";
import ReviewCard from "@/component/ReviewCard";
import { reviewData } from "@/constants/datas";
import TitleHelmet from "@/utils/Helmet";
import PageTitle from "@/utils/PageTitle";
import React from "react";
const title = "The King Restaurant";
const page = () => {
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
        <AboutRestaurant />
        <MenuShowcase />
        <Menus />
        <GenericSwiper
          data={reviewData}
          CardComponent={ReviewCard}
          perView={2}
          title="Every stay has a story"
        />
      </div>
    </>
  );
};

export default page;
