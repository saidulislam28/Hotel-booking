import RoomBookingTabs from "@/component/RoomBookingTab";
import { roomsData } from "@/constants/datas";
import TitleHelmet from "@/utils/Helmet";
import PageTitle from "@/utils/PageTitle";
import Image from "next/image";
import React from "react";

const RoomCardDetails = ({ params }) => {
  const { id } = params;

  const details = roomsData?.find((room) => room.id === Number(id));

  return (
    <>
      <TitleHelmet title={details?.title ?? "Room Details"} />
      <PageTitle
        breadcrumbs={[
          { title: "Home", href: "/" },
          { title: "Rooms", href: "/rooms" },
          { title: details?.title ?? "Room Details" },
        ]}
        title={details?.title}
      />
      <div className="max-w-7xl mx-auto p-4 ">
        <div className="flex items-start gap-8">
          <div className="w-[70%]">
            <Image
              width={840}
              height={475}
              src={details?.image ?? "/banner-min.png"}
              alt={details?.title ?? "image not found"}
              className="h-[475px] w-full object-cover cursor-pointer rounded-xl"
            />
          </div>
          <div className="w-[30%]">
            <RoomBookingTabs item={details} />
          </div>
        </div>
      </div>
    </>
  );
};

export default RoomCardDetails;
