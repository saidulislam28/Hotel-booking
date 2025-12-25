import PackageCard from "@/component/activities-details/PackageCard";
import FAQSection from "@/component/Faq";
import FadeUpWrapper from "@/component/hooks/FadeupWrapper";
import ActivitiesShowCase from "@/component/local-activities/ActivitiesShowCase";
import GalleryShowcase from "@/component/local-activities/GalleryShowcase";
import SectionTitle from "@/component/SectionTitle";
import SectionTitleMedium from "@/component/SectionTitleMedium";
import {
  practicalQuestionsFAQ,
  servicesAndInstructorsFAQ,
  SurfPackages,
} from "@/constants/datas";
import TitleHelmet from "@/utils/Helmet";
import PageTitle from "@/utils/PageTitle";
import Image from "next/image";
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
      <FadeUpWrapper>
        <div className="max-w-7xl mx-auto p-5">
          <ActivitiesShowCase />
        </div>
      </FadeUpWrapper>

      {/* faq section  */}
      <FadeUpWrapper>
        <div className="max-w-7xl mx-auto rounded-xl border-gray-200 p-5 flex items-center justify-between gap-8 my-20">
          <div className="w-[50%]">
            <Image
              width={520}
              height={540}
              src={"/Menu.png"}
              alt="menus coming"
              prefix="blur"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col w-[50%]">
            <SectionTitleMedium title={"What You Also Get"} />
            <FAQSection faqs={practicalQuestionsFAQ} />
          </div>
        </div>
      </FadeUpWrapper>

      {/* Package cards  */}
      <FadeUpWrapper>
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
      </FadeUpWrapper>
      {/* Faq section  */}
      <FadeUpWrapper>
        <div className="max-w-7xl mx-auto rounded-xl border-gray-200 p-5 flex flex-row-reverse items-center justify-between gap-8 my-20">
          <div className="w-[50%]">
            <Image
              width={520}
              height={540}
              src={"/Menu.png"}
              alt="menus coming"
              prefix="blur"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col w-[50%]">
            <SectionTitleMedium title={"What You Also Get"} />
            <FAQSection faqs={servicesAndInstructorsFAQ} />
          </div>
        </div>
      </FadeUpWrapper>

      <FadeUpWrapper>
        <div className="max-w-7xl mx-auto p-5">
          <GalleryShowcase />
        </div>
      </FadeUpWrapper>
    </>
  );
};

export default page;
