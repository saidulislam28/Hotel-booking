import TitleHelmet from "@/utils/Helmet";
import PageTitle from "@/utils/PageTitle";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const Rooms = () => {
  return (
    <>
      <TitleHelmet title="Rooms" />
      <PageTitle
        breadcrumbs={[
          { title: "Home", href: "/" },
          { title: "Rooms", href: "/rooms" },
        ]}
        title="Room"
      />
      <div className="max-w-7xl mx-auto p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-5">
            <button className="text-md bg-[#B1905E] px-5 py-2 text-white font-semibold rounded-full hover:cursor-pointer hover:bg-[#ccae81]">
              Filter By
            </button>
            <p className="text-[#4F5E71]">Showing 1 - 12 of 23 results</p>
          </div>
          <div className="relative group">
            <p className="flex items-center gap-5 text-md bg-[#F2F4F4] px-5 py-2 text-[#4F5E71] font-semibold rounded-lg cursor-pointer">
              Hello
              <IoIosArrowDown />
            </p>
            <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-lg min-w-36">
              <p className={"block px-6 py-4 rounded-lg font-semibold"}>
                hello
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Rooms;
