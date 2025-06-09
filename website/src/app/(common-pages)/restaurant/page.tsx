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
    </>
  );
};

export default page;
