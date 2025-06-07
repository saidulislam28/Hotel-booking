import TitleHelmet from "@/utils/Helmet";
import PageTitle from "@/utils/PageTitle";
import React from "react";
const title = 'Restaurant & Bar'
const page = () => {
  return (
    <>
      <TitleHelmet title={title} />
      <PageTitle
        breadcrumbs={[
          { title: "Home", href: "/" },
          { title: "restaurant & bar", href: "/restaurant-bar" },
        ]}
        title={title}
      />
      <div>this is restaurant and bar</div>
    </>
  );
};

export default page;
