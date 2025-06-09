import PackageCard from "@/component/activities-details/PackageCard";
import ActivitiesShowCase from "@/component/local-activities/ActivitiesShowCase";
import SectionTitle from "@/component/SectionTitle";
import { SurfPackages } from "@/constants/datas";
import TitleHelmet from "@/utils/Helmet";
import PageTitle from "@/utils/PageTitle";
import React from "react";
const title = "Activities Details";
const page = () => {
  return (
    <>
      <TitleHelmet title={title} />
      <PageTitle
        breadcrumbs={[
          { title: "Home", href: "/" },
          { title: "Local Activities", href: "/local-activities" },
          { title: title },
        ]}
        title={title}
      />
      <div className="max-w-7xl mx-auto p-5">
        <ActivitiesShowCase />
      </div>
      <div className="bg-[#F2F4F4] my-10 py-20">
        <div className="max-w-7xl mx-auto p-5">
          <div className="text-center max-w-lg mx-auto">
            <SectionTitle
              title={
                "Curious about Surfing? Discover Our San Diego Surf Lessons"
              }
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {SurfPackages.map((item, index) => (
              <PackageCard key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
