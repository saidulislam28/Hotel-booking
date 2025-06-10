import EventCard from "@/component/EventCard";
import SectionTitle from "@/component/SectionTitle";
import { eventData } from "@/constants/datas";
import TitleHelmet from "@/utils/Helmet";
import PageTitle from "@/utils/PageTitle";
import Image from "next/image";
import React from "react";
import { CiShare2 } from "react-icons/ci";
import { FaUser } from "react-icons/fa6";

const page = ({ params }) => {
  const { id } = params;
  const blog = eventData.find((data) => data.id === Number(id));
  const title = blog?.title;
  return (
    <>
      <TitleHelmet title={title} />
      <PageTitle
        breadcrumbs={[
          { title: "Home", href: "/" },
          { title: "blog", href: "/blog" },
          { title: title ?? "Blog Details" },
        ]}
        title={title}
      />
      <div className="max-w-7xl mx-auto p-5">
        <div className="mb-10 w-full flex justify-center items-center gap-5">
          {/* <Image
          width={50}
          height={50}
          src={''}
          alt="profile"
          className="w-[50px] h-[50px] object-cover"
          /> */}
          <div className=" p-2 rounded-full bg-gray-300">
            <FaUser size={24} color="white" />
          </div>
          <p className="text-[#4F5E71]">Saidul | October 27, 2024 |</p>
        </div>

        <div className="rounded-xl">
          <Image
            width={1270}
            height={670}
            src={blog?.image ?? "/banner-min.png"}
            alt="image"
            className="w-[1270px] h-[670px] object-cover rounded-xl"
          />
        </div>
        <p className="mt-12 max-w-4xl mx-auto text-start text-[#4F5E71]">
          {blog?.short_desc}
        </p>
        <div className="w-full flex justify-end my-10">
          <button className="flex items-center gap-2 text-[#B1905E] hover:text-white bg-white hover:bg-[#B1905E] border border-[#B1905E] text-xl px-5 py-2 rounded-full cursor-pointer">
            <CiShare2 className="font-bold" size={24} /> Share
          </button>
        </div>
        <SectionTitle title="Related Blogs" className="text-center my-10" />
        <div className=" grid grid-cols-3 gap-5">
          {eventData.map((item, index) => (
            <EventCard key={index} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default page;
