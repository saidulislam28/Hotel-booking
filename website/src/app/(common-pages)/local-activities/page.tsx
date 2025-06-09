import LocalActivitiesCard from "@/component/local-activities/LocalActivitiesCard";
import LocalBanner from "@/component/local-activities/LocalBanner";
import { activitiesData } from "@/constants/datas";
import TitleHelmet from "@/utils/Helmet";
import PageTitle from "@/utils/PageTitle";
import React from "react";
const title = "Local Activities";
const LocalActivities = () => {
  return (
    <>
      <TitleHelmet title={title} />
      <PageTitle
        breadcrumbs={[{ title: "Home", href: "/" }, { title: title }]}
        title={title}
      />
      <div className="max-w-7xl mx-auto p-5">
        <p className="max-w-5xl mx-auto text-[#4F5E71] text-center mb-10">
          Welcome to the beach, where the sun, sand, and sea beckon for endless
          fun and relaxation! Alongside the soothing sound of waves, you will
          find a treasure trove of activities to delight in.
        </p>
        <LocalBanner />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
          {activitiesData.map((item, index) => (
          <LocalActivitiesCard key={index} item={item} />
        ))}
        </div>
      </div>
    </>
  );
};

export default LocalActivities;
