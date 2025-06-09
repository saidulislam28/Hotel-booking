import RestaurantBanner from "@/component/restaurant-bar/RestaurantBanner";
import TitleHelmet from "@/utils/Helmet";
import PageTitle from "@/utils/PageTitle";
import React from "react";
const title = "Restaurant & Bar";
const page = () => {
  return (
    <>
      <TitleHelmet title={title} />
      <PageTitle
        breadcrumbs={[
          { title: "Home", href: "/" },
          { title: title },
        ]}
        title={title}
      />
      <div>
        <RestaurantBanner />
      </div>
    </>
  );
};

export default page;
