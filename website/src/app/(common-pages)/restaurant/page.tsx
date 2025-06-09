import AboutRestaurant from "@/component/restaurant/AboutRestaurant";
import MenuShowcase from "@/component/restaurant/MenuShowcase";
import RestaurantBanner from "@/component/restaurant/RestaurantBanner";
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
      </div>
    </>
  );
};

export default page;
