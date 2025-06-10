import EventCard from "@/component/EventCard";
import { eventData } from "@/constants/datas";
import TitleHelmet from "@/utils/Helmet";
import PageTitle from "@/utils/PageTitle";
import React from "react";
import { IoSearch } from "react-icons/io5";
const title = "Blog";
const page = () => {
  const categories = ["Design", "Event", "Gallery", "Hotel", "Uncategorized"];

  const tags = [
    "Air Taxi",
    "Beach Hotel",
    "Hotel",
    "Party",
    "Summer View",
    "Swimming",
  ];
  return (
    <>
      <TitleHelmet title="Rooms" />
      <PageTitle
        breadcrumbs={[{ title: "Home", href: "/" }, { title: title }]}
        title={title}
      />
      <div className="max-w-7xl mx-auto p-5 flex items-start gap-5">
        <div className="w-[70%] grid grid-cols-2 gap-5">
          {eventData.map((item, index) => (
            <EventCard key={index} item={item} />
          ))}
        </div>
        <div className="w-[30%]">
          <div className="relative mb-8">
            <IoSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Enter keyword"
              className="w-full pl-10 pr-4 py-3 bg-[#F2F4F4] rounded-lg border-0 text-gray-700 placeholder-gray-400 focus:outline-none"
            />
          </div>

          {/* Categories Section */}
          <div className="mb-8 border-2 border-gray-200 rounded-xl p-5">
            <h2 className="text-xl font-semibold mb-4">Categories</h2>
            <div className="flex flex-wrap gap-3">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className="px-4 py-2 cursor-pointer bg-white hover:bg-[#B1905E] border border-gray-200 rounded-full text-[#4F5E71] hover:text-white text-sm"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Tags Section */}
          <div className="border-2 border-gray-200 rounded-xl p-5">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Tags</h2>
            <div className="flex flex-wrap gap-3">
              {tags.map((tag, index) => (
                <button
                  key={index}
                  className="px-4 py-2 bg-gray-100 rounded-lg text-[#4F5E71] hover:text-white text-sm hover:bg-[#B1905E] transition-colors cursor-pointer"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
